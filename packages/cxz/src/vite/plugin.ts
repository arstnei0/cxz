import { mergeConfig, Plugin, UserConfig } from "vite"
import { Options, OptionsI } from "./options"

export const createCxzVitePlugin = (optionsI: OptionsI): Plugin[] => {
	const options = Options.parse(optionsI)

	const env = {
		PORT: options.port,
		MODE: options.mode,
		DEV: options.mode === "dev",
		PROD: options.mode === "prod",
	}

	const envReplacement = Object.entries(env).reduce(
		(prev, curr) => ({
			...prev,
			[`import.meta.env.${curr[0]}`]: JSON.stringify(curr[1]),
		}),
		{}
	)

	return [
		{
			name: "cxz-config",
			config(config, env) {
				return mergeConfig(config, {
					define: {
						...envReplacement,
					},
					appType: "custom",
				} as UserConfig)
			},
		},
		{
			name: "cxz-server",
			configureServer(/* vite server */ vs) {
                vs.middlewares.use((req, res, next) => {

                })
            },
		},
	]
}
