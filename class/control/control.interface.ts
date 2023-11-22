export interface ControlInterface {
  toOn(): void;
  toOff(): void;
  plusVolume(volume: number): void;
  lessVolume(volume: number): void;
  toOnMute(): void;
  toOfMute(): void;
  toPlay(): void;
  toPause(): void;
}