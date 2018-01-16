function getTriangleArea(a, h) {
	if ( a > 0 && h > 0);{
  		return a*h/2;
	}if ( a <= 0 && h <= 0) ;{
    		return 'Nieprawidlowe_dane';
	}
  
}  
var triangle1Area = getTriangleArea(5, 25);
var triangle2Area = getTriangleArea(13, 6);
var triangle3Area = getTriangleArea(-3, 4);