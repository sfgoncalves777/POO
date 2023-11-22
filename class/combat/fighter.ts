export class Fighter {
  private name: string;
  private nationaly: string;
  private age: number;
  private height: number;
  private weight: number;
  private category: 'light'|'average'|'heavy';
  private victories: number;
  private defeats: number;
  private draws: number;

  constructor(
    name: string,
    nationaly: string,
    age: number,
    height: number,
    weight: number,
    victories: number,
    defeats: number,
    draws: number
  ) {
    this.name = name;
    this.nationaly = nationaly;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.victories = victories;
    this.defeats = defeats;
    this.draws = draws;
    if (weight < 70.3) {
      this.category = 'light';
      return;
    }
    if (weight < 83.9) {
      this.category = 'average'
    };
    this.category = 'heavy';
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getNationaly(): string {
    return this.nationaly;
  }

  public setNationaly(nationaly: string): void {
    this.nationaly = nationaly;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }

  public getCategory(): string {
    return this.category;
  }

  public setCategory(category: 'light'|'average'|'heavy'): void {
    this.category = category;
  }

  public getVictories(): number {
    return this.victories;
  }

  public setVictories(victories: number): void {
    this.victories = victories;
  }

  public getDefeats(): number {
    return this.defeats;
  }

  public setDefeats(defeats: number): void {
    this.defeats = defeats;
  }

  public getDraws(): number {
    return this.draws;
  }

  public setDraws(draws: number): void {
    this.draws = draws;
  }

  public toPresent(): void {
    console.log('Lutador:', this.getName());
    console.log('Origem:', this.getNationaly());
    console.log(this.getAge(), 'anos');
    console.log(this.getHeight(), 'm de altura');
    console.log('Pesando:', this.getWeight());
    console.log('Ganhou:', this.getVictories());
    console.log('Perdeu:', this.getDefeats());
    console.log('Empatou:', this.getDraws());

  }

  public status(): void {
    console.log(this.getName());
    console.log('Pesando:', this.getWeight());
    console.log(this.getVictories(), 'vitórias');
    console.log(this.getDefeats(), 'derrotas');
    console.log(this.getDraws(), 'empates');
  }

  public winFight(): void {
    this.setVictories(this.getVictories() + 1);
  }

  public loseFight(): void {
    this.setDefeats(this.getDefeats() + 1);
  }

  public drawFight(): void {
    this.setDraws(this.getDraws() + 1);
  }
}