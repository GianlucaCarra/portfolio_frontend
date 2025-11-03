import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

export default [
	...compat.extends("next/core-web-vitals", "next/typescript"),

	// Config principal do projeto
	{
		files: ["**/*.{ts,tsx,js,jsx}"],

		// Pastas/arquivos a ignorar
		ignores: [
			"node_modules/**",
			".next/**",
			"out/**",
			"build/**",
			"next-env.d.ts",
			"dist/**",
			"*.config.js",
			"*.config.cjs",
			"*.config.mjs",
		],

		rules: {
			// Regras do TypeScript para variáveis não usadas
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],

			// Caso queira adicionar outros rules específicos do projeto
			"no-console": "warn",
			"react/react-in-jsx-scope": "off",
		},
	},
];
