import { Person } from "./person";

export class Student extends Person {
  private registration: string;
  private course: string;

  constructor(
    name: string,
    age: number,
    sex: 'masculine' | 'feminine',
    registration: string,
    course: string
  ) {
    super(name, age, sex);
    this.registration = registration;
    this.course = course;
  }

  public getRegistration(): string {
    return this.registration;
  }

  public setRegistration(registration: string): void {
    this.registration = registration;
  }

  public getCourse(): string {
    return this.course;
  }

  public setCourse(course: string): void {
    this.course = course;
  }

  public cancelRegistration(): void {
    this.setRegistration('canceled');
  }

  public override birthday(): void {
    this.setAge(this.getAge() + 1);
    console.log('Parabéns pelo seu aniversário aluno', this.getName());
  }
};
