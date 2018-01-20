var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.' ;
var dinosaur = 'triceratops' ;
var dinosaurUpperCase = dinosaur.toUpperCase();
var dinosaurReplace = text.replace('Velociraptor', dinosaurUpperCase);
var dinosaurHalf = dinosaurReplace.slice(0, dinosaurReplace.length/2);





console.log(dinosaurUpperCase);
console.log(dinosaurReplace);
console.log(dinosaurHalf);
