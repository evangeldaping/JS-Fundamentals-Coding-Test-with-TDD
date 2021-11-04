import { sumArrDiff } from "../src/bigArrSumDiff";

describe("Add all the elements of an array it if its bigger than the element before it and subtract if it is lesser", () => {
	it("returns 0 when there is only 1 element in the array", () => {
		const arr = [1];
		const result = sumArrDiff(arr);

		expect(result).toBe(0);
	});

	it("returns 2 when there is only 2 element in the array, and the 2nd element is 2 and the first is 1", () => {
		const arr = [1, 2]; // 0
		const result = sumArrDiff(arr);

		expect(result).toBe(2);
	});

	it("returns 16 when the array is [1, 2, 2, 3, 1, 4, 3, 5, 1, 2]", () => {
		const arr = [1, 2, 2, 3, 1, 4, 3, 5, 1, 2];
		const result = sumArrDiff(arr);

		expect(result).toBe(9);
	});

	it("returns -5 when the array have 6 1's.", () => {
		const arr = [1, 1, 1, 1, 1, 1]; // 0
		const result = sumArrDiff(arr);

		expect(result).toBe(-5);
	});
});
