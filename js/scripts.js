var list = document.getElementById('Lista');
var add = document.getElementById('addElem');
add.addEventListener('click', function(e) {
	list.innerHTML += '<li>item '+document.getElementsByTagName('li').length + '</li>';
});