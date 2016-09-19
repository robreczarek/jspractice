var zoo = function() {
  var animals = [];
  var count = 0;

  this.all_animals = function () {
    return animals;
  }

  this.animal_count = function () {
    return animals.length;
  };
};

var animal = (function () {
  var species_name = '';
  var diet_type = '';
  
  this.species = species_name;
  this.diet = diet_type;
};

var elephant = new animal();
elephant.species = "Elephant";
var lion = new animal("Lion");
lion.species = "Lion";

var myzoo = new zoo();
myzoo.animals.push(elephant);
myzoo.animals.push(lion);


