import { expect } from "@jest/globals";
import { diff } from "../src/sanity/another";

it("difference between 2", () => {
	const differ = diff(3, 2);
	expect(differ).toBe(1);
});
