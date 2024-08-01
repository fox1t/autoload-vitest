import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["./test/**/*.{ts,mts,cts,tsx}"],
		server: {
			// by default vite-node is lazy for the dependency and doesn't run its "magic"
			// we need to explicitly tell it to run the magic for @fastify/autoload
			// deps: { inline: ["@fastify/autoload"] },
		},
	},
});
