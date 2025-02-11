import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  categoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(128)]]
    });
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

  createCategory() {
    if (this.categoryForm.valid) {
      this.categoryService.create(this.categoryForm.value).subscribe(() => {
        this.loadCategories();
        this.categoryForm.reset();
      });
    }
  }

  confirmDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this category?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteCategory(id);
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Cancelled', detail: 'Category deletion cancelled.' });
      }
    });
  }

  deleteCategory(id: number) {
    this.categoryService.delete(id).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Category successfully deleted.' });
      this.loadCategories();
    });
  }
}
