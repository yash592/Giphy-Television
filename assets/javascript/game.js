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

    var queryurl = "http://api.giphy.com/v1/gifs/search?q=" + tvshow + "&api_key=28gC9rCYdONr2MqkeKljSK20Q1p2otZ8&limit=5"


    $.ajax({
      method: "GET",
      url: queryurl,  
    }).done(function(response) {
      console.log(response);

      for (var i = 0; i < response.data.length; i ++) {

      var animatedgif = response.data[i].images.fixed_height.url;
      var stillgif = response.data[i].images.fixed_height_still;
      
      var tvshowgif = $("<img>");
      var stilltvshowgif = $("<img>");

      stilltvshowgif.addClass("gif");
      stilltvshowgif.attr("src", stillgif);
      stilltvshowgif.attr("data-still", stillgif);
      stilltvshowgif.attr("data-state", "still");
      
      tvshowgif.addClass("gif");
      tvshowgif.attr("src", animatedgif);
      tvshowgif.attr("data-state", "animated")
      tvshowgif.attr("data-animated", animatedgif);
      
      tvshowgif.attr("alt", "tv gif");

      $("#results").append(tvshowgif);
      addTvButton();


      }

      
    });




    }

    $("#showsubmit").on("click", function(){
    	event.preventDefault();

    	var tvshow = $("#showinput").val().trim().toUpperCase();

    	
    	tvshows.push(tvshow);
    	console.log(tvshows);

    	addTvButton();
    });

   
    $(".gif").on("click", function(){

    	alert("gif clicked");

    	//fixed_height_still

        

    	var state = $(this).attr("data-state");

    	if (state === "still") {
    		$(this).attr("src", $(this).attr("data-animated"))
    		$(this).attr("data-state", "animate");
    	} else {
        $(this).attr("src", $(this).attr("data-still"))
    		$(this).attr("data-state", "still");
    	}
    	
    })




    $(document).on("click", ".tvshow", tvgifs);

    addTvButton();
    

    

});

