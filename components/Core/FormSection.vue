<script setup lang="ts">
	const props = defineProps({
		color: {
			type: String,
			required: true,
			default: null
		},
	})
	
	defineEmits(['submit'])
</script>

<template>
	<form class="form mt-8" @submit.prevent="$emit('submit')">
		<slot name="form" />
		
		<div v-if="$slots.actions" class="actions-wrapper" role="presentation">
			<slot name="actions" />
		</div>
	</form>
</template>

<style scoped lang="scss">
	.form {
		background-color: v-bind(color);
	}
</style>