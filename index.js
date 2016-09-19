var Zoo = function(name) {
  this.animals = [];
  this.zooName = name;
};

Zoo.prototype.addAnimal = function(animal) {
  return this.animals.push(animal);
};

Zoo.prototype.getAnimals = function() {
  return this.animals;
};

Zoo.prototype.getCount = function() {
  return this.animals.length;
};

var Animal = function (species) {
  this.group = '';
  this.diet = '';
  this.species = species;
};

Animal.prototype.getGroup = function() {
  return this.group;
};

Animal.prototype.getDiet = function() {
  return this.diet;
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
