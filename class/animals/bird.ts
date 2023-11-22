import { Animal } from "./animal";

export class Bird extends Animal {
  private colorFeather: string;

  constructor(weight: number, age: number, members: number, colorFeather: string) {
    super(weight, age, members);
    this.colorFeather = colorFeather;
  }

  public getColorFeather(): string {
    return this.colorFeather;
  }

  public setColorFeather(colorFeather: string) {
    this.colorFeather = colorFeather;
  }

  public override move(): void {
    console.log('Voando');
  }

  public override toFeed(): void {
    console.log('Comendo frutas');
  }

  public override emitSound(): void {
    console.log('Som de passáro');
  }

  public makeNinho(): void {
    console.log('Construir ninho');
  }
}