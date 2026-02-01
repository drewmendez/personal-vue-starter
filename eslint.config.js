import antfu from '@antfu/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default antfu(
	{
		stylistic: false,
		typescript: true,
		rules: {
			'no-console': 'off',
			'ts/consistent-type-definitions': 'off',
		},
		ignores: ['pnpm-lock.yaml', 'bun.lock', 'client/types/codegen/*.ts'],
	},
	eslintPluginPrettierRecommended,
)
