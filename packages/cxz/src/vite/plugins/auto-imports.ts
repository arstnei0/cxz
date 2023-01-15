import VitePluginAutoImport from "unplugin-auto-import/vite"

export const createVitePluginAutoImport = () =>
	VitePluginAutoImport({
		imports: [
			"solid-js",
			{
				cxz: ["definePage", "defineEndpoint", "Handler"],
				zod: [["*", "z"]],
			},
		],
		dts: ".cxz/auto-imports.d.ts",
	})
