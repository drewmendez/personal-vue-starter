import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		vue(),
		tailwindcss(),
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
			dirs: ['src/stores', 'src/composables'],
			dts: 'src/types/auto-generated/auto-imports.d.ts',
		}),
		Components({
			dts: 'src/types/auto-generated/components.d.ts',
		}),
	],
})
