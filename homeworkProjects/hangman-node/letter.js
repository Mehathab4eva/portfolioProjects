//we are going to creat a letter constructor 
//this constructor contains the logical functions and letter properties


//defining Letter constructor


let Letter = function(letter){
	//properties
	this.letter = letter;

	this.isVisible = false;
	this.display = "-";

	//logical functions

	this.show = function(){
					if (this.isVisible === true) {

						return this.display = this.letter;
					}

					else {
						return this.display = "_";
					}

					};

};

module.exports = Letter;