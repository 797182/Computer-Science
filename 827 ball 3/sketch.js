//  Global variables
var balls=[];
//var b2;
//var b3;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(120);
  //b1 = new Ball(random(width), random(height),random(15, 35), color(255, 0, 0));
  //b2 = new Ball(random(width), random(height),random(15, 35), color(255, 255, 255));
  //b3 = new Ball(random(width), random(height),random(15, 35), color(0, 0, 255));
}

function loadBalls(number){
  for(var i = 0; i < numBalls; i++){
    var loc = createVector(random(width), radom(height));
    var vel = createVector(random(-3,3), radom(-3,3));
    var radius = random(20,40);
    var col = color(random(255), random(255), random(255));

    balls.push(new Ball(loc, vel, radius, col));

}

function draw() {
    background(20,20,20);
  for(var i=0; i<balls.length; i=i+1){
      balls[i].run();
  }
}
