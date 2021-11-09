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
	const letter = target.toLowerCase();
	let	sum = 0;

	// console.log(alphabetMap['k']);

	for (var i = 0; i < letter.length; i++) {
		const currentLetterVal = alphabetMap[letter[i]];
		if (currentLetterVal) {
			const previous = sum
			sum += currentLetterVal;
			const current = sum;
			console.log(`previous: ${previous}` + " + " + `current: ${currentLetterVal}` + ' = ' + current);
		}
	}
	return sum;
};

console.log(wordNumValueFor("KnoWlEdGe", alphabetMap));

// first loop
// variable                          value
// letter                            k
// sum                               0
// i                                 0
// alphabetMap[val[i]]               [k[0]] => 11
// sum += alphabetMap[letter[i]]     0 += 11
// return sum                        11

// second loop
// variable                          value
// letter                            n
// sum                               11
// i                                 1
// alphabetMap[val[i]]               [n[1]] => 14
// sum += alphabetMap[letter[i]]     11 += 14
// return sum                        25

// third loop
// variable                          value
// letter                            o
// sum                               25
// i                                 2
// alphabetMap[val[i]]               [o[2]] => 15
// sum += alphabetMap[letter[i]]     25 += 15
// return sum                        40

// fourth loop
// variable                          value
// letter                            w
// sum                               40
// i                                 3
// alphabetMap[val[i]]               [w[3]] => 23
// sum += alphabetMap[letter[i]]     40 += 23
// return sum                        63

// fifth loop
// variable                          value
// letter                            l
// sum                               63
// i                                 4
// alphabetMap[val[i]]               [l[4]] => 12
// sum += alphabetMap[letter[i]]     63 += 12
// return sum                        75

// sixth loop
// variable                          value
// letter                            e
// sum                               75
// i                                 5
// alphabetMap[val[i]]               [e[5]] => 5
// sum += alphabetMap[letter[i]]     75 += 5
// return sum                        80

// seventh loop
// variable                          value
// letter                            d
// sum                               80
// i                                 6
// alphabetMap[val[i]]               [d[6]] => 4
// sum += alphabetMap[letter[i]]     80 += 4
// return sum                        84

// eight loop
// variable                          value
// letter                            g
// sum                               84
// i                                 7
// alphabetMap[val[i]]               [g[7]] => 7
// sum += alphabetMap[letter[i]]     84 += 7
// return sum                        91

// ninth loop
// variable                          value
// letter                            e
// sum                               91
// i                                 8
// alphabetMap[val[i]]               [e[8]] => 5
// sum += alphabetMap[letter[i]]     91 += 5
// return sum                        96

// Using reduce
export const wordNumValue = (target, alphabetMap) => {
	// code here
	let str = target.toLowerCase().split('');
	return str
		.reduce((acc, curr, i) => {
			const currentLetterVal = alphabetMap[str[i]];
			if (currentLetterVal) {
				acc += currentLetterVal;
			}
			return acc;
		}, 0);
};

console.log(wordNumValue("KnoWlEdGe", alphabetMap));