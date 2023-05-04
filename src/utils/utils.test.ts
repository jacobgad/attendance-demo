import { describe, expect, it } from "vitest";
import { getInitials } from "./utils";

describe("getInitials", () => {
	it("should return an empty string, if an empty sting is provided", () => {
		expect(getInitials("")).toBe("");
	});

	it("should return the correct initials", () => {
		expect(getInitials("jonathan davies")).toBe("jd");
	});

	it("should return one initial if only given the first name", () => {
		expect(getInitials("jonathan")).toBe("j");
	});
});
