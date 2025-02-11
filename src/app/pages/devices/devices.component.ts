import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from 'src/app/services/device.service';
import { CategoryService } from 'src/app/services/category.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class DevicesComponent implements OnInit {
  devices: any[] = [];
  categories: any[] = [];
  deviceForm: FormGroup;

  constructor(
    private deviceService: DeviceService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.deviceForm = this.fb.group({
      categoryId: ['', Validators.required],
      color: ['', [Validators.required, Validators.maxLength(16)]],
      partNumber: ['', [Validators.required, Validators.pattern("^[0-9]+$")]]
    });
  }

  ngOnInit() {
    this.loadDevices();
    this.loadCategories();
  }

  loadDevices() {
    this.deviceService.getAll().subscribe(data => {
      this.devices = data;
    });
  }

  loadCategories() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

  createDevice() {
    if (this.deviceForm.valid) {
      this.deviceService.create(this.deviceForm.value).subscribe(() => {
        this.loadDevices();
        this.deviceForm.reset();
      });
    }
  }

  confirmDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this device?',
      accept: () => {
        this.deleteDevice(id);
      }
    });
  }

  deleteDevice(id: number) {
    this.deviceService.delete(id).subscribe(() => {
      this.loadDevices();
    });
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : 'Unknown';
  }
}
