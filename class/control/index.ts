import { Control } from './control';

const control = new Control();

console.log('Volume:', control.getVolume());
console.log('Play:', control.getPlay());
console.log('Power:', control.getPower());

control.toOn();
control.plusVolume(50);
control.toPlay();
console.log();
console.log('Volume:', control.getVolume());
console.log('Play:', control.getPlay());
console.log('Power:', control.getPower());

console.log();

control.lessVolume(30);
console.log('Volume:', control.getVolume());

console.log();

control.toPause();
console.log('Play:', control.getPlay());

console.log();

control.toOnMute();
console.log('Volume:', control.getVolume());

console.log();

control.toOfMute();
console.log('Volume:', control.getVolume());

console.log();

control.toOff();
console.log('Power:', control.getPower());