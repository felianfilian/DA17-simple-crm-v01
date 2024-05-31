export class User {
  firstName!: string;
  lastName!: string;
  birthDate!: number;
  street!: string;
  zipcode!: number;
  city!: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : 'Mario';
    this.lastName = obj ? obj.lastName : 'Super';
    this.birthDate = obj ? obj.birthDate : '13.01.1984';
    this.street = obj ? obj.street : 'Mushroom Street';
    this.zipcode = obj ? obj.zipcode : '12345';
    this.city = obj ? obj.city : 'Toad Land';
  }
}
