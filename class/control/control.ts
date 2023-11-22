import { ControlInterface } from './control.interface';

export class Control implements ControlInterface  {
  private volume: number;
  private play: boolean;
  private power: boolean;

  constructor() {
    this.volume = 0;
    this.play = false;
    this.power = false;
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(volume: number): void {
    this.volume = volume;
  }

  public getPlay(): boolean {
    return this.play;
  }

  public setPlay(play: boolean): void {
    this.play = play;
  }

  public getPower(): boolean {
    return this.power;
  }

  public setPower(power: boolean): void {
    this.power = power;
  }
  
  public toOn(): void {
    this.setPower(true);
  }

  public toOff(): void {
    this.setPower(false);
  }

  public plusVolume(volume: number): void {
    this.setVolume(this.getVolume() + volume);
  }

  public lessVolume(volume: number): void {
    this.setVolume(this.getVolume() - volume);
  }

  public toOnMute(): void {
    this.setVolume(0);
  }

  public toOfMute(): void {
    this.setVolume(50);
  }

  public toPlay(): void {
    this.setPlay(true);
  }

  public toPause(): void {
    this.setPlay(false);
  }
  
}