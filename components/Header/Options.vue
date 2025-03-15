<script setup lang="ts">
	interface Option {
		icon: string
		alt: string
		url: string
		name: string
	}
	
	const props = defineProps({
		options: {
			type: Object as PropType<Option>,
			required: true,
			default: () => {}
		},
	})
</script>

<template>
	<div v-if="options" class="options-wrapper mb-6" role="presentation">
		<ul class="options-list flex" role="list">
			<li v-for="option in options"
			    class="item flex items-center mr-6 cursor-pointer text-[12px] leading-[14px] font-medium"
			    role="listitem">
				<NuxtImg :src="option.icon" :alt="option.alt" width="20px" class="mr-2 select-none" />
				
				<NuxtLink :to="option.url">
					{{ option.name }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
	li {
		color: #7e7e7e;
		
		&.item:last-child {
			margin: 0;
		}
	}
</style>