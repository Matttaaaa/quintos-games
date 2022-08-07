async function start() {
	// your code goes here! below this line
	let number = Math.round(random(1, 100));
	let guess;
	while (guess !== number) {
		guess = await prompt('take a guess: ');
		if (guess == number) {
			await alert('correct wow cheater');
		} else if (guess > number) {
			await alert('too high');
		} else if (guess < number) {
			await alert('too low');
		} else {
			await alert('maybe try a number hm?');
		}
	}
	exit(); // this function exits the game
}
