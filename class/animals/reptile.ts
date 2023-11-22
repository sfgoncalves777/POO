import { Animal } from "./animal";

export class Reptile extends Animal {
  private colorScale: string;

  constructor(weight: number, age: number, members: number, colorScale: string) {
    super(weight, age, members);
    this.colorScale = colorScale;
  }

  public getColorScale(): string {
    return this.colorScale;
  }

  public setColorScale(colorScale: string): void {
    this.colorScale = colorScale;
  }

  public override move(): void {
    console.log('Rastejando');
  }

  public override toFeed(): void {
    console.log('Comendo vegetais');
  }

  public override emitSound(): void {
    console.log('Som de réptil');
  }
};