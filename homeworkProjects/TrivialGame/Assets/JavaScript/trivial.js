var a = {
			question: "Who is Naruto  Uzumaki's father?",
			options: {
						option1:{
									option:"Minato Namikaze",
									value: 1,
									picSource: ""
								},
						option2:{
									option:"Kakashi Hatake",
									value: 0
								},
						option3:{
									option:"Hashiram Senju",
									value: 0
								},
						option4:{
									option:"Madara Uchiha",
									value: 0
								}
					}
		}

var b = {
			question: "Who is Naruto  Uzumaki's son?",
			
			options: {
						option1:{
									option:"Minato Namikaze",
									value: 0
								},
						option2:{
									option:"Baruto Uzumaki",
									value: 1,
									picSource: ""

								},
						option3:{
									option:"Kushina Uzumaki",
									value: 0
								},
						option4:{
									option:"Nagato Uzumaki",
									value: 0
								}
					}

		}

var restore = $("#header");
var quiz = [a,b];

console.log(quiz);
var correct = 0;
var wrong = 0;
var timeUp =0;// var  

var random = Math.floor(Math.random() *(quiz.length));
console.log(quiz.length);
$("#question").hide();
$("#choices").hide();

$("#button").on("click", function() 
		{

			if (quiz.length > 0) {
			// startquiz();
			$("#question").show();
			$("#choices").show();
			$("#button").hide();
			$("#header").css("height","107px");
			$(".options").css("background-color", "black");

	$("#question").text(quiz[random].question);
	$("#option1").text(quiz[random].options.option1.option);
	$("#option2").text(quiz[random].options.option2.option);
	$("#option3").text(quiz[random].options.option3.option);
	$("#option4").text(quiz[random].options.option4.option);
	startquiz();
		}

	else {
			reset();
			console.log(quiz);
			startquiz();
			document.location.reload(true);
	}



		});

function reset() {
	quiz = [a,b];
};
function startquiz() {


	$(".options").on("click", function() {

	var string = "quiz[random].options."+this.id+".value";
	console.log(string);
	var val = eval(string);
	console.log(val);

		if(val == 1){
			$(this).css("background-color", "green");
			// $(".options").off("click");
			correct++;
			setTimeout(selectionMade, 400) ;	


		}
		else {$(this).css("background-color", "red");
		// $(".options").off("click");
		wrong++;
		setTimeout(selectionMade, 400) ;
			}
		

	});}


	



function selectionMade() 
{
	// $(".options").on("click");

	clearTimeout();
	quiz.splice(random,1);
	console.log(quiz);
	random = Math.floor(Math.random() *(quiz.length));
	var x = quiz.length;
	
		$(".options").css("background-color", "black");

	
	if( x > 0) 
		{
			$("#question").text(quiz[random].question);
	$("#option1").text(quiz[random].options.option1.option);
	$("#option2").text(quiz[random].options.option2.option);
	$("#option3").text(quiz[random].options.option3.option);
	$("#option4").text(quiz[random].options.option4.option);

			startquiz();
		}
	else
		{
			$("#question").hide();
			$("#choices").hide();
			$("#button").show();
			refresh();

					$("button").on("click", function() 
					{
								quiz = [a,b];
								correct = 0;
								wrong =0;
								timeUp = 0;
								random = Math.floor(Math.random() *(quiz.length));
								$("#question").text(quiz[random].question);
								$("#option1").text(quiz[random].options.option1.option);
								$("#option2").text(quiz[random].options.option2.option);
								$("#option3").text(quiz[random].options.option3.option);
								$("#option4").text(quiz[random].options.option4.option);
								$("#question").show();
								$("#choices").show();
								$("button").hide();
								$("#header").css("height","107px");
								$(".options").css("background-color", "black");
								console.log(quiz);
								startquiz();
								restore.addID("header");
								// document.location.reload(true);
					});








					}





}

function refresh() {
			$("#header").css("height","238px");
			$("#header").text("Your Correct Answers: "+correct ).addClass("refresh");
			$(".refresh").append("<br>Your wrong Answers: "+wrong);
			$(".refresh").append("<br>Your Timed Out Questions: "+timeUp);
			$(".refresh").append("<br><button>Refresh</button>")
			 $("button").css({"top":"35px","left":"0px"})
			 $("#header").css({"text-align":"center", "line-height":"30px", "font-size":"28px"});

			 	}
