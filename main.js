var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("text").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event)
{
    console.log(event);
    var Content = event.results[0][0].trascript;
    console.log(Content);
    document.getElementById("text").innerHTML = Content;
}
 
