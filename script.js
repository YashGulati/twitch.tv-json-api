
url = "https://wind-bow.hyperdev.space/twitch-api/streams/";
channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
$( document ).ready(function(){
  for ( channel of channels) {
    $.ajax({
      url: url+channel,
      jsonp: "callback",
      dataType: "jsonp",
      success: function( response ) {
        if (response["error"] == "Not Found") {
          console.log(response["message"]);
          $('#main').append(
            '<div class="'+cl+' ch"><div class="left">'+
            '<a>'+ response["message"].split("'")[1] + '</a></div><div class="right"><div class="content">'+ response["message"] +'</div></div></div>'
          );
          return;
        }
        if (response["stream"] == null) cl = "notLive";
        else cl = "live";
        channelLink = response["_links"].channel.split("/");
        channel = channelLink[channelLink.length-1];
        if(response["stream"] == null) status = "Offline";
        else status=response.stream["game"] + " <b>:</b> " + response.stream.channel.status;
        logo = (status!="Offline")?('<img src="'+response.stream.channel.logo+'" />'):('<img src="https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F" />');
        $('#main').append('<div class="'+cl+' ch"><div class="left">'+logo+'<a href="https://www.twitch.tv/'+channel+'"  target="_blank">'+ channel + '</a></div><div class="right"><div class="content">'+ status +'</div></div></div>');
        // if(status!="Offline") $('.ch').
      }
    });
  }
});
