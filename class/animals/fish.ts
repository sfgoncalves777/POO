import { Animal } from "./animal";

export class Fish extends Animal {
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
    console.log('Nadando');
  }

  public override toFeed(): void {
    console.log('Comendo substâncias');
  }

  public override emitSound(): void {
    console.log('Som de peixe'); 
  };

  public dropBubble(): void {
    console.log('Soltar bolha');
  }
};