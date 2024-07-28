import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fuel, Make, PrintableData, Transmission } from 'src/app/models/vehcle.models';
import { VehicleDataService } from 'src/app/services/vehicle-data.service';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.css'],
})
export class VehicleDataComponent implements OnInit {

  makes!: Make[];
  transmissions!: Transmission[];
  fuels!: Fuel[];

  isBtnDisabled: boolean = true;
  printableData!: any;

  year!: number;
  model!: string;
  car_name!: string;
  chassis!: string;
  engine!: string;
  selected_make: Make | undefined;
  selected_transmission: Transmission | undefined;
  selected_fuel!: Fuel | undefined;
  note!: string;

  constructor(
    private vehicleDataService: VehicleDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.makes = this.vehicleDataService.getAllMakes();
    this.transmissions = this.vehicleDataService.getAllTransmissionTypes();
    this.fuels = this.vehicleDataService.getAllFuelTypes();
    this.checkFields();
  }

  checkFields() {
    this.isBtnDisabled = !(
      this.year != null &&
      this.model != null &&
      this.chassis != null &&
      this.engine != null &&
      this.selected_make != null &&
      this.selected_transmission != null &&
      this.selected_fuel != null
    );
  }

  onBtnClick() {
    this.printableData = {
      year: this.year,
      make: this.selected_make?.make,
      model: this.model,
      chassis: this.chassis,
      engine: this.engine,
      fuel: this.selected_fuel?.type,
      transmission: this.selected_transmission?.type,
      car_name: this.car_name,
      note: this.note
    };
    localStorage.setItem('print', JSON.stringify(this.printableData));
    this.router.navigate(['/vehicles/new/pdf/print'])
  }

  onFieldChange() {
    this.checkFields();
  }
}
