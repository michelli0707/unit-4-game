$(document).ready(function() {

	// NUMBER ARRAYS

	// random computer variable array
	var random = [];

	for (var rc = 19; rc < 121; rc++) {
		random.push(rc);
	}

	// crystal numbers array
	var crystals = [];

	for (var c = 1; c < 13; c++) {

		crystals.push(c);
	}

	// console.log(crystals);

	// GLOBAL VARIABLES 

	// random variables selected by computer
	var randomNumber; 
	var crystalNumbers = []; 

	var cp;
	var cm;
	var cd;
    var ce;
    
 // user score

  var totalScore = 0; 

	var wins = 0;
	var losses = 0;

	// FUNCTIONS

	// pick a random number
	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randomNumber = x;
		$("#targetScore").html(randomNumber);

		console.log("random number: " + randomNumber);

	} 

	// pick random numbers for crystals

	function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}
    // check which numbers have been picked
		console.log("crystal numbers: " + crystalNumbers);

	} // END of pickRandomCrystals function

	function crystalValues(arr) {

		// change value of each crystal button according to array
		for (i = 0; i < arr.length; i++) {

		$("#crystal-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		cp = arr[0];
		cm = arr[1];
		cd = arr[2];
		ce = arr[3];
	} 

	function gameReset(x) {

// clears crystal number values
		crystalNumbers = []; 

		pickRandomNumber(random);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalScore").html(totalScore);

		alert(x);
	} 

	// GAME SETTINGS

	pickRandomNumber(random); 
	pickRandomCrystals(crystals);
	crystalValues(crystalNumbers);

	// crystal button functions

		$("#crystal-purple").on("click", function() {

			totalScore += cp;
			$("#totalScore").html(totalScore);
		});

		$("#crystal-moon").on("click", function() {

			totalScore += cm;
			$("#totalScore").html(totalScore);
		});

		$("#crystal-diamond").on("click", function() {

			totalScore += cd;
			$("#totalScore").html(totalScore);
		});

		$("#crystal-emerald").on("click", function() {

			totalScore += ce;
			$("#totalScore").html(totalScore);
		});

	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totalScore === randomNumber) {

			wins++;
			console.log(totalScore);
			$("#totalScore").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 300);
		}

		else if (totalScore > randomNumber){

			losses++;
			$("#totalScore").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU LOST!!")}, 300);
		}
	});

}); 