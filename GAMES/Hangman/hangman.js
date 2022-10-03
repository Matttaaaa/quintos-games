const hangman = [
	`
      
      
      
      
      
      
=========`,
	`
      +
      |
      |
      |
      |
      |
=========`,
	`
  +---+
      |
      |
      |
      |
      |
=========`,
	`
  +---+
  |   |
      |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
];

const wordsList =
	'abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar buckaroo buffalo buffoon buzzard buzzing buzzwords cobweb croquet crypt cycle disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby foxglove frazzled frizzled funny gabby galaxy galvanize gazebo gizmo glow glyph gnarly gnostic gossip grogginess haiku haphazard hyphen icebox injury ivory ivy jackpot jawbreaker jaywalk jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole kilobyte kiosk kitsch kiwifruit klutz knapsack lengths lucky luxury marquee matrix megahertz microwave mnemonic mystify nightclub nowadays oxidize oxygen pajama phlegm pixel pizazz polka psyche puppy puzzling quartz queue quip quiz quizzes razzmatazz rhythm scratch snazzy squawk staff strength stretch stronghold stymie subway swivel syndrome thrift thumb topaz transcript transgress transplant twelfth unknown unzip vaporize voodoo vortex walkway waltz wave wavy waxy well whomever witch wizard wristwatch xylophone yacht youthful yummy zigzag zilch zipper zodiac zombie';

let cont = 'y';
// the start function gets run when the game starts
async function start() {
	while (cont == 'y') {
		// your code goes here! below this line
		let wrongLetters = 0;
		let hangProg = 0;
		/* Part A: split the wordsList String into an array called words, then choose a random word */
		let words = wordsList.split(' ');
		log(words);
		let word = words[Math.round(random(0, words.length - 1))];
		log(word);

		/* Part B: make an array with a line for each letter in the word */
		// Example word: 'quiz'
		// lines -> ['_', '_', '_', '_']
		let lines = [];
		for (let i = 0; i < word.length; i++) {
			lines.push('_');
		}
		log(lines);

		while (true) {
			/* Part C: show the lines for the word below the hangman art */

			let guess = await prompt(hangman[hangProg] + '\n' + lines.join(' '));

			wrongLetters = 0;

			for (let i = 0; i < word.length; i++) {
				if (guess == word[i]) {
					lines[i] = guess;
				} else {
					wrongLetters++;
				}
			}

			log(wrongLetters);
			if (wrongLetters == word.length) {
				hangProg++;
				log(hangProg);
			}

			if (hangProg > 8) {
				await alert(hangman[9] + '\nYou lost, the word was ' + word);
				break;
			}

			if (lines.join('') == word) {
				await alert(hangman[hangProg] + '\n' + word + '\nYou won!');
				break;
			}
		}

		cont = await prompt('Would you like to try another word?\n');
	}
	exit(); // exits the game
} // end of the start function
