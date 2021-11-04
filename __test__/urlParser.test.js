import { urlParser } from "../src/urlParser";

describe("Parsing URL to Objects", () => {
	it("parses url with parameters firstname, lastname, age", () => {
		const url = "http://localhost:1337/api?firstname=joshua&lastname=chu&age=21";
		const result = urlParser(url);

		expect(result).toEqual({ firstname: "joshua", lastname: "chu", age: "21" });
	});

	it("parses url with no parameters", () => {
		const url = "http://localhost:1337/api";
		const result = urlParser(url);

		expect(result).toEqual({});
	});

	it("parses url with a single parameter team", () => {
		const url = "http://localhost:1337/api?team=jsFundamentals";
		const result = urlParser(url);

		expect(result).toEqual({ team: "jsFundamentals" });
	});
});
