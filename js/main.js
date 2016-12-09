var myArray = ['aspiring aerialist', 'feminist', 'Sass lover', 'Seattleite', 'graphic design enthusiast', 'cat person', 'Bootstrap wizard'];
var currentIndex = 0
var timer = setInterval(function(){
	$("#selector").text('& ' + myArray[currentIndex]);
	currentIndex++;
	if (currentIndex == myArray.length) {
		currentIndex = 0;
	}
 }, 5000);