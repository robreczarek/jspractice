'use strict';

var lib = require('./index.js');

var Zoo = lib.Zoo;
var Animal = lib.Animal;
var Elephant = lib.Elephant;
var Lion = lib.Lion;

var myZoo = new Zoo('My Zoo');

var elephant = new Animal('Elephant');
elephant.group = 'Vertebrates';
elephant.diet = 'Herbivore';

var lion = new Animal('Lion');
lion.group = 'Vertebrates';
lion.diet = 'Carnivore';

myZoo.addAnimal(elephant);
myZoo.addAnimal(lion);

console.log('##################################');
console.log('Welcome to ' + myZoo.zooName);
console.log('##################################');
console.log('-----------------------------------');
console.log('Animal #1: ' + elephant.species);
console.log('Group: ' + elephant.getGroup());
console.log('Diet: ' + elephant.getDiet());
console.log('-----------------------------------');
console.log('Animal #2: ' + lion.species);
console.log('Group: ' + lion.getGroup());
console.log('Diet: ' + lion.getDiet());
console.log('-----------------------------------');
console.log('##################################');
console.log('Number of animals in zoo: ' + myZoo.getCount());
console.log('First zoo animal: ' + myZoo.getAnimals()[0].species);
console.log('Second zoo animal: ' + myZoo.getAnimals()[1].species);
