var myArray = ['aspiring aerialist', 'feminist', 'Sass specialist', 'Slytherin', 'Seattleite', 'graphic design enthusiast', 'cat person', 'Bootstrap wizard', 'Attack on Titan fangirl', 'logo designer'];
var currentIndex = 0
var timer = setInterval(function(){
	$("#selector").text('& ' + myArray[currentIndex] + ' .');
	currentIndex++;
	if (currentIndex == myArray.length) {
		currentIndex = 0;
	}
 }, 5000);

var descriptionArray = ['And scrubs cant get no love from me', 'And heaven is a place on Earth', 'I cant fight this feeling anymore'];
var currentIndex1 = 0
var toggleDescription = function() {
	$('#selector1').text(descriptionArray[currentIndex1]);
	currentIndex++;
	if (currentIndex1 == descriptionArray.length) {
		currentIndex1 = 0;
	}
}

$(document).ready(function () {
	$("#about-box").mouseover(function(){
		$(this).html('<h3>Hi Friends!</h3><br/><p id="second-about">Welcome to my portfolio where you can view my past and current projects. I specialize in front-end development with a focus on responsive design and user interface. When I am not coding you can find me reading or running off to join the circus.</p>');
	}).mouseout(function() {
		$(this).html('<p class="white-cursive">about</p>');
	});
});

// $(document).ready(function () {
// 	$("#full-orange").mouseover(function(){
// 		$(this).html('<i class="fa fa-github" aria-hidden="true"></i><br/><i class="fa fa-linkedin-square" aria-hidden="true"></i><br/><i class="fa fa-envelope-o" aria-hidden="true"></i>');
// 	}).mouseout(function() {
// 		$(this).html('<p id="info">stalk me</p>');
// 	});
// });
$(document).ready(function() {
	$(".card").flip({
  	axis: 'y',
  	trigger: 'hover'
	});
});

$(document).ready(function() {
	$(".card-click").flip({
  	// axis: 'y',
  	trigger: 'click'
	});
});

$(document).ready(function() {
	$('.emptyPinkBox, .emptyOrangeBox').click(function(){
		console.log("I work")
		$('a#display').toggleClass("imageShow")
		// $("[data-fancybox]").fancybox({
		// // Options will go here
		// });
		

	});
  
});

$(window).load(function(){
	$('#myModal').modal('show');
});



