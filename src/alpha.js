// Description: Create a function that accepts two parameters the word to be computed and the map that would be the basis for the computation. Each letter has a corresponding numeric value, these numeric values would then be added together as the output. the function should be case agnostic.

// Input:
// Word : "KnoWlEdGe"
// k = 11
// n = 14
// o = 15
// w = 23
// l = 12
// e = 5
// d = 4
// g = 7
// 3 = 5
// total = 96

// alphabetMap : alphabetMap

// Output : 96

const alphabetMap = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8,
	i: 9,
	j: 10,
	k: 11,
	l: 12,
	m: 13,
	n: 14,
	o: 15,
	p: 16,
	q: 17,
	r: 18,
	s: 19,
	t: 20,
	u: 21,
	v: 22,
	w: 23,
	x: 24,
	y: 25,
	z: 26,
};

// Using for loop
export const wordNumValueFor = (target, alphabetMap) => {
	// code here
	const val = target.toLowerCase();
	let	sum = 0;

	for (var i = 0; i < val.length; i++) {
		if (alphabetMap[val[i]]) {
			sum += alphabetMap[val[i]];
		}
	}
	return sum;
};

console.log(wordNumValueFor("KnoWlEdGe", alphabetMap));

// Using map and reduce
export const wordNumValue = (target, alphabetMap) => {
	// code here
	let str = target.toLowerCase();
	let sum = [...str].map(c => alphabetMap[c] || 0).reduce((a, b) => a + b, 0);
	return sum;
};

console.log(wordNumValue("KnoWlEdGe", alphabetMap));
