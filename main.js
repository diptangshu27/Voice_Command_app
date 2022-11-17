x=0;
y=0;

draw_circle="";
draw_rect="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start()
{
    document.getElementById("status").innerHTML="System is recognising the speech.Please speak.";
    recognition.start();
}

recognition.onresult=function(event)
{
  console.log(event);  
  var contant = event.results[0][0].transcript;
  document.getElementById("status").innerHTML="The speech has recognized as "+contant;
  if(contant=="circle")
  {
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Started drawing circle";
    draw_circle= "set";
  }
  if(contant=="rectangle")
  {
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Started drawing rectangle";
    draw_rect="set";
  }
}

function setup()
{
    canvas=createCanvas(900,600);
}

function draw()
{
    if(draw_circle=="set")
    {
        radius= Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn";
        draw_circle="";
    }
    if(draw_rect=="set")
    {
        rect(x,y,100,50);
        document.getElementById("status").innerHTML="Rectangle is drawn";
        draw_rect="";
    }
}