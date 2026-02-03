<script setup lang="ts">
const counter = useCounterStore()
</script>

<template>
	<div class="flex flex-col items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-md">
		<h3 class="text-sm font-semibold text-gray-800">Counter Demo</h3>
		<div class="text-3xl font-bold text-blue-600">{{ counter.count }}</div>
		<div class="flex gap-2">
			<button
				class="rounded bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600"
				@click="counter.decrement"
			>
				−
			</button>
			<button
				class="rounded bg-gray-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-600"
				@click="counter.reset"
			>
				Reset
			</button>
			<button
				class="rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
				@click="counter.increment"
			>
				+
			</button>
		</div>
	</div>
</template>
