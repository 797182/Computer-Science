//  This is a comment
//  The setup function function is called once when your program begins
// put setup code here

var b1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  b1 = new Ball(random(width), random(height),random(15, 35), color(250, 23, 23));
}

//  The draw function is called @ 30 fps
function draw() {
  b1.run();
}
