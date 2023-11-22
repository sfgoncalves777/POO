export class Pen {
  public model: string;  
  public color: string;
  private tip: number;
  protected load: number;
  protected isCovered: boolean;

  constructor(model: string, color: string, tip: number) {
    this.model = model;
    this.color = color;
    this.tip = tip;
    this.load = 100;
    this.isCovered = true;
  }

  public write(data: string): void {
    console.log(data);
    this.load = this.load - 10;
  }

  public scribble(): void {
    console.log('Scribble!');
    this.load = this.load - 15;
  }

  public paint() {
    console.log(`Paint color ${this.color}`);
    this.load = this.load - 15;
  }

  private cover(): void {
    this.isCovered = true;
  }

  private uncover(): void {
    this.isCovered = false;
  }

  public action(action: 'cover' | 'uncover'): void {
    return this[action]();
  }
};

