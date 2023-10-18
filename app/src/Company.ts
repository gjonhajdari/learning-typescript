import { faker } from "@faker-js/faker";

export class Company {
  name: string;
  catchPrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
			<div>
				<h1>Company name: ${this.name}</h1>
				<h3>Catchphrase: ${this.catchPrase}</h3>
			</div>
		`;
  }
}
