import { Mammal } from "./mammal";
import { Reptile } from "./reptile";
import { Fish } from "./fish";
import { Bird } from "./bird";

const mammal = new Mammal(85.3, 2, 4, 'Branco');
const reptile = new Reptile(2, 3, 4, 'Verde');
const fish = new Fish(0.35, 1, 0, 'Azul');
const bird = new Bird(0.89, 2, 4, 'Amarelo');

console.log('Mamífero');
console.log('Peso:', mammal.getWeight());
console.log('Idade:', mammal.getAge());
console.log('Qtd de membros:', mammal.getMembers());
console.log('Cor do pelo:', mammal.getColorFur());
mammal.move();
mammal.toFeed();
mammal.emitSound();

console.log();

console.log('Réptil');
console.log('Peso:', reptile.getWeight());
console.log('Idade:', reptile.getAge());
console.log('Qtd de membros:', reptile.getMembers());
console.log('Cor da escama:', reptile.getColorScale());
reptile.move();
reptile.toFeed();
reptile.emitSound();

console.log();

console.log('Peixe');
console.log('Peso:', fish.getWeight());
console.log('Idade:', fish.getAge());
console.log('Qtd de membros:', fish.getMembers());
console.log('Cor da escama:', fish.getColorScale());
fish.move();
fish.toFeed();
fish.emitSound();
fish.dropBubble();

console.log();

console.log('Ave');
console.log('Peso:', bird.getWeight());
console.log('Idade:', bird.getAge());
console.log('Qtd de membros:', bird.getMembers());
console.log('Cor da escama:', bird.getColorFeather());
bird.move();
bird.toFeed();
bird.emitSound();
bird.makeNinho();