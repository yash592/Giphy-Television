//api key = 28gC9rCYdONr2MqkeKljSK20Q1p2otZ8

$(document).ready(function () {

// var queryurl = "http://api.giphy.com/v1/gifs/search?q=" + searchterm + "&api_key=28gC9rCYdONr2MqkeKljSK20Q1p2otZ8&limit=5"


var tvshows = ["BREAKING BAD", "GREY'S ANATOMY", "DEXTER"];


    // $("#showme").on("click", function(){

    // })

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

      var animatedgif = response.data[0].images.original.url;
      
      var tvshowgif = $("<img>");

      tvshowgif.attr("src", animatedgif);
      tvshowgif.attr("alt", "tv gif");






      $("#results").append(tvshowgif);
      addTvButton();
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

