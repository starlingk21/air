<script setup lang="ts">
	import { onMounted, onUnmounted, ref } from 'vue'
	
	const navigationOptions = ref([
		{
			icon: 'icons/world.svg',
			alt: 'region-icon',
			url: '/',
			name: 'Latvia - Latvian'
		},
		{
			icon: 'icons/profile.svg',
			alt: 'profile-icon',
			url: '/',
			name: 'Profile'
		},
		{
			icon: 'icons/search.svg',
			alt: 'search-icon',
			url: '/',
			name: 'Search'
		},
	])
	
	const navigation = ref([
		{ url: '/', name: 'Plan and book' },
		{ url: '/', name: 'Prepare for your trip'},
		{ url: '/',  name: 'Information' },
		{ url: '/',  name: 'PINS' },
		{ url: '/',  name: 'Special offers' },
	])
	
	const breadcrumbs = ref([
		{ url: '/', name: 'Home' },
		{ url: '/', name: 'Contact us'},
		{ url: '/',  name: 'Submit a claim' },
		{ url: '/',  name: 'Damaged baggage' },
	])
	
	const isMobile = ref<boolean>(false)
	const windowWidth = ref<number>(null)
	
	onMounted(() => {
		// this statement is used because SSR returned undefined for window object
		if (typeof window !== "undefined") {
			windowWidth.value = window.innerWidth
			
			window.addEventListener("resize", captureScreen)
			
			captureScreen()
		}
	})
	
	onUnmounted(() => window.removeEventListener("resize", captureScreen))
	
	const captureScreen = () => {
		windowWidth.value = window.innerWidth
		
		isMobile.value = windowWidth.value <= 991
	}
	
	const isMobileBreadcrumbs = computed(() => isMobile.value)
</script>

<template>
	<div v-if="!isMobile" class="header flex justify-between items-center" role="presentation">
		<HeaderLogo logo="images/logo.svg"
		            alt="airbaltic-logo"
		            width="120px"
		            :is-mobile="isMobile" />
		
		<div class="header-navigation-wrapper mt-4 flex flex-col items-end" role="presentation">
			<HeaderOptions :options="navigationOptions"/>
			<HeaderMenu :nav-items="navigation" />
		</div>
	</div>
	
	<div v-else class="mobile-header flex justify-between">
		<div class="hamburger-wrapper p-5 flex">
			<NuxtImg class="logo select-none" src="icons/hamburger.svg" alt="hamburger-icon" width="20px" />
		</div>
		
		<HeaderLogo logo="images/logo.svg" alt="airbaltic-logo" width="62px" :is-mobile="isMobile" />
	</div>
	
	<HeaderBreadcrumbs :breadcrumbs="breadcrumbs" :is-mobile="isMobileBreadcrumbs" />
</template>

<style scoped lang="scss">
	.mobile-header {
		border-bottom: 1px solid #ced2d7;
	}
</style>