//api key = 28gC9rCYdONr2MqkeKljSK20Q1p2otZ8

$(document).ready(function () {

// var queryurl = "http://api.giphy.com/v1/gifs/search?q=" + searchterm + "&api_key=28gC9rCYdONr2MqkeKljSK20Q1p2otZ8&limit=5"


var tvshows = ["BREAKING BAD", "GREY'S ANATOMY", "DEXTER"];

    
    function addTvButton () {

    	$("#buttons").empty();

    	for (var i = 0; i < tvshows.length; i++) {

    		var tvshowbutton = $("<button>");

    		tvshowbutton.addClass("tvshow")

    		tvshowbutton.attr("data-tv", tvshows[i]);

    		tvshowbutton.text(tvshows[i]);

    		$("#buttons").append(tvshowbutton);
    	}
    }

    

    function tvgifs () {

    	var tvshow = $(this).attr("data-tv");

    var queryurl = "https://api.giphy.com/v1/gifs/search?q=" + tvshow + "&api_key=28gC9rCYdONr2MqkeKljSK20Q1p2otZ8&limit=5"


    $.ajax({
      method: "GET",
      url: queryurl,  
    }).done(function(response) {
      console.log(response);

      for (var i = 0; i < response.data.length; i ++) {

      var animatedgif = response.data[i].images.fixed_height.url;
      var stillgif = response.data[i].images.fixed_height_still.url;
      var rating = response.data[i].rating;

      console.log(rating);
      
      

      // var tvshowgif = $("<img>");
      var stilltvshowgif = $("<img>");


      stilltvshowgif.addClass("gif");
      
      stilltvshowgif.attr("src", animatedgif)
      stilltvshowgif.attr("data-animated", animatedgif);
      stilltvshowgif.attr("src", stillgif);
      stilltvshowgif.attr("data-still", stillgif);
      
      stilltvshowgif.attr("data-state", "still");

      // var ratings = $("<p>");
      // ratings.attr("id", "rating");
      // ratings.attr("src", rating);      
      
      // tvshowgif.attr("alt", "tv gif");
      stilltvshowgif.attr("alt", "still gif");

      // console.log(tvshowgif);
      console.log(stilltvshowgif);

      $("#results").append(stilltvshowgif);
      // $("#rating").text(ratings);

      addTvButton();


      }

      $(".gif").on("click", function(){

      // alert("gif clicked");

      //fixed_height_still

        

      var state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animated"))
        $(this).attr("data-state", "animated");
      } else {
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state", "still");
      }
      
    })
      
    });




    }

    $("#showsubmit").on("click", function(){
    	event.preventDefault();

    	var tvshow = $("#showinput").val().trim().toUpperCase();

    	
    	tvshows.push(tvshow);
    	console.log(tvshows);

    	addTvButton();
    });

   
    




    $(document).on("click", ".tvshow", tvgifs);

    addTvButton();
    

    

});

