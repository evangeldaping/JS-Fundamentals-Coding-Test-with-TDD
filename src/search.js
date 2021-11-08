// Description: Create a function that accepts two parameters, the array to be searched and the search term to be used in the search. The search function would be case agnostic. The return type should also be an array with elements that satisfies the search term.

// Input: const searchArr = ["joShUa", "aJI", "EvaNgel"];

// Output : ["joShUa", "aJI"]

const searchArr = ["joShUa", "aJI", "EvaNgel"];
const searchTerm = "j";

// Using for loop
export const searchFuncFor = (searchArr, searchTerm) => {
	// Code here	
	// pseudo code
	// array to lower case
	// find j from elements of searchArr
	// newArray = []
	// push
	// return newArray after iteration complete

	const searchArrToLowerNew =  [];
	for (let i = 0; i < searchArr.length; i++) {
		const searchData = searchArr[i];
		if (searchData.toLowerCase().includes(searchTerm)) {
			searchArrToLowerNew.push(searchData);
		}
	}
	return searchArrToLowerNew
};

console.log(searchFuncFor(searchArr, searchTerm));

//Using filter
export const searchFunc = (searchArr, searchTerm) => {
	// Code here
	return searchArr
		.filter(searchData => searchData.toLowerCase().includes(searchTerm))
};

console.log(searchFunc(searchArr, searchTerm));
