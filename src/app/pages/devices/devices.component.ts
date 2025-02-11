import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from 'src/app/services/device.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: any[] = [];
  categories: any[] = [];
  deviceForm: FormGroup;

  constructor(
    private deviceService: DeviceService, 
    private categoryService: CategoryService, 
    private fb: FormBuilder
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

      console.log(this.deviceForm.value)
      this.deviceService.create(this.deviceForm.value).subscribe(() => {
        this.loadDevices();
        this.deviceForm.reset();
      });
    }
  }

  deleteDevice(id: number) {
    this.deviceService.delete(id).subscribe(() => {
      this.loadDevices();
    });
  }
}
