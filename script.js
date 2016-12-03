
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
        if(response["stream"] == null) status = "Offline";
        else status=response.stream["game"] + " <b>:</b> " + response.stream.channel.status;
        logo = (status!="Offline")?('<img src="'+response.stream.channel.logo+'" height=50 width=50 />'):"";
        $('#main').append('<div class="'+cl+' ch"><div class="left">'+logo+'<a href="https://www.twitch.tv/'+channel+'">'+ channel + '</a></div><div class="right">'+ status +'</div></div>');
        // if(status!="Offline") $('.ch').
      }
    });
  }
});
