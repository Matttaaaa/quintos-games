// screen width is 256, height is 192

let paddleL, paddleR, topWall, bottomWall, ball;
let scoreL = 0;
let scoreR = 0;

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

	topWall = new Sprite(imgWall, 128, 10, width, 1, 'static');

	bottomWall = new Sprite(imgWall, 128, 182, width, 1, 'static');

	paddleL = new Sprite(imgPaddle);
	paddleL.x = 8;
	paddleL.y = height / 2;
	paddleL.collider = 'static';

	paddleR = new Sprite(imgPaddle);
	paddleR.x = width - 8;
	paddleR.y = height / 2;
	paddleR.collider = 'static';

	// places a ball in center of the screen
	ball = new Sprite(imgBall);
	ball.d = 8;
	ball.x = width / 2;
	ball.y = height / 2;
	ball.bounciness = 1;
	ball.rotationLock = true;
	ball.friction = 0;

	ball.vel.x = 1.3;
	ball.vel.y = 1.3;

	ball.collide(paddleL, bounceL);
	ball.collide(paddleR, bounceR);

	text(scoreL, 2, 6);
	text(scoreR, 2, 25);
}

function bounceL() {
	let pos = ball.y - paddleL.y;

	//log(round(pos)));
	if (ball.direction > 0) {
		ball.direction -= pos;
	} else {
		ball.direction += pos;
	}
	log(round(ball.direction));
	if (ball.direction > 70 && ball.direction < 90) {
		ball.direction = 70;
	} else if (ball.direction >= 90 && ball.direction < 110) {
		ball.direction = 110;
	}
	log(round(ball.direction));
}
function bounceR() {
	let pos = ball.y - paddleR.y;

	//log(round(pos)));
	if (ball.direction > 0) {
		ball.direction -= pos;
	} else {
		ball.direction += pos;
	}
	log(round(ball.direction));
	if (ball.direction > 70 && ball.direction < 90) {
		ball.direction = 110;
	} else if (ball.direction >= 90 && ball.direction < 110) {
		ball.direction = 70;
	}
	log(round(ball.direction));
}

function draw() {
	background('b');

	ball.speed += 0.001;

	if (ball.x >= 296 || ball.x <= -40) {
		if (ball.x > 256) {
			scoreL += 1;
			text(scoreL, 2, 6);
		} else if (ball.x < 0) {
			scoreR += 1;
			text(scoreR, 2, 25);
		}

		ball.x = 128;
		ball.y = 96;

		ball.vel.x = 1.3;
		ball.vel.y = 1.3;
	}

	if (kb.pressing('ArrowUp')) {
		paddleR.y += -4;
	}

	if (kb.pressing('ArrowDown')) {
		paddleR.y += 4;
	}

	if (kb.pressing('w')) {
		paddleL.y += -4;
	}

	if (kb.pressing('s')) {
		paddleL.y += 4;
	}

	allSprites.debug = mouse.pressing();
}
