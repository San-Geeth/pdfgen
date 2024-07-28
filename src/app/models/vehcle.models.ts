export interface Make {
    make: string;
  }
  
  export interface Transmission {
    type: string;
  }
  
  export interface Fuel {
    type: string;
  }

  export interface PrintableData {
    year: number;
    make: string | undefined;
    model: string;
    car_name: string;
    transmission: string | undefined;
    chassis: string;
    engine: string;
    fuel: string | undefined;
    note: string;
  }