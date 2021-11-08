import { wordNumValue } from "../src/alpha";

describe("Computes the value of a word in numbers", () => {
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
	it("attitude = 100", () => {
		const result = wordNumValue("Attitude", alphabetMap);
		expect(result).toBe(100);
	});

	it("knowledge = 96", () => {
		const result = wordNumValue("kNoWledGe", alphabetMap);
		expect(result).toBe(96);
	});

	it("joshua = 74", () => {
		const result = wordNumValue("JoShuA", alphabetMap);
		expect(result).toBe(74);
	});

	it(" '' = 0 ", () => {
		const result = wordNumValue("", alphabetMap);
		expect(result).toBe(0);
	});

	it(" '&8*1-=' = 0 ", () => {
		const result = wordNumValue("'&8*1-='", alphabetMap);
		expect(result).toBe(0);
	});

	// Write your own test using your name
	it("evangel = 66", () => {
		const result = wordNumValue("evANGel", alphabetMap);
		expect(result).toBe(66);
	})
});
