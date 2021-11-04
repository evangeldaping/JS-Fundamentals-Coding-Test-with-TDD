import { searchFunc } from "../search";

describe("Searching through an Array and return an Array", () => {
	const searchArr = ["joShUa", "aJI", "EvaNgel"];
	it("returns 2 elements when the query is j", () => {
		const result = searchFunc(searchArr, "j");
		expect(result).toEqual(["joShUa", "aJI"]);
	});

	it("returns 0 elements when the query is q", () => {
		const result = searchFunc(searchArr, "q");
		expect(result).toEqual([]);
	});

	it("returns 3 elements when the query is a", () => {
		const result = searchFunc(searchArr, "a");
		expect(result).toEqual(["joShUa", "aJI", "EvaNgel"]);
	});
});
