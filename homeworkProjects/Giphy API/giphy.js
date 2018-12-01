//The main topics 
var topics = ["anime", "naruto", "games"];

//Creating a button for each topic
function creatButton() {
 $("#topicView").empty();

//Loop through the array of topics
 for (var i = 0; i < topics.length; i++) {
 	var a = $("<button>"); // adding button
 	a.addClass("topic"); // adding class to topics
 	a.attr("data-name", topics[i]); 
 	a.text(topics[i]);// adding the text as the topics
 	$("#topicView").append(a);
 }
}

$("#addSearch").on("click", function(event) {
	event.preventDefault();
//Grab the new sport from the input box
	var search = $("#searchInput").val().trim();
	topics.push(search);
	
	$("#searchInput").empty();

creatButton();

});
creatButton();

//Bring in the gifs! First, our key:
var apiKey = "K0wnvCs6HwHoZfhqTtEYXf4uaQR7916l";

$("#topicView").on("click", ".topic", function() {
   $("#searchGifs").empty();
//"this" refers to the button that was clicked
      var search = $(this).attr("data-name");

// Constructing a URL to search giphy for the search
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        search + "&api_key="+ apiKey + "&limit=10";

	$.ajax({
	url: queryURL,
	method: "GET"
	})
// After the data comes back from the API
        .done(function(response) {
// Storing an array of results in the results variable
          var results = response.data;

// Loop over each result item
          for (var i = 0; i < results.length; i++) {
           if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
// Create a div with the class "item"
              var gifDiv = $("<div class='item'>");
              var rating = results[i].rating;

              var p = $("<p>").text("Rating: " + rating);
              var animated = results[i].images.fixed_height.url;
              var still = results[i].images.fixed_height_still.url;
              var searchImage = $("<img>");
// Giving the image tag an src attribute of a property pulled from the result item
              searchImage.attr("src", still);
              searchImage.attr("data-still", still);
              searchImage.attr("data-animated", animated);
              searchImage.attr("data-state", "still");
              searchImage.addClass("moveImage");

//Appending the paragraph and sportImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(searchImage);

//Prepending the gifDiv to the "#sportsGif" div in the HTML
              $("#searchGifs").prepend(gifDiv);
            }
        }
//       return false;
	});

//Grab the div where the gifs are and their class
        $("#searchGifs").unbind().on("click", ".moveImage", function(){
        	var state = $(this).attr("data-state");
//Check for current state and change it after the click
        	if(state == 'still'){
        		$(this).attr('src', $(this).attr("data-animated"));
        		$(this).attr('data-state', 'animated');
			}else {
				$(this).attr('src', $(this).attr("data-still"));
	       		$(this).attr('data-state', 'still');
			}
//			return false;
	  });
});