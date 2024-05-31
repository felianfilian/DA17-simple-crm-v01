export class User {
  firstName!: string;
  lastName!: string;
  birthDate!: number;
  street!: string;
  zipcode!: number;
  city!: string;

  constructor(obj?: any) {
    this.firstName = obj.firstName;
  }
}
