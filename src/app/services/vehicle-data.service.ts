import { Injectable } from '@angular/core';
import { Fuel, Make, Transmission } from '../models/vehcle.models';

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {
  

  all_makes: Make[] = [
    { make: "Audi" },
    { make: "BMW" },
    { make: "Honda" },
    { make: "Mercedes" },
    { make: "Mitsubishi" },
    { make: "Nissan" },
    { make: "Toyota" }
  ];

  all_transmissions: Transmission[] = [
    {type: "Auto"},
    {type: "Manual"}
  ]

  all_fuel_types: Fuel[] = [
    { type: "Diesel" },
    { type: "Gasoline" },
    { type: "Petrol" }
  ];

  constructor() { }

  getAllMakes() {
    return this.all_makes.slice();
  }

  getAllTransmissionTypes() {
    return this.all_transmissions.slice();
  }

  getAllFuelTypes() {
    return this.all_fuel_types.slice();
  }
}
