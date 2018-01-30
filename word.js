var letterConstructor = require ("./letter.js");

function word(value){
	this.value = value;
	this.letters= [];
	this.userGuess = "";
	for (var i=0; i < this.value.length; i ++){
		this.letters.push(new letterConstructor.letter(this.value[i]));
	}
};


word.prototype.isComplete = function (){
	for (var i = 0; i < this.letters; i++){
		if (!this.letters[i].show){
			return false;
		}
		return true;
	}
}

word.prototype.letterLocation = function (letter) {
	var lowerCase = letter.toLowerCase();
	if (this.userGuess.indexOf(lowerCase) != -1) {
		return "duplicate";
	}
	this.userGuess 

}