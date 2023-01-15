import solidVitePlugin from "vite-plugin-solid"

export const createVitePluginSolid = () =>
	solidVitePlugin({
		ssr: true,
		solid: {
			generate: "ssr",
		},
	})
