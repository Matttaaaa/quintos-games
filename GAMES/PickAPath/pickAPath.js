async function start() {
	// your code goes here! below this line

	let choice = 0; // initialize choice to 0, user has not made any choice yet
	let goOutside = false;
	let breaker = 0;
	let weapon = '';

	while (choice != null) {
		// while choice is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let msg = ''; // initialize message to empty String
		let options = [];

		if (choice == 0) {
			/* Part A0: Start your story! */
			msg =
				"It's midnight and the lights go out in your house.\n\n\t" +
				'1: Leave the room to get candles\n\t' +
				'2: Go to the breaker and see if it tripped\n\t' +
				'3: Go outside and see if your neighbors lost power too';
			options = [1, 2, 3];

			goOutside = false;
			breaker = 0;
			weapon = '';
		} else if (choice == 1) {
			/* Part A1: continue the story */
			msg =
				'You go to your storage closet. Luckily you have candles.\n\n\t' +
				'4: Take the candles to your bedroom\n\t' +
				'5: Light a candle and check the breaker';
			options = [4, 5];
		} else if (choice == 2) {
			msg =
				"It's too dark to see the breaker.\n\n\t" +
				'1: Leave the room to get candles\n\t' +
				'3: Go outside and see if your neighbors lost power too';
			options = [1, 3];
		} else if (choice == 3) {
			msg =
				'You open the door to see a shadowy figure across the street.\n\n\t' +
				'6: Go back inside\n\t' +
				'7: Investigate further';
			goOutside = true;
			options = [6, 7];
		} else if (choice == 4) {
			msg =
				'You return to your bedroom.\n\n\t' + '3: Go check outside\n\t' + '5: Go check the breaker\n\t' + '8: Sleep';
			options = [3, 5, 8];
		} else if (choice == 5) {
			msg =
				'You check the breaker and find out nothing is wrong with it.\n\n\t' +
				'3: Go check outside\n\t' +
				'9: Switch it off and on';
			options = [3, 9];
		} else if (choice == 6) {
			msg =
				'You have a bad feeling stirring in your gut.\n\n\t' + '10: Go to the kitchen\n\t' + '11: Go to the bedroom';
			options = [10, 11];
		} else if (choice == 7) {
			msg = 'Something feels off.\n\n\t' + '6: Go back inside\n\t' + '12: Say hello to them';
			options = [6, 12];
		} else if (choice == 8) {
			msg = 'You sleep and wake up in the morning like nothing happened.\nSigma ending\n\n\t0: try again';
			options = [0];
		} else if (choice == 9 && breaker !== 5) {
			breaker = breaker + 1;
			msg = 'Nothing happened.\n\n\t' + '9: Try again\n\t' + '10: Go check the kitchen';
			options = [9, 10];
		} else if (choice == 10) {
			msg =
				'There are several things on the counter.\n\n\t' +
				'13: Take the kitchen knife\n\t' +
				'14: Take a fuse and try to fix the breaker\n\t' +
				'15: Take a bottle of wine';
			options = [13, 14, 15];
		} else if (choice == 11) {
			msg = 'You feel uneasy.\n\n\t' + '16: Hide in the closet\n\t' + '17: Hide under the blanket';
			options = [16, 17];
		} else if (choice == 12) {
			msg = '"Hi, have you seen my cat?" the figure said\n\n\t' + '18: Run\n\t' + '19: "No sorry"';
			options = [18, 19];
		} else if (choice == 13 || choice == 15) {
			if (choice == 13) {
				weapon = 'knife';
			} else {
				weapon = 'bottle';
			}
			msg =
				'Three knocks on the front door alert you\n\n\t' + '16: Go hide in the closet\n\t' + '20: Get ready to attack';
			options = [16, 20];
		} else if (choice == 14 || breaker == 5) {
			breaker = 0;
			if (goOutside) {
				msg =
					'It worked but three knocks on the front door alert you\n\n\t' +
					'8: Ignore and go sleep\n\t' +
					'22: Go back to get the knife to defend yourself';
				options = [8, 22];
			} else {
				msg = 'It worked and now your house is lit go back to work corporate slave\nLights On ending\n\n\t0: try again';
				options = [0];
			}
		} else if (choice == 16) {
			msg = 'You wait...\n\n\t' + '16: Keep waiting\n\t' + '21: Exit the closet';
			options = [16, 21];
		} else if (choice == 17) {
			msg =
				'You wait... and then fall asleep.\nYou wake up to the sunrise to find out nothing happened while you slept...\nParanoid ending\n\n\t0: try again';
			options = [0];
		} else if (choice == 18) {
			msg = 'You run across the road to meet your end by a car\nAbrupt ending\n\n\t0: try again';
			options = [0];
		} else if (choice == 19) {
			msg =
				'"Oh ok sorry to bother you" the figure slips away into the night, you go back inside slightly weirded out\n\n\t' +
				'8: Just go sleep\n\t' +
				'14: Get the knife in case and go to sleep with it';
			options = [8, 14];
		} else if (choice == 20) {
			if (weapon == 'knife') {
				msg =
					'It opens the door and you stab it. Blood pours out everywhere and you find out you just stabbed your neighbour\nKiller ending\n\n\t0: try again';
				options = [0];
			} else {
				msg =
					'It opens the door and you smash it with the wine bottle. Blood drips down and you find out you just hit your neighbour on the head. The police finds you guilty and you get arrested.\nAttempted murder ending\n\n\t0: try again';
				options = [0];
			}
		} else if (choice == 21) {
			msg = 'You exit to find nothing\nNothing happened? ending\n\n\t0: try again';
			options = [0];
		} else if (choice == 22) {
			msg =
				'With your knife in hand, it opens the door and you find out it was just your neighbour. You find out they were just trying to find their cat\nMisunderstandings solved ending\n\n\t0: try again';
			options = [0];
		}
		// user choice leads to the the same result
		// else if (choice == 10 || choice == 11)

		// prompt the player to make choices
		let userInput = await prompt(msg);

		if (options.includes(userInput)) {
			choice = userInput;
		} else {
			await alert('You made an invalid choice. Try again!');
		}

		/* Part B0: end the game if there are no more choices to make */

		/* Part B1: check if the player made a valid choice, reject invalid choices */
	}

	exit(); // exits the game
}
