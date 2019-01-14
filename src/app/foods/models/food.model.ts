export class Food {
  id: number;
  name: string;

  get info() {
    return `${this.id} ${this.name}`;
  }
}
