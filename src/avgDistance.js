const arrObj = [
	{
		name: "Joshua",
		initialLoc: "200",
		finalLoc: 400,
	},
	{
		name: "Aji",
		initialLoc: 400,
		finalLoc: 500,
	},
	{
		name: "Evangel",
		initialLoc: "150",
		finalLoc: "300",
	},
];

// Output 150

// const josh = finalLoc - initialLoc = 400 - 200 = 200
// const aji = finalLoc - initialLoc  = 400 - 500 = 100
// const evangel = finalLoc - initialLoc = 300 - 150 = 150
// const total = josh + aji + evangel = 200 + 100 + 150
// const aver = total / 3 = 450 / 3 = 150

const avgDistance = (arrObj) => {
	// Code here
	return arrObj
		// [ 200, 100, 150 ]
		.map(el => Number(el.finalLoc) - Number(el.initialLoc))
		
		// 450
		.reduce((acc, curr) => {
			const previous = acc
			acc += curr;
			const current = acc;
			console.log(`previous: ${previous}` + " + " + `current: ${curr}` + ' = ' + current);
			return current
		},0)
		
		// divided by the length of the array which is 3
		// 450 / 3 = 150
		/ arrObj.length
};

console.log(avgDistance(arrObj));
