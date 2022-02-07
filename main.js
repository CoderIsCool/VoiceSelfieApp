
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var textArea = document.getElementById("text");

function start()
{
    textArea.innerHTML = "";
    recognition.start();

}
recognition.onresult = function(event)
{
    console.log(event);
    var Content = event.results[0][0].transcript;
    textArea.innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie"){
        console.log("Taking Selfie");
        speak();
    }
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking my selfie in 7 seconds";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnap();
        SaveImage();
    },7000);
}
camera = document.getElementById("camera");
Webcam.set({
    width:400,
    height:300,
    image_format: "png",
    png_quality:90,
});
function takeSnap()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="cam" src="'+data_uri+'"/>';

    });
}
function SaveImage()
{
    link=document.getElementById("Link");
    image=document.getElementById("cam").src;
    link.href=image;
    link.click();
}