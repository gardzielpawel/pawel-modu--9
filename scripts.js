function getTriangleArea(a, h) {
	if ( a > 0 && h > 0) {
  		return a*h/2;
	}else {
    		return 'Nieprawidlowe_dane';
  }
}
   
var triangle1Area = getTriangleArea(5, 25);
var triangle2Area = getTriangleArea(13, 6);
var triangle3Area = getTriangleArea(-3, 4);


var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian'; {
	if (allNames.indexOf(newName) === -1){
    		return 'true';
  	}else {
    		return 'false';
  }  
}

var x = test.push('newName');

console.log(allNames);