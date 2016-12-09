var myArray = ['aspiring aerialist', 'feminist', 'Sass specialist', 'Slytherin', 'Seattleite', 'graphic design enthusiast', 'cat person', 'Bootstrap wizard', 'Attack on Titan fangirl', 'logo designer'];
var currentIndex = 0
var timer = setInterval(function(){
	$("#selector").text('& ' + myArray[currentIndex] + ' .');
	currentIndex++;
	if (currentIndex == myArray.length) {
		currentIndex = 0;
	}
 }, 5000);

$(document).ready(function () {
	$("div#pink-box").mouseover(function(){
		$(this).html('Full Name: Alexa Heitzenrader<br/>Skillset: HTML5/CSS3/SASS & JavaScript/jQuery & Bootstrap/Photoshop<br/>');
	}).mouseout(function() {
		$(this).html('<p id="about">about</p>');
	});
});
