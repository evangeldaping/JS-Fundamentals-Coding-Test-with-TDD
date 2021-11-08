// Description: Create a function that accepts an array and add each all elements that are greater than the previous elements before it.

// Input: [1, 2, 2, 3, 1, 4, 3, 5]

// Output : 14

const arr = [1, 2, 2, 3, 1, 4, 3, 5];

// Using for loop
export const sumArrFor = (arr) => {
	// Code here
	let sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i+1] > arr[i]) {
			sum += arr[i+1]
		}
	}
	return sum;
};

console.log(sumArrFor(arr));

// first loop
// variable   			value
// i          			0
// arr[i+1]   			[0+1]=>[1]=>2
// arr[i]     			[0]=>1
// arr[i+1] > arr[i]    2>1 => true
// sum += arr[i+1]      0+2
// sum					2

// second loop
// variable   			value
// i          			1
// arr[i+1]   			[1+1]=>[2]=>2
// arr[i]     			[1]=>2
// arr[i+1] > arr[i]    2>2 => false
// sum += arr[i+1]      
// sum					2

// third loop
// variable   			value
// i          			2
// arr[i+1]   			[2+1]=>[3]=>3
// arr[i]     			[2]=>2
// arr[i+1] > arr[i]    3>2 => true
// sum += arr[i+1]      2+3
// sum					5

// fourth loop
// variable   			value
// i          			3
// arr[i+1]   			[3+1]=>[4]=>1
// arr[i]     			[3]=>3
// arr[i+1] > arr[i]    1>3 => false
// sum += arr[i+1]      
// sum					5

// fifth loop
// variable   			value
// i          			4
// arr[i+1]   			[4+1]=>[5]=>4
// arr[i]     			[4]=>1
// arr[i+1] > arr[i]    4>1 => true
// sum += arr[i+1]      5+4
// sum					9

// sixth loop
// variable   			value
// i          			5
// arr[i+1]   			[5+1]=>[6]=>3
// arr[i]     			[5]=>4
// arr[i+1] > arr[i]    3>4 => false
// sum += arr[i+1]      
// sum					9

// seventh loop
// variable   			value
// i          			6
// arr[i+1]   			[6+1]=>[7]=>5
// arr[i]     			[6]=>3
// arr[i+1] > arr[i]    5>3 => true
// sum += arr[i+1]      9+5
// sum					14

// Using reduce
export const sumArr = (arr) => {
	// Code here
	return arr
		.reduce((acc, curr, i, newArr) => {		
			if (newArr[i+1] > newArr[i]) acc += newArr[i+1]
			return acc;
		}, 0)
}

console.log(sumArr(arr));