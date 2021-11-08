// Description: Create a function that accepts an array and add each all elements that are greater than the previous elements before it and subtracts it if it is lesser.

// Input: [1, 2, 2, 3, 1, 4, 3, 5]

// Output : 8

const arr = [1, 2, 2, 3, 1, 4, 3, 5]; // 8

// Using for loop
export const sumArrDiffFor = (arr) => {
	// Code here
	let sumDiff = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i+1] > arr[i]) {
			sumDiff += arr[i+1]
		}
		else if (arr[i+1] <= arr[i]) {
			sumDiff -= arr[i+1]
		}
	}
	return sumDiff;
};

console.log(sumArrDiffFor(arr));

// first loop
// variable   			value
// i          			0
// arr[i+1]   			[0+1]=>[1]=>2
// arr[i]     			[0]=>1
// arr[i+1] > arr[i]    2>1 => true
// sumDiff += arr[i+1]  0+2
// arr[i+1] <= arr[i]   2 <= 1 => false
// sumDiff -= arr[i+1]  
// sumDiff				2

// second loop
// variable   			value
// i          			1
// arr[i+1]   			[1+1]=>[2]=>2
// arr[i]     			[1]=>2
// arr[i+1] > arr[i]    2>2 => false
// sumDiff += arr[i+1]
// arr[i+1] <= arr[i]   2 <= 2 => true
// sumDiff -= arr[i+1]  2-2
// sumDiff				0

// third loop
// variable   			value
// i          			2
// arr[i+1]   			[2+1]=>[3]=>3
// arr[i]     			[2]=>2
// arr[i+1] > arr[i]    3>2 => true
// sumDiff += arr[i+1]  0+3
// arr[i+1] <= arr[i]   3 <= 2 => false
// sumDiff -= arr[i+1]  
// sumDiff				3

// fourth loop
// variable   			value
// i          			3
// arr[i+1]   			[3+1]=>[4]=>1
// arr[i]     			[3]=>3
// arr[i+1] > arr[i]    1>3 => false
// sumDiff += arr[i+1]
// arr[i+1] <= arr[i]   1 <= 3 => true
// sumDiff -= arr[i+1]  3-1
// sumDiff				2

// fifth loop
// variable   			value
// i          			4
// arr[i+1]   			[4+1]=>[5]=>4
// arr[i]     			[4]=>1
// arr[i+1] > arr[i]    4>1 => true
// sumDiff += arr[i+1]  2+4
// arr[i+1] <= arr[i]   4 <= 1 => false
// sumDiff -= arr[i+1]  
// sumDiff				6

// sixth loop
// variable   			value
// i          			5
// arr[i+1]   			[5+1]=>[6]=>3
// arr[i]     			[5]=>4
// arr[i+1] > arr[i]    3>4 => false
// sumDiff += arr[i+1]
// arr[i+1] <= arr[i]   3 <= 4 => true
// sumDiff -= arr[i+1]  6-3
// sumDiff				3

// seventh loop
// variable   			value
// i          			6
// arr[i+1]   			[6+1]=>[7]=>5
// arr[i]     			[6]=>3
// arr[i+1] > arr[i]    5>3 => true
// sumDiff += arr[i+1]  3+5
// arr[i+1] <= arr[i]   5 <= 3 => false
// sumDiff -= arr[i+1]  
// sumDiff				8

// Using reduce
export const sumArrDiff = (arr) => {
	// Code here
	return arr
		.reduce((acc, curr, i, newArr) => {
			if (newArr[i+1] > newArr[i]) acc += newArr[i+1]
			if (newArr[i+1] <= newArr[i]) acc -= newArr[i+1]
			return acc;
		}, 0)
}

console.log(sumArrDiff(arr));