//global variables used throughout the code
let h;
let quadmask;
let capricorn;
let aquarius;
let pisces;
let aries;
let taurus;
let gemini;
let cancer;
let leo;
let virgo;
let libra;
let scorpio;
let sagittarius;
//code for twinkling stars adapted from:
//https://editor.p5js.org/hosken/sketches/LRCedfGPY
let stars = [];

function setup() {
  createCanvas(700,650); 
  quadmask = createGraphics(105,90) //shape mask for zodiac sign logos
  
  for (i = 0; i < 700; i++){
		let star = {
			x:random(0,width),
			y:random(0,height)
		};
		stars.push(star);
  }
}

//load all zodiac sign images
//logos taken from favpng.com
function preload() {
pisces = loadImage('pisces.png');
aries = loadImage('aries.png');
aquarius = loadImage('aquarius.png');
gemini = loadImage('gemini.png');
cancer = loadImage('cancer.png');
leo = loadImage('leo.png');
capricorn = loadImage('capricorn.png');
sagittarius = loadImage('sagittarius.png');
libra = loadImage('libra.png');
scorpio = loadImage('Scorpio.png');
taurus = loadImage('taurus.png');
virgo = loadImage('virgo.png');
}

function draw() {
  background(41, 26, 9);
  angleMode(DEGREES); 
  rectMode(CENTER); 

  //print minute
  
  if(second() == 1){var m = minute();
                   console.log(m);}
  
  //create stars
  for (i = 0; i < 700; i++){
		let x = stars[i].x;
		let y = stars[i].y;
		
		// Define colour of star
		fill('#e6cd8a');
        strokeWeight(0.5);
		ellipse(x,y,random(1,3),random(1,3));
	}
  
  translate(width / 2, height / 2);
  rotate(270); //starting point
  
  //gold outside border
  noFill();
  stroke('#9a742d');//gold
  strokeWeight(2);
  circle(0, 0, 630);
  
  //gold inside border
  noFill();
  stroke('#9a742d');//gold
  strokeWeight(3);
  circle(0, 0, 280);
  
  //create lines on clock
  push();
  translate(0,0);
  rotate(268); //start at the top
  for(i = 0; i < 12; i+=1){
    stroke('#ba9b37'); //light gold
    strokeWeight(1);
    line(0, 140, 0, 315);
    rotate(30);    
  }  
  pop();
  
  //gold minutes circle
  //smoothing methodology appropriated from http://bl.ocks.org/erinobrien/8356a0c94a45b5fdffd590fddbad0d84
  var minutesWithFraction = minute() + (second() / 60);
  var minutesCircleSmooth = map(minutesWithFraction, 0, 60, 0, 360);
  
  //outer line minutes
  noFill();
  stroke('#8d6225');//dark gold
  strokeWeight(18);
  arc(0, 0, 595, 595, 0, minutesCircleSmooth, OPEN);

  //inner line minutes
  noFill();
  stroke('#9a742d');//light gold
  strokeWeight(9);
  arc(0, 0, 595, 595, 0, minutesCircleSmooth, OPEN);
  
  //silver seconds circle
  var secondsCircleSmooth = map(second(), 0, 60, 0, 360);
    
  //outer line seconds
  noFill();
  stroke('#9a9b98');//dark silver
  strokeWeight(10);
  arc(0, 0, 250, 250, 0, secondsCircleSmooth, OPEN);

  //inner line seconds
  noFill();
  stroke('#e0dbd8');//light silver
  strokeWeight(4);
  arc(0, 0, 250, 250, 0, secondsCircleSmooth, OPEN);
  
  //make zodiac hour symbol structure
  quadmask.rect(0, 0, 108, 90, 20);
  quadmask.fill(41, 26, 9);
  
  //begin making actual objects in the clock
  push();
  
  //convert from military time
  var h = hour()
  if(hour() > 12){h = hour() - 12}
  
  rotate(90); //make sure logos are upright
  for(i = 0; i < 12; i+=1){
      if(i == 0){capricorn.mask(quadmask);
               image(capricorn, -110, -255, 80, 75);}
      if(i == 1){aquarius.mask(quadmask);
               image(aquarius, -110, -255, 80, 75);}
      if(i == 2){pisces.mask(quadmask);
               image(pisces, -110, -255, 80, 75);}
      if(i == 3){aries.mask(quadmask);
               image(aries, -110, -255, 80, 75);}
      if(i == 4){taurus.mask(quadmask);
               image(taurus, -110, -255, 80, 75);}
      if(i == 5){gemini.mask(quadmask);
               image(gemini, -93, -255, 75, 70);}
      if(i == 6){cancer.mask(quadmask);
               image(cancer, -98, -255, 80, 75);}
      if(i == 7){leo.mask(quadmask);
               image(leo, -98, -255, 80, 75);}
      if(i == 8){virgo.mask(quadmask);
               image(virgo, -92, -255, 80, 75);}
      if(i == 9){libra.mask(quadmask);
               image(libra, -110, -255, 80, 75);}
      if(i == 10){scorpio.mask(quadmask);
               image(scorpio, -110, -245, 80, 75);}
      if(i == 11){sagittarius.mask(quadmask);
               image(sagittarius, -110, -255, 100, 90);}     
   
  translate(p5.Vector.fromAngle(0.5236*(i), 117)); //translate every symbol so they form a circle
}
  pop();
 
  push(); //create center of the clock
  translate(0, 0);
  rotate(90);

  if(h == 12){image(capricorn, -83,-83, 170,170);}
  if(h == 1){image(aquarius, -83,-83, 170,170);}
  if(h == 2){image(pisces, -83,-83, 170,170);}
  if(h == 3){image(aries, -83,-83, 170,170);}
  if(h == 4){image(taurus, -83,-83, 170,170);}
  if(h == 5){image(gemini, -85,-83, 170,170);}
  if(h == 6){image(cancer, -83,-83, 170,170);}
  if(h == 7){image(leo, -83,-83, 170,170);}
  if(h == 8){image(virgo, -83,-83, 170,170);}
  if(h == 9){image(libra, -83,-83, 170,170);}
  if(h == 10){image(scorpio, -83,-83, 170,170);}
  if(h == 11){image(sagittarius, -83,-83, 170,170);}
      
  pop();
}

