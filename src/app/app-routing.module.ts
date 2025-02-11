import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DevicesComponent } from './pages/devices/devices.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'devices', component: DevicesComponent },
  { path: '**', redirectTo: 'categories' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
