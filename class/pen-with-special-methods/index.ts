import { Pen } from './pen';

const pen = new Pen('Big');
pen.setTip(1.5);

console.log(pen.model);
console.log(pen.isCovered);
console.log(pen.getTip());