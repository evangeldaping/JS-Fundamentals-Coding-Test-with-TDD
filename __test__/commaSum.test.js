import { commaSum } from "../src/commaSum";

describe("Sums all the numbers in a given string of numbers separated by comma", () => {
	it("57.3", () => {
		const str = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
		const result = commaSum(str);

		expect(result).toBe(57.3);
	});

	it("0", () => {
		const str = "0";
		const result = commaSum(str);

		expect(result).toBe(0);
	});

	it("69", () => {
		const str = "34.5, 34.5";
		const result = commaSum(str);

		expect(result).toBe(69);
	});
});
