'use strict';

function Zoo(name) {
    this.animals = [];
    this.zooName = name;
}

Zoo.prototype.addAnimal = function (animal) {
    return this.animals.push(animal);
};

Zoo.prototype.getAnimals = function () {
    return this.animals;
};

Zoo.prototype.getCount = function () {
    return this.animals.length;
};

// ---------------------------------------------------------------------------

function Animal(species) {
    this.group = '';
    this.diet = '';
    this.species = species;
}

Animal.prototype.getGroup = function () {
    return this.group;
};

Animal.prototype.getDiet = function () {
    return this.diet;
};

// ---------------------------------------------------------------------------

function Lion() {

}

Lion.prototype = Object.create(Animal.prototype);

// ---------------------------------------------------------------------------

function Elephant() {

}

Elephant.prototype = Object.create(Animal.prototype);

// ---------------------------------------------------------------------------

// Exports

module.exports = {
    Zoo: Zoo,
    Animal: Animal,
    Lion: Lion,
    Elephant: Elephant
};
