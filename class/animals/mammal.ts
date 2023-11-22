import { Animal } from "./animal";

export class Mammal extends Animal {
  private colorFur: string;

  constructor(weight: number, age: number, members: number, colorFur: string) {
    super(weight, age, members);
    this.colorFur = colorFur;
  }

  public getColorFur(): string {
    return this.colorFur;
  }

  public setColorFur(colorFur: string): void {
    this.colorFur = colorFur;
  }

  public override move(): void {
    console.log('Correndo');
  }

  public override toFeed(): void {
    console.log('Mamando');
  }

  public override emitSound(): void {
    console.log('Som de mamífero');
  }
}