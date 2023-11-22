import { Pen } from './pen';

const pen = new Pen('Big', 'Black', 1.5);

console.log(pen.color)
console.log(pen.model)

pen.action('cover');
pen.write('Silvani');
pen.scribble();
pen.paint();
pen.action('cover');
pen.action('uncover');
