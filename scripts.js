var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var elementTag = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + elementTag.length;
	list.appendChild(element);
});