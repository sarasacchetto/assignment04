function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
 
}

function draw() {
  var gridSize = 10;
  
  
  background(0);
  
   var h = hour();
  var m =minute();
  var s = second();
  
text("Current hour:\n" + h, 5, 50);
text("Current minutes:" + m, 5,80);

text("Current second: \n" + s, 5, 110);


push();                                       
translate(windowWidth/2, windowHeight/2);
rotate(-90); 
noFill();                                 //secondi
stroke(255);
//arc(0,0,180,180,0,s*6);

var diameter=0;
  if (width>height) {
      diameter=height/3;
  }
  else {
    diameter=width/3;
  }
  
arc(0,0,diameter,diameter,0,s*6);

    
    push();       //min 5
         
    rotate(30);
     var diametermin=0;
        if (width>height) {
            diametermin=height/3;
        }
        else {
          diametermin=width/3;
        }
    translate(diametermin,0);
    strokeWeight(3);
    line(0,0,10,0);
    pop();
    
    push();   //min 10
    rotate(60);
    translate(diametermin,0);
    strokeWeight(3);
    line(0,0,10,0);
    pop();
    
    push();     //min 20
    rotate(120);
    translate(diametermin,0);
    strokeWeight(3);
    line(0,0,10,0);
    pop();
    
    push();     //min 25
    rotate(150);
    translate(diametermin,0);
    strokeWeight(3);
    line(0,0,10,0);
    pop();
    
    push();     //min 35
    rotate(210);
    translate(diametermin,0);
    strokeWeight(3);
    line(0,0,10,0);
    pop();
    
    push();   //min40
    rotate(240);
    translate(diametermin,0);
    strokeWeight(3);
    line(0,0,10,0);
    pop();
    
    push();   //min50
    rotate(300);
    translate(diametermin,0);
    strokeWeight(3);
    line(0,0,10,0);
    pop();
    
    push();       //min 55
    rotate(330);
    translate(diametermin,0);
    strokeWeight(3);
    line(0,0,10,0);
    pop();
    
  noStroke();
  fill(255);
    
    var distanceY=0;
  if (width>height) {
      distance=height/3;}
  else {
      distance=width/3;
  }
    
    push();     //12
    rotate(90);
    translate(-40,-distance);
    
    textSize(50);
    text('12', 10,20);
    pop();
    
    
     push();     //6
    rotate(90);
    translate(-25,distance);
    textSize(50);
    text('6', 10,20);
    pop();

    var distanceX=0;
  if (width>height) {
      distanceX=(height/3)-10;}
  else {
      distanceX=(width/3)-10;
  }

     push();     //3
    rotate(90);
    translate(distanceX,-5);
    textSize(50);
    text('3', 10,20);
    pop();
    
    var distanceXX=0;
  if (width>height) {
      distanceXX=(height/3)+35;}
  else {
      distanceXX=(width/3)+35;
  }

    
     push();     //9
    rotate(90);
    translate(-distanceXX,-5);
    textSize(50);
    text('9', 10,20);
    pop();

var lancetteore= 0;
if (width>height) {
      lancetteore=0+height/5.5;}
  else {
    lancetteore=0+width/5.5;
  }

    push();       //lancetta ore 
      rotate(h*30);
      strokeWeight(5);
      stroke(100,100,255);
      line(0,0,lancetteore,0);
    pop();
    
    
var lancettemin= 0;
if (width>height) {
      lancettemin=0+height/4;}
  else {
    lancettemin=0+width/4;
  }
  
    push();      //lancetta min
      rotate(m*6);
      strokeWeight(5);
      stroke(100,200,100);
      line(0,0,lancettemin,0);
    pop();

pop();                                        //fine secondi
 
 
 

  
}



//for "activate" the resizement
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
