var Zoo = function(name) {
  var animals = [];

  this.zooName = name;
};

Zoo.prototype.addAnimal = function(animal) {
  return animals.push(animal);
};

Zoo.prototype.getAnimals = function() {
  return animals;
};

Zoo.prototype.getCount = function() {
  return animals.count;
};

var Animal = function (species) {
  var group = '';
  var diet = '';

  this.species = species;
};

Animal.prototype.getGroup = function() {
  return group;
};

Animal.prototype.getDiet = function() {
  return diet;
};

var myzoo = new Zoo("My Zoo");

var elephant = new Animal("Elephant");
elephant.group = "Vertebrates";
elephant.diet = "Herbivore";

var lion = new Animal("Lion");
lion.group = "Vertebrates";
lion.diet = "Carnivore";

myzoo.addAnimal(elephant);
myzoo.addAnimal(lion);

/*
Test Output
*/
console.log( '##################################' );
console.log( 'Welcome to ' + myzoo.zooName );
console.log( '##################################' );
console.log( '-----------------------------------' );
console.log('Animal #1: ' + elephant.species);
console.log('Group: ' + elephant.getGroup);
console.log('Diet: ' + elephant.getDiet);
console.log( '-----------------------------------' );
console.log('Animal #2: ' + lion.species);
console.log('Group: ' + lion.getGroup);
console.log('Diet: ' + lion.getDiet);
console.log( '-----------------------------------' );
console.log( '##################################' );
console.log( 'Number of animals in zoo: ' + myzoo.getCount  );
console.log( 'First zoo animal: ' + myzoo.getAnimals[0].species  );
console.log( 'Second zoo animal: ' + myzoo.getAnimals[1].species  );