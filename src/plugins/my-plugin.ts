import type { FastifyPluginAsync } from "fastify";

const myPlugin: FastifyPluginAsync = async function myPlugin(app) {
	app.log.info("myPlugin is loaded");
	app.get("/", async (request, reply) => {
		return { hello: "world" };
	});
};

export default myPlugin;
