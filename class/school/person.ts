export abstract class Person {
  private name: string;
  private age: number;
  private sex: 'masculine' | 'feminine';

  constructor(name: string, age: number, sex: 'masculine' | 'feminine') {
    this.name = name;
    this.age = age;
    this.sex = sex;
  };

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }


  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age
  }


  public getSex(): 'masculine' | 'feminine' {
    return this.sex;
  }

  public setSex(sex: 'masculine' | 'feminine'): void {
    this.sex = sex
  }

  public birthday(): void {
    this.setAge(this.getAge() + 1);
  }
};
