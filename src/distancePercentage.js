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

// Output: 62.5%

// const joshInitialLoc = initialLoc = 200
// const ajiInitialLoc = initialLoc  = 400
// const evangelInitialLoc = initialLoc = 150
// const initialLocTotal = joshInitialLoc + ajiInitialLoc + evangelInitialLoc = 200 + 400 + 150 = 750

// const joshFinalLoc = finalLoc = 400
// const ajiFinalLoc = finalLoc  = 500
// const evangelFinalLoc = finalLoc = 300
// const finalLocTotal = joshFinalLoc + ajiFinalLoc + evangelFinalLoc = 200 + 500 + 300 = 1200

// const totalPercentage = (initialLocTotal / finalLocTotal)*100 = (750/1200)*100 = 62.5%

const distancePercentage = (arrObj) => {
	// Code here
	const [initialTotal, finalTotal] = arrObj.reduce(
		(acc, curr) => {
			const initial = Number(curr.initialLoc);
			const final = Number(curr.finalLoc);

			return [acc[0] + initial, acc[1] + final]
		}, [0, 0])
	const percentage = (initialTotal / finalTotal) * 100;
	return `${percentage}%`;
};

console.log(distancePercentage(arrObj));
