import { beforeAll, expect, test } from "vitest";
import { app } from "../src/app";

beforeAll(async () => {
	await app.ready();
});

test("get", async () => {
	const response = await app.inject({
		method: "GET",
		url: "/",
	});
	const payload = JSON.parse(response.payload);
	expect(payload).toEqual({ hello: "world" });
});
