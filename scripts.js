function drawTree(w) {
	for (var i = 0; i < w; i++) {
	var star = ' ';
	
	for (var j = 0; j <= i; j++) {
	star += '*';
	}
	console.log(star);
	}
}
