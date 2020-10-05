import faker from "faker";

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
        <h1> Company Name : ${this.name}</h1>
        <h3>Catchphrase : ${this.catchPhrase}</h3>
    </div>
   `;
  }
}
