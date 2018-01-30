var inquirer = require ("inquirer");

var word = require ("./word.js");

var lettersinWord = [];
var blank = 0;
var blank-success = [];
var wrongLetters = [];

var wins = 0;
var losses = 0;
var guessremaining = 0;

startGame();

document.onkeyup = function (event) {
	var userGuess = string.fromCharCode(event.keyCode).toUpperCase();
	checkLetters(userGuess);
	roundComplete();
	console.log("You guessed" + userGuess);
}