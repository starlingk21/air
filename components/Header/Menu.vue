<script setup lang="ts">
	interface MenuItem {
		url: string
		name: string
	}
	
	const props = defineProps({
		navItems: {
			type: Object as PropType<MenuItem>,
			required: true,
			default: () => {}
		},
	})
</script>

<template>
	<nav v-if="navItems" class="nav-wrapper" role="navigation">
		<ul class="nav-list flex text-[20px] leading-[24px]" role="list">
			<li v-for="navItem in navItems" class="nav-list-item mr-[34px]" role="listitem">
				<NuxtLink class="font-normal" :to="navItem.url">{{ navItem.name }}</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped lang="scss">
	.nav-list-item {
		color: #7e7e7e;
		
		&:last-child {
			margin: 0;
		}
	}
</style>