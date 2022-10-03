let frog, lilypads;

function preload() {
	frog = new Sprite();
	frog.addAni('frog_jump.png', { size: [32, 16], frames: 7 });
	lilypads = new Group();
	lilypads.addAni('lilypads.png', { size: [16, 16], frames: 12 });
}

function setup() {
	world.gravity.y = 10;
	noStroke();

	frog.x = 14;
	frog.y = 90;
	frog.w = 10;
	frog.h = 8;
	frog.rotationLock = true;
	frog.ani.stop();
	frog.ani.looping = false;
	frog.ani.endOnFirstFrame = true;

	lilypads.layer = 0;
	lilypads.y = 90;
	lilypads.w = 10;
	lilypads.h = 2;
	lilypads.collider = 'static';

	makeLilyPads();
}

function makeLilyPads() {
	/* Part A: Use a loop to make more lily pads. */

	for (let i = 0; i < 50; i++) {
		let lily = new lilypads.Sprite();
		lily.x = 14 + i * 14;
		lily.ani.frame = round(random(1, 12));
		lily.ani.frameDelay = round(random(120, 200));
		if (random(0, 2) < 1) {
			i++;
		}
	}
}

function draw() {
	background('0');
	fill('3');
	rect(0, 0, width, 90);

	if (frog.y > 83 && frog.vel.y < 1) {
		frog.x = round(frog.x / 14) * 14;

		if (kb.pressed('ArrowUp')) {
			// little jump
			frog.velocity.y = -1.4;
			frog.velocity.x = 0.87;
			frog.ani.play();
		} else if (kb.pressed('ArrowRight')) {
			// BIG jump!
			frog.velocity.y = -2;
			frog.velocity.x = 1.215;
			frog.ani.play();
		}
	}

	camera.x = frog.x + 64;

	// restart the game
	if (kb.pressed('r')) {
		lilypads.removeAll();
		frog.x = 16;
		frog.y = 90;
		makeLilyPads();
	}
}
