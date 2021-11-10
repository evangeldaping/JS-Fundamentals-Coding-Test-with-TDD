// const obj = [1, 2, 3];

// console.log([1, ...arr, 2, ..."STRUBG"]);

const obj = [
	{
		first: "joshua",
		last: "chu",
		hobby: {
			hobby1: "run",
			hobby2: "run1",
			hobby3: "run2",
		},
	},

	{
		first: "aji",
		last: "soriano",
		hobby: {
			hobby1: "run",
			hobby2: "run1",
			hobby3: "run2",
		},
	},
];

// Get the target obj
// Update target Obj

// Return updated object to the original array

// check if the object in the current iteration has the targetFirstName
// if true, instead of returning the current object, return updatedTargetObj

const func = (obj, targetFirstName, targetProp, updatedValue) => {
	// const targetObj = obj.filter((e) => e.first === targetFirstName)[0];

	const targetObj = obj.find((e) => e.first === targetFirstName);
	const updatedTargetObj = { ...targetObj, [targetProp]: updatedValue };
	const newObj = obj.map((e) => {
		if (e.first === targetFirstName) {
			return updatedTargetObj;
		}

		return e;
	});

	return newObj;
};

console.log(func(obj, "aji", "first", "AJIIII"));
console.log(obj);

// console.log({ ...obj, key1: { ...obj.key1, first: "AJIIIIII" } });

// console.log({ ...obj, nn: "josh", first: "aji" });

// console.log({ ...obj, last: "CHU" });

// console.log({ ...obj, hobby: { ...obj.hobby, hobby2: "eating" } });

// const lastProp = "last";

// // console.log(obj.first);
// console.log(obj["first name"]);

// console.log(obj[lastProp]);
