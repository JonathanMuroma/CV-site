export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  date_of_birth: string;
  country_of_birth: string;
  car_id: number;
  pet_id: number;
  car: Car;
  pet: Pet;
}

export interface Car {
  id: number;
  make: string;
  model: string;
  price: number;
  person: Person;
}

export interface Pet {
  id: number;
  name: string;
  animal: string;
  person: Person;
}
