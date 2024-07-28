import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { VehicleDataComponent } from './vehicles/vehicle-data/vehicle-data.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppRoutingModule } from '../app-routing.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { PrintComponent } from './vehicles/print/print.component';

@NgModule({
  declarations: [
    LoginComponent,
    VehicleDataComponent,
    VehiclesComponent,
    PrintComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    AppRoutingModule,
    InputNumberModule,
    DropdownModule
  ],
  exports: [
    LoginComponent
  ]
})
export class PagesModule { }
