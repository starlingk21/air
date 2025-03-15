<script setup lang="ts">
	interface Breadcrumb {
		url: string
		name: string
	}
	
	const props = defineProps({
		breadcrumbs: {
			type: Object as PropType<Breadcrumb>,
			required: true,
			default: () => {}
		},
	})
</script>

<template>
	<div class="breadcrumbs-wrapper flex px-0 py-[15px]" role="presentation">
		<template v-for="(breadcrumb, index) in breadcrumbs">
			<NuxtLink :to="breadcrumb.url"
			          class="breadcrumb-link text-[13px] leading-[15px] mr-4">
				{{ breadcrumb.name }}
			</NuxtLink>
			<NuxtImg v-if="index !== Object.keys(breadcrumbs).length - 1"
			         class="chevron-icon mr-4"
			         src="icons/chevron-right.svg"
			         alt="chevron-right"
			         width="8px" />
		</template>
	</div>
</template>

<style scoped lang="scss">
	.breadcrumbs-wrapper {
		margin-left: -140px;
		margin-right: -140px;
		border-top: 1px solid #e2e4e9;
		border-bottom: 1px solid #e2e4e9;
		
		.breadcrumb-link {
			color: #999999;
			border-bottom: 1px solid #cdda32;
			
			&:first-child {
				margin-left: 140px;
			}
			
			&:last-child {
				border-bottom: none;
			}
		}
	}
</style>