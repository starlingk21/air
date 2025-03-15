<script setup lang="ts">
	const props = defineProps({
		logo: {
			type: String,
			required: true,
			default: null
		},
		
		alt: {
			type: String,
			required: true,
			default: null
		}
	})
</script>

<template>
	<NuxtLink v-if="logo" to="/">
		<div class="logo-wrapper flex items-center justify-center w-[180px] h-[110px]" role="presentation">
			<NuxtImg class="logo select-none" :src="logo" :alt="alt" width="120px" />
		</div>
	</NuxtLink>
</template>

<style scoped>
	.logo-wrapper {
		background-color: #cdda32;
	}
</style>