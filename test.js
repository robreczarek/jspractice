require('./index.js');

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