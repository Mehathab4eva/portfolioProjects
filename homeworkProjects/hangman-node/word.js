//requiring the letter.js


const Letter = require('./letter.js');


// defining the Word constructor

let Word = function(word){

	this.word = word;
	this.arrayLetters = [];


	//display of letters of the word 
	this.display = '';


	//spliting the word into letters

	this.splitWord = function(){

						for (var i = 0; i < this.word.length; i++) {
							
							//each letter is assigned to the Letter constuctor
							let newLetter = new Letter(this.word[i]);


							//now push this to arryLetters;
							this.arrayLetters.push(newLetter);

							//lets add the newLetter display to this.display

							this.display += newLetter.display;

																}


					};



		this.splitWord();

	
					

};



module.exports = Word;