import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { MainComponent } from './layout/main/main.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { VehicleDataComponent } from './pages/vehicles/vehicle-data/vehicle-data.component';
import { PrintComponent } from './pages/vehicles/print/print.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: MainComponent, canActivate: [authGuard] },
  { path: '', component: MainComponent, canActivate: [authGuard], children: [
    {
        path: 'vehicles',
        component: VehiclesComponent,
        canActivate: [authGuard],
        children: [
            {path: 'new/pdf', component: VehicleDataComponent, canActivate: [authGuard]},
            {path: 'new/pdf/print', component: PrintComponent, canActivate: [authGuard]},
        ],
      },
  ]}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
