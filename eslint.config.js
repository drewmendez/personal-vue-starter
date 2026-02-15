import antfu from '@antfu/eslint-config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default antfu(
	{
		stylistic: false,
		typescript: true,
		rules: {
			'no-console': 'off',
			'ts/consistent-type-definitions': 'off',
		},
		ignores: ['pnpm-lock.yaml', '*.md'],
	},
	eslintConfigPrettier,
)
