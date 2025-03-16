<script setup lang="ts">
	import type { NuxtError } from '#app'
	
	const props = defineProps({
		error: {
			type: Object as () => NuxtError,
			required: false,
			default: null
		}
	})
</script>

<template>
	<NuxtLayout>
		<div class="error-wrapper" role="presentation">
			<h1 class="font-medium text-[48px] leading-[64px] uppercase">error {{ error.statusCode }}</h1>
			<h2 class="text-[24px] leading-[40px]">{{ error.statusMessage }}</h2>
<!--			<NuxtLink to="/">Go back home</NuxtLink>-->
		</div>
	</NuxtLayout>
</template>

<style scoped lang="scss">
	.error-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 50svh;
		
		h1 {
			color: #152649;
		}
		
		h2 {
			color: #7e7e7e;
		}
	}
</style>