// Description: Create a function that accepts two parameters the word to be computed and the map that would be the basis for the computation. Each letter has a corresponding numeric value, these numeric values would then be added together as the output. the function should be case agnostic.

// Input:
// Word : "KnoWlEdGe"
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

export const wordNumValue = (target, alphabetMap) => {
	// code here
	return 0;
};

console.log(wordNumValue("KnoWlEdGe", alphabetMap));
