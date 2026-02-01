<script setup lang="ts">
import Counter from '../components/Counter.vue'
</script>

<template>
	<div class="h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
		<div class="container mx-auto h-full px-6 py-4">
			<!-- Compact Header -->
			<header class="mb-3 text-center">
				<h1 class="mb-1 text-3xl font-bold text-gray-900">Vue Starter Setup</h1>
				<p class="mx-auto max-w-3xl text-sm text-gray-600">
					A modern Vue 3 starter template with ESLint, Prettier, and essential libraries pre-configured
				</p>
			</header>

			<!-- Main Content - Horizontal Layout -->
			<main class="grid h-[calc(100vh-120px)] grid-cols-3 gap-4">
				<!-- Code Quality Section -->
				<section class="flex flex-col rounded-xl bg-white p-4 shadow-lg">
					<h2 class="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
						<span class="text-blue-600">⚙️</span>
						Code Quality Tools
					</h2>
					<div class="flex flex-1 flex-col gap-3">
						<div class="border-l-4 border-blue-500 pl-3">
							<h3 class="mb-1 text-base font-semibold text-gray-800">ESLint</h3>
							<p class="text-xs text-gray-600">
								Configured with
								<code class="rounded bg-gray-100 px-1.5 py-0.5 text-xs">@antfu/eslint-config</code>
								for consistent code style
							</p>
						</div>
						<div class="border-l-4 border-purple-500 pl-3">
							<h3 class="mb-1 text-base font-semibold text-gray-800">Prettier</h3>
							<p class="text-xs text-gray-600">
								Automatic code formatting with Tailwind CSS plugin for consistent class ordering
							</p>
						</div>
						<div class="mt-auto">
							<Counter />
						</div>
					</div>
				</section>

				<!-- Libraries Section -->
				<section class="flex flex-col rounded-xl bg-white p-4 shadow-lg">
					<h2 class="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
						<span class="text-green-600">📦</span>
						Common Vue Libraries
					</h2>
					<div class="grid flex-1 grid-cols-2 gap-2">
						<div
							class="rounded-lg border border-gray-200 p-2 transition-all hover:border-blue-400 hover:shadow-md"
						>
							<h3 class="mb-1 text-xs font-semibold text-gray-800">Vue Router</h3>
							<p class="text-xs text-gray-600">Official router</p>
						</div>
						<div
							class="rounded-lg border border-gray-200 p-2 transition-all hover:border-blue-400 hover:shadow-md"
						>
							<h3 class="mb-1 text-xs font-semibold text-gray-800">Pinia</h3>
							<p class="text-xs text-gray-600">State management</p>
						</div>
						<div
							class="rounded-lg border border-gray-200 p-2 transition-all hover:border-blue-400 hover:shadow-md"
						>
							<h3 class="mb-1 text-xs font-semibold text-gray-800">VueUse</h3>
							<p class="text-xs text-gray-600">Composition utilities</p>
						</div>
						<div
							class="rounded-lg border border-gray-200 p-2 transition-all hover:border-blue-400 hover:shadow-md"
						>
							<h3 class="mb-1 text-xs font-semibold text-gray-800">Axios</h3>
							<p class="text-xs text-gray-600">HTTP client</p>
						</div>
						<div
							class="rounded-lg border border-gray-200 p-2 transition-all hover:border-blue-400 hover:shadow-md"
						>
							<h3 class="mb-1 text-xs font-semibold text-gray-800">Tailwind CSS</h3>
							<p class="text-xs text-gray-600">CSS framework</p>
						</div>
						<div
							class="rounded-lg border border-gray-200 p-2 transition-all hover:border-blue-400 hover:shadow-md"
						>
							<h3 class="mb-1 text-xs font-semibold text-gray-800">TypeScript</h3>
							<p class="text-xs text-gray-600">Type-safe JS</p>
						</div>
					</div>
				</section>

				<!-- Tech Stack Section -->
				<section
					class="flex flex-col rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-lg"
				>
					<h2 class="mb-3 text-lg font-semibold">Tech Stack</h2>
					<div class="flex flex-1 flex-col gap-4">
						<div>
							<h3 class="mb-2 text-sm font-semibold">Core</h3>
							<ul class="space-y-1 text-xs text-blue-100">
								<li>• Vue 3 with Composition API</li>
								<li>• TypeScript</li>
								<li>• Vite</li>
							</ul>
						</div>
						<div>
							<h3 class="mb-2 text-sm font-semibold">Development</h3>
							<ul class="space-y-1 text-xs text-blue-100">
								<li>• ESLint + Prettier</li>
								<li>• Vue TSC</li>
								<li>• Hot Module Replacement</li>
							</ul>
						</div>
						<div class="mt-auto text-center text-xs text-blue-100">
							<p>Ready to build amazing Vue applications! 🚀</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	</div>
</template>
