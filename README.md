# Autoload + Vitest 

## The issue
By default, vite-node transform, which Vitest uses to do its magic, is lazy and doesn't run for the code in the node_modules folder. The problem arises when you want to test import/require packages with the TS extension imported from the node_modules folder like @fastify/autoload does. 
`node` itself will throw this error:

```shell
TypeError: Unknown file extension ".ts" for /autoload-vitest/src/plugins/my-plugin.ts
{ code: 'ERR_UNKNOWN_FILE_EXTENSION' }
```

## The solution
The way to fix this is to ensure the Node.js process that runs @fastify/autoload can handle TypeScript files.
There are two options to do this:
1. Pass `tsx` as an import/register option to Vitest (and therefore to vite-node and node itself) like this:
```shell
test": "NODE_OPTIONS='--import tsx' vitest run"
```

2. Ensure vite-node transformations run for the @fastify/autoload package by adding this to your vite.config.mts:
```ts
  test: {
		server: {
			deps: { inline: ["@fastify/autoload"] },
		},
	},
```