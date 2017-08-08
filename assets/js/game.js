
var numberToGuess = Math.floor((Math.random() * 120) + 19);

$(".numberToGuess").text(numberToGuess);

var counter = 0;

$(".userCounter").text(counter);


var numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];

var crystalImages = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"]

var wins = 0;



var losses = 0;



var win = function(){
	wins++;
};

var loss = function(){
	losses++;
};

var reset = function(){
	counter = 0;
	numberToGuess = Math.floor((Math.random() * 120) + 19);
	numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];


};

for (var i = 0; i < numberOptions.length; i++) {
        
        var picture = $("<img>");

        picture.addClass("crystal-image img-responsive");

        picture.attr("src", crystalImages[i])

        picture.attr("data-crystalvalue", numberOptions[i]);

        $("#crystals").append(picture);


}

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
    console.log(numberOptions);

    $(".wins").text(wins);
    $(".losses").text(losses);


  });







            