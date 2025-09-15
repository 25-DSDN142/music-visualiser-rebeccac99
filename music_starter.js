
let bggreen;
let bgpurple;
let diamond;
let firstRun = true;

//ellipse growth
let ellipsesize = 0;
let ellipsesize2 = 0;
let ellipsesize3 = 0;
let ellipsesize4 = 0;
let ellipsesize5 = 0;
let ellipsesize6 = 0;
let ellipsesize7 = 0;
let ellipsesize8 = 0;
let ellipsesize9 = 0;
let ellipsesize10 = 0;
let ellipsesize11 = 0;

//reactive ellipses
let e1=6
let e2=80
let e3=160
let e4=240;
let e5=320;
let e6=400;
let e7=480;
let e8=560;
let e9=640;
let e10=720;
let e11=800;

//scenes 
let scene = 1;
let scene2Counter = 0;
let scene3Counter = 0;
let scene4Counter = 0;

//fade transitions
let fadeAlpha = 0;
let ellipsefade = 0;
let diamondfade = 0;
let scene3end = 2000;

//line animations
let linelength = 0;
let diaglength = 0;

//reactive lines
let topline = 0;
let bottomline = 0;
let leftline = 0;
let rightline = 0;

let topleft = 0;
let topright = 0;
let bottomleft = 0;
let bottomright = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100 
function draw_one_frame(words, vocal, drum, bass, other, counter) 
{ background(0) 

if(firstRun){
   bggreen = loadImage('backgroundgreencloaks.png');
   bgpurple = loadImage('backgroundpurplecloaks.png');
   diamond = loadImage('diamond.png')
   firstRun = false;
}
 

if(scene === 1){
//scene 1: expanding ellipses

image(bggreen,0,0,width,height);


//ellipse 1
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,ellipsesize,ellipsesize);
if(ellipsesize > 6){
   ellipsesize = 6;
}

//ellipse 2
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,ellipsesize2,ellipsesize2);
if(ellipsesize2 > 80){
   ellipsesize2 = 80;
}

//ellipse 3
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,ellipsesize3,ellipsesize3);
if(ellipsesize3 > 160){
   ellipsesize3 = 160;
}

//ellipse 4
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,ellipsesize4,ellipsesize4);
if(ellipsesize4 > 240){
   ellipsesize4 = 240;
}

//ellipse 5
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,ellipsesize5,ellipsesize5);
if(ellipsesize5 > 320){
   ellipsesize5 = 320;
}

//ellipse 6
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,ellipsesize6,ellipsesize6);
if(ellipsesize6 > 400){
   ellipsesize6 = 400;
}

//ellipse 7
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,ellipsesize7,ellipsesize7);
if(ellipsesize7 > 480){
   ellipsesize7 = 480;
}

//ellipse 8
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,ellipsesize8,ellipsesize8);
if(ellipsesize8 > 560){
   ellipsesize8 = 560;
}

//ellipse 9
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,ellipsesize9,ellipsesize9);
if(ellipsesize9 > 640){
   ellipsesize9 = 640;
}

//ellipse 10
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,ellipsesize10,ellipsesize10);
if(ellipsesize10 > 720){
   ellipsesize10 = 720;
}

//ellipse 11
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,ellipsesize11,ellipsesize11);
if(ellipsesize11 > 800){
   ellipsesize11 = 800;
}

//ellipse growth
ellipsesize = ellipsesize +0.7
ellipsesize2 = ellipsesize2 +0.7
ellipsesize3 = ellipsesize3 +0.7
ellipsesize4 = ellipsesize4 +0.7
ellipsesize5 = ellipsesize5 +0.7
ellipsesize6 = ellipsesize6 +0.7
ellipsesize7 = ellipsesize7 +0.7
ellipsesize8 = ellipsesize8 +0.7
ellipsesize9 = ellipsesize9 +0.7
ellipsesize10 = ellipsesize10 +0.7
ellipsesize11 = ellipsesize11 +0.7


if(ellipsesize11 >= 800){
   scene = 2;
}
}


/////////////////////////////////////////



else if(scene === 2) {
   scene2Counter++;

e1 = lerp(e1,map(vocal,0,100,6,50),0.2);
e2 = lerp(e2,map(drum,0,100,80,170),0.2);
e3 = lerp(e3,map(bass,0,100,160,220),0.2);
e4 = lerp(e4,map(other,0,100,140,300),0.2);
e5 = lerp(e5,map(vocal,0,100,320,380),0.2);
e6 = lerp(e6,map(drum,0,100,400,450),0.2);
e7 = lerp(e7,map(bass,0,100,480,560),0.2);
e8 = lerp(e8,map(other,0,100,560,630),0.2);
e9 = lerp(e9,map(vocal,0,100,640,710),0.2);
e10 = lerp(e10,map(drum,0,100,720,790),0.2);
e11 = lerp(e11,map(bass,0,100,800,860),0.2);

image(bggreen,0,0,width,height); 

//ellipse 1
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,e1,e1);

//ellipse 2
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,e2,e2);

//ellipse 3
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,e3,e3);

//ellipse 4
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,e4,e4);

//ellipse 5
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,e5,e5);

//ellipse 6
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,e6,e6);

//ellipse 7
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,e7,e7);

//ellipse 8
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,e8,e8);

//ellipse 9
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,e9,e9);

//ellipse 10
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,e10,e10);

//ellipse 11
noFill();
stroke(152,130,73)
strokeWeight(2);
ellipse(500,500,e11,e11);


if(scene2Counter > 2500){
   scene = 3;
   ellipsefade = 255;
}

}

//////////////////////////////


else if(scene === 3){
   scene3Counter++;

//fade in 
if (fadeAlpha < 255){
   fadeAlpha += 1; // fade speed
}

e1 = lerp(e1,map(vocal,0,100,6,50),0.2);
e2 = lerp(e2,map(drum,0,100,80,170),0.2);
e3 = lerp(e3,map(bass,0,100,160,220),0.2);
e4 = lerp(e4,map(other,0,100,140,300),0.2);
e5 = lerp(e5,map(vocal,0,100,320,380),0.2);
e6 = lerp(e6,map(drum,0,100,400,450),0.2);
e7 = lerp(e7,map(bass,0,100,480,560),0.2);
e8 = lerp(e8,map(other,0,100,560,630),0.2);
e9 = lerp(e9,map(vocal,0,100,640,710),0.2);
e10 = lerp(e10,map(drum,0,100,720,790),0.2);
e11 = lerp(e11,map(bass,0,100,800,860),0.2);

image(bggreen,0,0,width,height); 

tint(255,fadeAlpha);
   image(bgpurple,0,0,width,height)
   noTint();

//ellipse 1
noFill();
stroke(152,130,73,ellipsefade);
strokeWeight(2);
ellipse(500,500,e1,e1);

//ellipse 2
noFill();
stroke(152,130,73,ellipsefade);
strokeWeight(2);
ellipse(500,500,e2,e2);

//ellipse 3
noFill();
stroke(152,130,73,ellipsefade);
strokeWeight(2);
ellipse(500,500,e3,e3);

//ellipse 4
noFill();
stroke(152,130,73,ellipsefade);
strokeWeight(2);
ellipse(500,500,e4,e4);

//ellipse 5
noFill();
stroke(152,130,73,ellipsefade);
strokeWeight(2);
ellipse(500,500,e5,e5);

//ellipse 6
noFill();
stroke(152,130,73,ellipsefade);
strokeWeight(2);
ellipse(500,500,e6,e6);

//ellipse 7
noFill();
stroke(152,130,73,ellipsefade);
strokeWeight(2);
ellipse(500,500,e7,e7);

//ellipse 8
noFill();
stroke(152,130,73,ellipsefade);
strokeWeight(2);
ellipse(500,500,e8,e8);

//ellipse 9
noFill();
stroke(152,130,73,ellipsefade);
strokeWeight(2);
ellipse(500,500,e9,e9);

//ellipse 10
noFill();
stroke(152,130,73,ellipsefade);
strokeWeight(2);
ellipse(500,500,e10,e10);

//ellipse 11
noFill();
stroke(152,130,73,ellipsefade);
strokeWeight(2);
ellipse(500,500,e11,e11);


if(scene3Counter > 2700){
   ellipsefade -= 2;
   if(ellipsefade <= 0){
      ellipsefade = 0;
   scene = 4;
   }
}
}


///////////////////////////////////////


else if(scene === 4) {
   scene4Counter++;

//fade in 
if (diamondfade < 255){
   diamondfade += 1; // fade speed
}

image(bgpurple,0,0,width,height);

tint(255, diamondfade);
   image(diamond,0,0,width,height);
   noTint();

//lines growing out of diamond
if(diamondfade >= 255){

   if(linelength < 350){ //line length
   linelength = linelength +0.5; //line growth speed
   }
}

stroke(152,130,73);
strokeWeight(4);

//long lines
line(500,500,500,500-linelength); //up
line(500,500,500,500+linelength); //down
line(500,500,500-linelength,500); //left
line(500,500,500+linelength,500); //right

//diagonal short lines
diaglength = linelength *0.3; //length

line(500,500,500+diaglength,500-diaglength); //top right 
line(500,500,500-diaglength,500-diaglength); //top left
line(500,500,500-diaglength,500+diaglength); //bottom right
line(500,500,500+diaglength,500+diaglength); //bottom left



if(scene4Counter > 1000){
   scene = 5;
}
}

/////////////////////////////////////////

//reactive lines
else if(scene === 5){

image(bgpurple,0,0,width,height);
image(diamond,0,0,width,height);

linelength = 350;
diaglength = linelength *0.3;

stroke(152,130,73);
strokeWeight(4);

//line movement
topline = lerp(topline,map(bass,0,100,50,350),0.2);
bottomline = lerp(bottomline,map(bass,0,100,50,350),0.2);
leftline = lerp(leftline,map(other,0,100,50,350),0.2);
rightline = lerp(rightline,map(other,0,100,50,350),0.2);

topright = lerp(topright,map(drum,0,100,20,120),0.2);
topleft = lerp(topleft,map(drum,0,100,20,120),0.2);
bottomleft = lerp(bottomleft,map(drum,0,100,20,120),0.2);
bottomright = lerp(bottomright,map(drum,0,100,20,120),0.2);

//long lines
line(500,500,500,500-topline);
line(500,500,500,500+bottomline);
line(500,500,500-leftline,500);
line(500,500,500+rightline,500);

//diagonal lines
line(500,500,500+topright,500-topright);
line(500,500,500-topleft,500-topleft);
line(500,500,500-bottomleft,500+bottomleft);
line(500,500,500+bottomright,500+bottomright);

}
}