import { Person } from "./person";

export class Employee extends Person {
  private sector: string;

  constructor(name: string, age: number, sex: 'masculine' | 'feminine', sector: string) {
    super(name, age, sex);
    this.sector = sector;
  }

  public getSector(): string {
    return this.sector;
  }

  public setSector(sector: string): void {
    this.sector = sector;
  }

  public changeSector(sector: string): void {
    this.setSector(sector);
  }
}