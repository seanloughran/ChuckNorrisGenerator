$(document).ready(function() {
  $("#about").hide();
  $("#homeBtn").addClass("current");

  $(".navBtn").on("click", function() {
    $(".navBtn").removeClass("current");
    $("#main section").hide();
  });

  $("#homeBtn").on("click", function() {
    $("#homeBtn").addClass("current");
    $("#home").show();
  });

  $("#aboutBtn").on("click", function() {
    $("#aboutBtn").addClass("current");
    $("#about").show();
  });

  $("#newJoke").mouseover(function() {
    $("#newJoke").css("background-color", "black");
  });

  $("#newJoke").mouseout(function() {
    $("#newJoke").css("background-color", "#660000");
  });

  $("#newJoke").on("click", loadJoke);

  function loadJoke() {
    $.getJSON("https://api.icndb.com/jokes/random", function(json) {
      $("#home p").html('"' + json.value.joke + '"');
    });
  };

  loadJoke();
});
