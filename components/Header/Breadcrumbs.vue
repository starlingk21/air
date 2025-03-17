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
		isMobile: {
			type: Boolean,
			required: true,
			default: false
		},
	})
	
	const route = useRoute()
	
	const currentRouteName = computed(() => route.name)
</script>

<template>
	<div v-show="currentRouteName !== 'index'"
	     v-if="!isMobile"
	     class="breadcrumbs-wrapper flex px-0 py-[15px]"
	     role="presentation">
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
	
	<div v-else-if="currentRouteName !== 'index'"
	     role="presentation"
	     class="pl-5 py-5">
		<NuxtLink to="/" class="flex">
			<NuxtImg class="chevron-left rotate-180 mr-3" src="icons/chevron-left.svg" alt="chevron-left" width="8px" />
			<span class="back-btn" role="button">Back to Contact us</span>
		</NuxtLink>
	</div>
</template>

<style scoped lang="scss">
	.breadcrumbs-wrapper {
		margin-left: -140px;
		margin-right: -140px;
		border-bottom: 1px solid #e2e4e9;
		border-top: 1px solid #e2e4e9;
		
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
	
	@include breakpoint(large) {
		.breadcrumbs-wrapper {
			margin: 0;
			
			.breadcrumb-link:first-child {
				margin-left: 0;
			}
		}
	}
	
	.back-btn {
		color: #313892;
	}
</style>