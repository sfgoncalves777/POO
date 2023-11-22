export abstract class Animal {
  protected weight: number;
  protected age: number;
  protected members: number;

  constructor(weight: number, age: number, members: number) {
    this.weight = weight;
    this.age = age;
    this.members = members;
  }

  public getWeight(): number {
    return this.weight
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }

  public getAge(): number {
    return this.age
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getMembers(): number {
    return this.members
  }

  public setMembers(members: number): void {
    this.members = members;
  }

  public abstract move(): void;

  public abstract toFeed(): void;

  public abstract emitSound(): void;
}