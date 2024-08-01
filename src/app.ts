import { join } from "node:path";
import autoload from "@fastify/autoload";
import fastify from "fastify";

export const app = fastify({ logger: true });

app.register(autoload, {
	dir: join(__dirname, "plugins"),
	dirNameRoutePrefix: false,
});
