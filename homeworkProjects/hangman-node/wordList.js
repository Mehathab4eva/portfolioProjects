const wordList = ["apple", "boy", "cat"];

//selecting a random word from the word List

let randomWord = wordList[Math.floor(Math.random() * wordList.length )];


module.exports = randomWord;