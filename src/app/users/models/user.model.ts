export class User {
  id: number;
  firstName: string;
  lastName: string;

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
