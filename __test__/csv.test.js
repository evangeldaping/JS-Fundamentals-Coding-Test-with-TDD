import { csvToObjParserSorted } from "../csv";

describe("Parses a CSV and convert to an array of objects", () => {
	it("returns an empty array if the csv is empty", () => {
		const csv = "";
		const result = csvToObjParserSorted(csv);

		expect(result).toEqual([]);
	});

	it("returns an empty array if the csv has only headers in it", () => {
		const csv = "name,age\n";
		const result = csvToObjParserSorted(csv);

		expect(result).toEqual([]);
	});

	it("returns an array with one object if the csv has a header and one item", () => {
		const csv = `name,age\njoshua,21`;

		const result = csvToObjParserSorted(csv);

		expect(result).toEqual([{ name: "joshua", age: "21" }]);
	});

	it("returns an array with two objects if the csv has a header and two items", () => {
		const csv = `name,age\njoshua,21\njosh,22`;

		const result = csvToObjParserSorted(csv);
		console.log("result", result);

		expect(result).toEqual([
			{ name: "josh", age: "22" },
			{ name: "joshua", age: "21" },
		]);
	});
});
