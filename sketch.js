var video;
var button;
var snaps = [];
var canWidth = window.screen.width;
var canHeight = window.screen.height;
var screenmult = document.documentElement.clientWidth/window.screen.width;
var w = 80*screenmult;
var h = 60*screenmult;


function setup(){
createCanvas(canWidth*screenmult, canHeight*screenmult);

video = createCapture(VIDEO);
video.size(w/screenmult,h/screenmult);
// video.hide();
// button = createButton('snap');
// button.mousePressed(takesnap);
 video.hide();
  background(0);

}

function takesnap(){




}

function draw(){
    // tint(255,0,140);
  // image(video, 0, 0, mouseX, mouseY);
  snaps.unshift(video.get());
  if (snaps.length>(ceil(canWidth*screenmult/w))*(ceil(canHeight*screenmult/h))){
  snaps.splice(snaps.length-1,1);
  // console.log(snaps);
 }
// console.log(snaps.length);
  var x = 0;
  var y = 0;
  var max = snaps.length;



  for (var i = 0; i < max; i++) {
    image(snaps[i], x, y, w, h);
    x = x+ w;
    if (x >= width){
      y = y + h;
      x = 0;
      if(y>=height){
        y = 0;
      }
    }
  }

}

