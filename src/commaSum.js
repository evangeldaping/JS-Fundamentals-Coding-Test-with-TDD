// Description: Create a function that parses a given string that contains numeric values separated by commas, after parsing through the string, add all the numeric values derived from the parsing

// Input: "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";

// Output : 57.3

const arrString = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";

// Using for loop
export const commaSum = (arrString) => {
	//Code here
	const numStrings = arrString.split(',');
	const newArrays = [];
	for( let i = 0; i < numStrings.length; i++) {
		newArrays.push(parseFloat(numStrings[i]))		
	}

	let total = 0;
	for (let i = 0; i < newArrays.length; i++) {
		total += newArrays[i];
	}
	return total;
};

console.log(commaSum(arrString));
