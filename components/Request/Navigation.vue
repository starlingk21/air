<script setup lang="ts">
	interface RequestNavigationItem {
		url: string
		name: string
	}
	
	const options = ref([
		{ url: '/', name: 'Contact us' },
		{ url: '/', name: 'International offices and representatives'},
		{ url: '/',  name: 'Items left on board' },
		{ url: '/',  name: 'Compliment us' },
		{ url: '/',  name: 'Ask a question' },
		{ url: '/request',  name: 'Request assistance from us' },
		{ url: '/',  name: 'Other inquiries' },
		
	])
	
	const route = useRoute()
</script>

<template>
	<div class="request-nav w-81 mr-14 flex-1" role="navigation">
		<ul class="nav-list rounded-md" role="list">
			<li v-for="option in options"
			    :class="['item px-6 py-3', { active: route.path === option.url }]"
			    role="listitem">
				<NuxtLink class="nav-link font-medium" :to="option.url">
					{{ option.name }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
	.request-nav {
		max-width: 324px;
		
		.nav-list {
			background-color: #f9f9f9;
			
			.item {
				border-bottom: 1px solid #e2e4e9;
				font-size: 14px;
				line-height: 16px;
				
				&.active {
					border-left: 2px solid #acb90c;
				}
				
				&:last-child {
					border-bottom: none;
				}
				
				.nav-link {
					color: #152649;
					
					&.router-link-active {
						color: #acb90c;
					}
				}
			}
		}
	}
	
	@include breakpoint(large) {
		.request-nav {
			display: none;
		}
	}
</style>