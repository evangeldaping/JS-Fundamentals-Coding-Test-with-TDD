// Description: Create a function that accepts a string of words, the function would then capitalize the first letter of each word. empty string should return empty.

// Input: 'i am joshua'

// Output : I Am Joshua

const sentence =
	"hello there, i am joshua chu and i need you to capitalize each word's first letter in order to become the best programmer in the world.";

// Using for loop
export const capitalizeFuncFor = (sentence) => {
	// Code here
	const words = sentence.split(" ");
	for (let i = 0; i < words.length; i++) {
		words[i] =  words[i].charAt(0).toUpperCase() + words[i].substr(1);
	}
	return words.join(" ");
};

console.log(capitalizeFuncFor(sentence));

// Using map
export const capitalizeFunc = (sentence) => {
	return sentence
		.split(' ')
		.map(words => words.charAt(0).toUpperCase() + words.slice(1)).join(' ');
}
console.log(capitalizeFunc(sentence));