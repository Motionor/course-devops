const alphabet = [
  'Alfa',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo',
  'Foxtrot',
  'Golf',
  'Hotel',
  'India',
  'Juliett',
  'Kilo',
  'Lima',
  'Mike',
  'November',
  'Oscar',
  'Papa',
  'Quebec',
  'Romeo',
  'Sierra',
  'Tango',
  'Uniform',
  'Victor',
  'Whiskey',
  'X-ray',
  'Yankee',
  'Zulu',
];

/**
 *
 * @param {string} char
 * @return {string}
 */
function getWordByCharacter(char) {
  return char.match(/[a-z]/i)
    ? alphabet.find((word) => word[0].toUpperCase() === char.toUpperCase())
    : "";
}
if (process.argv[2] && process.argv[2].match(/[a-z]/i)) {
  console.log(getWordByCharacter(process.argv[2]))
} else {
  console.log('Please, enter a character from A to Z')
}