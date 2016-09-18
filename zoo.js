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
  var species = '';
  var diet = '';
};


