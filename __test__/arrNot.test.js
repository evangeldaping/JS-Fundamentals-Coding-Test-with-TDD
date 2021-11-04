import { arrNotFunc } from "../src/arrNot";

describe("Return an array that is unique to both arrays", () => {
	it("returns an empty array when both arrays are empty", () => {
		const arr1 = [];
		const arr2 = [];
		const result = arrNotFunc(arr1, arr2);

		expect(result).toEqual([]);
	});

	it("returns an empty array when both arrays are identical", () => {
		const arr1 = [1, 2, 3];
		const arr2 = [1, 2, 3];
		const result = arrNotFunc(arr1, arr2);

		expect(result).toEqual([]);
	});

	it("returns an array with 2 unique elements when both arrays are have 1 unique elements each", () => {
		const arr1 = [0, 1, 2, 3];
		const arr2 = [1, 2, 3, 4];
		const result = arrNotFunc(arr1, arr2);

		expect(result).toEqual([0, 4]);
	});

	it("returns an array with all unique elements when both arrays are have no identical elements", () => {
		const arr1 = [0, 1, 2, 3];
		const arr2 = [4, 5, 6, 7];
		const result = arrNotFunc(arr1, arr2);

		expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
	});

	it("returns an array with all unique elements when both arrays have both identical and unique elements", () => {
		const arr1 = [0, 1, 2, 3, 4, 5, 6];
		const arr2 = [4, 5, 6, 7];
		const result = arrNotFunc(arr1, arr2);

		expect(result).toEqual([0, 1, 2, 3, 7]);
	});
});
