var squares = [];
Var numberOfSquares = 8;
Var squareSize;

function setup () {
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	squareSize = width/numberofSquares;
	loadSquares(8);

	for (var i = 0; i < squares.length; i++) {
		squares[i].render();
	}
}

function loadSquares() {
	var rowNum = 0;
	var colNum = 0;

	for (var row = 0; row < 8; row++) {
		var x = 100*row;
for (var col = 0; col < 8; col++) {
	var y = 100*col;
	var loc = createVector(x, y);
	var c;
	if (x==0)
}
	}
}
