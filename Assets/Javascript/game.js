$(document).ready(function() {

	// ******* NUMBER ARRAYS *******

	// random computer variable array
	var random = [];

	for (var r = 19; r < 121; r++) {
		random.push(r);
	}

	// crystal numbers array
	var crystals = [];

	for (var c = 1; c < 13; c++) {

		crystals.push(c);
	}

	// console.log(crystals);

	// ******* GLOBAL VARIABLES *******

	// random variables selected by computer
	var randomNumber; // number to match
	var crystalNumbers = []; // for array of random crystal values

	var c1;
	var c2;
	var c3;
	var c4;

  var totalScore = 0; // user's score

	var wins = 0;
	var losses = 0;

	// ******* FUNCTIONS *******

	// pick a random number
	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randomNumber = x;
		$("#targetScore").html(randomNumber);

		console.log("random number: " + randomNumber);

	} // END of pickRandomNumber function

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
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} // END of crystalValues function

	function gameReset(x) {

		crystalNumbers = []; // clears crystal number values

		pickRandomNumber(random);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalScore").html(totalScore);

		alert(x);
	} // END of gameReset function

	// *** GAME SETTINGS AT START ***

	pickRandomNumber(random); // random number to match
	pickRandomCrystals(crystals); // array of random crystal values
	crystalValues(crystalNumbers);

		// crystal button functions

		$("#crystal-purple").on("click", function() {

			totalScore += c1;
			$("#totalScore").html(totalScore);
		});

		$("#crystal-moon").on("click", function() {

			totalScore += c2;
			$("#totalScore").html(totalScore);
		});

		$("#crystal-diamond").on("click", function() {

			totalScore += c3;
			$("#totalScore").html(totalScore);
		});

		$("#crystal-emerald").on("click", function() {

			totalScore += c4;
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