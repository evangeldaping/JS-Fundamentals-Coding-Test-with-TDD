import { expect, it } from "@jest/globals";
import { add } from "../src/sanity/sample";

it("add two numbers", () => {
	const sum = add(1, 2);
	expect(sum).toBe(3);
});
