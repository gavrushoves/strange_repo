var btnLocation = document.getElementById('btnChangeLocation');
btnLocation.onclick = function() {
	window.location.href = "https://github.com/gavrushoves";
};

var btnStyle = document.getElementById('btnChangeStyle');
btnStyle.onclick = function() {
	document.getElementById('container').className +=" active";
};

// Удаляем контент и заменяем контентом с прошлого занятия 
var btnContent = document.getElementById('btnChangeContent');
btnContent.onclick = function() {
	var container = document.getElementById('container');
	container.innerHTML = '<div class="first-layout"><div class="first-blocks first-blocks-1">1</div><div class="first-blocks first-blocks-2">2</div><div class="first-blocks first-blocks-3">3</div><div class="first-blocks first-blocks-4">4</div><div class="first-blocks first-blocks-5">5</div><div class="first-blocks first-blocks-6">6</div><div class="first-blocks first-blocks-7">7</div><div class="first-blocks first-blocks-8">8</div><div class="first-blocks first-blocks-9">9</div></div>';
	document.getElementById('container').classList.remove('active');
};