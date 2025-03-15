<script setup lang="ts">
	const props = defineProps({
		color: {
			type: String,
			required: true,
			default: null
		},
	})
</script>

<template>
	<div class="banner px-6 py-4 flex-1 text-center rounded-[6px] text-[14px] leading-[21px] font-normal"
	     role="presentation">
		<slot />
	</div>
</template>

<style scoped lang="scss">
	.banner {
		background-color: v-bind(color);
		color: #152649;
	}
</style>