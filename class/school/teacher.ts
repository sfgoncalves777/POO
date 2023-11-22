import { Person } from "./person";

export class Teacher extends Person {
  private salary: number;
  private specialty: string;

  constructor(
    name: string,
    age: number,
    sex: 'masculine' | 'feminine',
    salary: number,
    specialty: string
  ) {
    super(name, age, sex);
    this.salary = salary;
    this.specialty = specialty;
  };

  public getSalary(): number {
    return this.salary;
  }

  public setSalary(salary: number): void {
    this.salary = salary;
  }

  public getSpecialty(): string {
    return this.specialty;
  }

  public setSpecialty(specialty: string): void {
    this.specialty = specialty;
  }

  public increase(value: number): void {
    this.setSalary(this.getSalary() + value);
  }
}