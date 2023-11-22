export class Pen {
  public model: string;
  public isCovered: boolean;
  private tip: number;

  constructor(model: string) {
    this.model = model;
    this.isCovered = true;
    this.tip = 0;
  }

  public getTip(): number {
    return this.tip;
  }

  public setTip(tip: number): void {
    this.tip = tip; 
  }
};