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
		<div class="error-wrapper flex flex-col items-center justify-center" role="presentation">
			<h1 class="font-medium text-[48px] leading-[64px] uppercase">error {{ error.statusCode }}</h1>
			<h2 class="text-[24px] leading-[40px]">{{ error.statusMessage }}</h2>
			<NuxtLink class="home flex items-center justify-center mt-4 h-13 w-40 rounded-[4px] text-white font-bold text-[14px] leading-[14px] cursor-pointer"
			          to="/">
				Go back home
			</NuxtLink>
		</div>
	</NuxtLayout>
</template>

<style scoped lang="scss">
	.error-wrapper {
		height: 50svh;
		
		h1 {
			color: #152649;
		}
		
		h2 {
			color: #7e7e7e;
		}
		
		.home {
			border: 1px solid #313892;
			color: #313892;
		}
	}
</style>