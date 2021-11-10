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

	// csv to an array of elements by separating them using split
	// [ 'name,age', 'joshua,21', 'aji,22', 'evangel,23' ]
	const values = csv.split('\n');
	
	// empty Array for storing obj
	const arr = [];

	// destructure values
	// header => name,age
	// ...csvValues => joshua,21 aji,22 evangel,23
	const [header, ...csvValues] = values;
	
	// destructure header
	// keyName => name
	// keyAge => age
	const [keyName, keyAge] = header.split(",");

	// return an empty array
	if (csvValues.length === 0 || csvValues[0] === '') return [];

	// will iterate from csvValues length
	// length => 3
	// joshua,21 aji,22 evangel,23
	for (let i = 0; i < csvValues.length; i++) {
		// csvValues to an array of elements by separating them using split
		// [ 'joshua', '21' ]
		// [ 'aji', '22' ]
		// [ 'evangel', '23' ]
		const val = csvValues[i].split(",");

		// val[0] => joshua => first iteration
		// val[0] => aji => second iteration
		// val[0] => evangel => third iteration
		const val1 = val[0];

		// val[1] => 21 => first iteration
		// val[1] => 22 => second iteration
		// val[1] => 23 => third iteration
		const val2 = val[1];

		// empty Object for storing keys and values
		const obj = {};

		// obj[name] = joshua => first iteration
		// obj[name] = aji => second iteration
		// obj[name] = evangel => third iteration
		obj[keyName] = val1;

		// obj[age] = 21 => first iteration
		// obj[age] = 22 => second iteration
		// obj[age] = 23 => third iteration
		obj[keyAge] = val2;

		// unshift obj to arr
		arr.unshift(obj);
	}
	return arr;
}

console.log(csvToObjParserSorted(csv));
