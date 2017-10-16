window.onload = function() // to make sure that JS loads after the webpage is loaded
{
var audio = new Audio("file:///C:/Users/Mehathab/Desktop/Week3%20Assignment/FairyTail/Assets/FairyTailTheme.mp3");
audio.play();
var username = prompt("Please enter your name");

var welcomeNote = document.getElementById("welcome");
console.log(welcomeNote);
if(welcomeNote ===" "){
	welcomeNote.innerHTML = "Welcome! to the FairyTail Game. Please select your fighter."; 
}
else{
welcomeNote.innerHTML = "Welcome! "+username+"... To the FairyTail Game. Please select your fighter";    
}

var natsuDragneel = {
	name : "Natsu Dragneel",
	attack: 10,
	defense: 10,
	hp: 100,
	active: 5,
	imageSource: "../Assets/natsuDragneel.png"

	};


var erzaScarlet = {
	name : "Erza Scarlet",
	attack: 15,
	defense: 20,
	hp: 100,
	active:6
	
	};

var grayFullbuster = {
	name : "Gray Fullbuster",
	attack: 9,
	defense: 9,
	hp: 100,
	active:7
	
	};

var laxusDreyar = {
	name : "Laxus Dreyar",
	attack: 19,
	defense: 9,
	hp: 100,
	active:8
	
	};

var hero = {};
var challenger = {};
var steps = 0;

$("#natsu").on("click",function(){
	if(steps ==0)
		{hero = natsuDragneel;
		stats();
		steps = 1;
		$("#natsu").hide();
		}
	else if ((steps ==1) && (hero !== natsuDragneel)) {
		challenger=natsuDragneel;
		stats2();
		steps2();
		steps = 2;
		$("#natsu").hide();

	}
});

$("#erza").on("click",function(){
	if(steps ==0) {
	hero = erzaScarlet;
	stats();
	steps = 1;
	$("#erza").hide();
}
	else if ((steps ==1) && (hero !== erzaScarlet)) {
		challenger=erzaScarlet;
		stats2();
		$("#erza").hide();
		steps2();
		steps = 2;
		console.log(steps);
	}
});

$("#gray").on("click",function(){
	if(steps ==0) {
	hero = grayFullbuster;
	stats();
	steps = 1;
	$("#gray").hide();
	}
	else if ((steps ==1) && (hero !== grayFullbuster)) {
		challenger=grayFullbuster;
		
		steps2();
		$("#gray").hide();
		stats2();
		steps = 2;
	}
});

$("#laxus").on("click",function(){
	
	if(steps ==0) {

	hero = laxusDreyar;
	stats();
	steps = 1;
	$("#laxus").hide();

	}
	else if ((steps ==1) && (hero !== laxusDreyar)){
		challenger=laxusDreyar;
		
		steps2();
		$("#laxus").hide();
		stats2();
		steps = 2;
	}
	else{};
});




	function stats(){
	$("#heroHeader").text(hero.name);
	$("#heroImage").append('<img src="../FairyTail/Assets/natsuDragneel.png">'); 
	$("#heroAttack").text("Attack: "+hero.attack);
	$("#heroDefense").text("Defense: "+hero.defense);
	$("#heroHp").text("HP: "+hero.hp);
	welcomeNote.innerHTML = "You have selected "+hero.name+". Now please select your opponent."
	}

	function stats2(){
	$("#cHeader").text(challenger.name);
	$("#cImage").text(challenger.image );
	$("#cAttack").text("Attack: "+challenger.attack);
	$("#cDefense").text("Defense: "+challenger.defense);
	$("#cHp").text("HP: "+challenger.hp);
	welcomeNote.innerHTML = "Now that your Fighter and his Opponent are ready. Let the fight begin.";
	}

}


function steps2() {
	
	$("#displayDiv").css({"position": "absolute", "top": "775px"});

	var r = $('<button/>').text("Fight").appendTo("#button");
	r.css({"position":"absolute", "top":"160px","left":"720px","width":"50px", "height":"30px"})

}

$("#button").on("click", function(){
	// hero attacks the challenger

	var hDamage = hero.attack/challenger.defense*10;
	var cDamage = challenger.attack/hero.defense*10;

	var newHp = hero.hp;
	hero.hp = newHp - cDamage;
	newHp = challenger.hp;
	challenger.hp = newHp-hDamage;

	stats();
	stats2();
});