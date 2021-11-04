// Description: Create a function that parses a csv value and convert it into an object with the headers of the csv as the keys of each object, for exmaple if the headers consist of name,age both name and age would be the keys for each object inside the output array.

// Additional Information: \n means new line

// Input: `name,age\njoshua,21\naji,22\nevangel,23`

// Output :
// [
// 	{ name: "evangel", age: "23" },
// 	{ name: "aji", age: "22" },
// 	{ name: "joshua", age: "21" },

// ]

const csv = `name,age\njoshua,21\naji,22\nevangel,23`;

export const csvToObjParserSorted = (csv) => {
	// Code here
	return 0;
};

console.log(csvToObjParserSorted(csv));
