// Description: Create a function that accepts two arrays and returns all the unique elements of each array, those that are identical for both arrays should not be included in the output array.

// Input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [1, 2, 5, 6, 7];

// Output : [3, 4, 7]

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 5, 6, 7];

// Using for loop
export const arrNotFuncFor = (arr1, arr2) => {
	// Code here
	const uniqueArr = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) === -1) {
			uniqueArr.push(arr1[i]);
		}
	}
	for (let i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) === -1) {
			uniqueArr.push(arr2[i]);
		}
	}
	return uniqueArr;
};

console.log(arrNotFuncFor(arr1, arr2));

// Using filter
// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
export const arrNotFunc = (arr1, arr2) => {
	const arr1Filtered = arr1.filter(el => !arr2.includes(el));
	const arr2Filtered = arr2.filter(el => !arr1.includes(el));
	
	return [...arr1Filtered, ...arr2Filtered]
}

console.log(arrNotFunc(arr1, arr2));