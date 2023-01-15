import { z } from "zod"

export const Mode = z.enum(["dev", "prod"])
export const Options = z.object({
	mode: Mode,
	port: z.number().default(3000),
	entries: z
		.object({
			server: z.string().default("src/entry-server.tsx"),
		})
		.default({}),
})
export type OptionsI = z.input<typeof Options>
export type Options = z.output<typeof Options>
