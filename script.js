
url = "https://wind-bow.hyperdev.space/twitch-api/streams/";
channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$( document ).ready(function(){

  for ( channel of channels) {
    document.write(channel+"<br />");
    $.getJSON(url+channel, function(data){
      document.write(data+ "<br />");
    });
  }
});
