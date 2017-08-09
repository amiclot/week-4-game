
var numberToGuess = Math.floor((Math.random() * 120) + 19);

$(".numberToGuess").text(numberToGuess);

var counter = 0;

$(".userCounter").text(counter);



var wins = 0;

var losses = 0;



var win = function(){
	wins++;
};

var loss = function(){
	losses++;
};

var reset = function(){
	randNumb1 = Math.floor((Math.random() * 12) + 1);
	randNumb2 = Math.floor((Math.random() * 12) + 1);
	randNumb3 = Math.floor((Math.random() * 12) + 1);
	randNumb4 = Math.floor((Math.random() * 12) + 1);
	counter = 0;
	numberToGuess = Math.floor((Math.random() * 120) + 19);
	$('#crystal1').attr('data-crystalvalue', randNumb1);
	$('#crystal2').attr('data-crystalvalue', randNumb2);
	$('#crystal3').attr('data-crystalvalue', randNumb3);
	$('#crystal4').attr('data-crystalvalue', randNumb4);
	
};

$(".crystal-image").on('click', function(){

	var crystalValue = ($(this).attr('data-crystalvalue'));
	crystalValue = parseInt(crystalValue);
	counter += crystalValue;

	$(".userCounter").text(counter);

	console.log(counter);
	console.log(numberToGuess);


    if (counter === numberToGuess) {
 		
 		win();
    	reset();
      
    }

    else if (counter >= numberToGuess) {
      	
      	loss();
      	reset();

    }

    console.log(wins);
    console.log(losses);
  

    $(".wins").text(wins);
    $(".losses").text(losses);
    $(".numberToGuess").text(numberToGuess);



  });








            