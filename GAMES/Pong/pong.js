// screen width is 256, height is 192

let wall, paddleL, paddleR, ball;

function setup() {
	let imgBall = spriteArt(
		`
..wwww..
.ww..ww.
ww....ww
w......w
w......w
ww....ww
.ww..ww.
..wwww..`
	);

	let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'ww....ww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');

	let imgWall = spriteArt('w'.repeat(width));

	wall = new Sprite(imgWall);
	wall.x = width / 2;
	wall.y = 10;

	paddleL = new Sprite(imgPaddle);
	paddleL.x = 8;
	paddleL.y = height / 2;

	paddleR = new Sprite(imgPaddle);
	paddleR.x = width - 8;
	paddleR.y = height / 2;

	// places a ball in center of the screen
	ball = new Sprite(imgBall);
	ball.x = width / 2;
	ball.y = height / 2;
}

function draw() {
	background('b');
	/* Part A1: make the ball move */
	ball.x += 1;

	paddleL.y = mouseY;
	paddleR.y = mouseY;
}
