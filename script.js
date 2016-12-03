
url = "https://wind-bow.hyperdev.space/twitch-api/streams/";
channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
$( document ).ready(function(){
  for ( channel of channels) {
    $.ajax({
      url: url+channel,
      jsonp: "callback",
      dataType: "jsonp",
      success: function( response ) {
        if (response["stream"] == null) cl = "notLive";
        else cl = "live";
        channelLink = response["_links"].channel.split("/");
        channel = channelLink[channelLink.length-1];
        $('#main').append('<div class="'+cl+' ch">'+ channel + " "+ response["stream"] +'</div>');
      }
    });
  }
});
