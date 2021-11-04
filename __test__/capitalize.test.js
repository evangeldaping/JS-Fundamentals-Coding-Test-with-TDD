import { capitalizeFunc } from "../src/capitalize";

describe("Capitalizes the first letter of each word in a given string of words", () => {
	it("I Am Joshua", () => {
		const str = "i am joshua";
		const result = capitalizeFunc(str);

		expect(result).toBe("I Am Joshua");
	});

	it("", () => {
		const str = "";
		const result = capitalizeFunc(str);

		expect(result).toBe("");
	});

	it("!@#$%^&*)", () => {
		const str = "!@#$%^&*)";
		const result = capitalizeFunc(str);

		expect(result).toBe("!@#$%^&*)");
	});

	it("Hello There, I Am Joshua Chu And I Need You To Capitalize Each Word's First Letter In Order To Become The Best Programmer In The World.", () => {
		const str =
			"hello there, i am joshua chu and i need you to capitalize each word's first letter in order to become the best programmer in the world.";
		const result = capitalizeFunc(str);

		expect(result).toBe(
			"Hello There, I Am Joshua Chu And I Need You To Capitalize Each Word's First Letter In Order To Become The Best Programmer In The World."
		);
	});
});
