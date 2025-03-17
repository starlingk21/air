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
		},
		width: {
			type: String,
			required: true,
			default: null
		},
		isMobile: {
			type: Boolean,
			required: true,
			default: false
		},
	})
</script>

<template>
	<NuxtLink v-if="logo" to="/">
		<div :class="['logo-wrapper flex items-center justify-center', { mobile: isMobile }]"
		     role="presentation">
			<NuxtImg class="logo select-none" :src="logo" :alt="alt" :width="width" />
		</div>
	</NuxtLink>
</template>

<style scoped>
	.logo-wrapper {
		width: 180px;
		height: 110px;
		background-color: #cdda32;
		
		&.mobile {
			width: 92px;
			height: 56px;
		}
	}
</style>