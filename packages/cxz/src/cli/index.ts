import * as process from "node:process"
import sade from "sade"
import * as vite from "vite"
import { createCxzVitePlugin } from "../vite/plugin"

export default () => {
	const p = sade("cxz")

	p.command("dev", "Start the dev server", {
		default: true,
	})
		.option("-p, --port", "The port of the dev server")
		.action(async (options) => {
			const viteSerer = await vite.createServer({
				plugins: [
					createCxzVitePlugin({
						mode: "dev",
						...(options.port && {
							port: options.port as number,
						}),
					}),
				],
			})

			viteSerer.listen()
		})

	p.command("build", "Build the application").action(() => {
		vite.build({
			plugins: [createCxzVitePlugin({ mode: "prod" })],
		})
	})

	p.parse(process.argv)
}
