import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // PrimeNG
    ButtonModule,
    InputTextModule,
    TableModule,
    DropdownModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule,
    MenubarModule,
    CardModule,
    MessageModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
