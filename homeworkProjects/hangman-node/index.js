// requiring the js files
const refWord = require('./wordList.js');
const wordConst = require('./word.js');
const inquirer = require('inquirer');
require('events').EventEmitter.prototype._maxListeners = 100;

//lets run refWord with the wordConst

let word = new wordConst(refWord);
console.log(word);

let guess;
let triesLeft = 5;
let invisibleCount = word.arrayLetters.length;
let matched= 0;
function guessLetter()
{
	inquirer.prompt([
	{
		type:"input",
		message: "Guess a letter:",
		name:"letterGuess",
	}
	
	]).then(function(answer){
		guess = answer.letterGuess;
		//console.log(guess);
		for(i=0; i<word.arrayLetters.length; i++)
			{match(word.arrayLetters[i].letter, guess)}
		
	}).then(countInvisibleLetters()).then(function(){if (matched=0){

	}});
};

//creating a function match
function match(a,b) {
	//if the letter input matches the  current string
	if(a==b){
		
		finalDisplay(i,guess);
		matched++;	
	}


	
};

//creating a function finalDisplay

function finalDisplay(a, b){
	word.display[a] = b;
};

function countInvisibleLetters() {
		for(i =0; i<word.arrayLetters; i++)
		{
			if(word.arrayLetters[i].isVisible == true) {invisibleCount--;}
		}
	};

function hangman(){
	if(triesLeft>0 && invisibleCount>0)
	{
	console.log('+++++++++++++++++++++++++++');	
	console.log(word.display);
	guessLetter();
	}
	else if(triesLeft>0 && invisibleCount==0){console.log("GameOVer. You Win")}
	else{console.log("GameOVer")}
};
	hangman();
