import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService, private fb: FormBuilder) {
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

  deleteCategory(id: number) {
    this.categoryService.delete(id).subscribe(() => {
      this.loadCategories();
    });
  }
}
