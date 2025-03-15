<script setup lang="ts">
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
</script>

<template>
	<div class="header flex justify-between" role="presentation">
		<HeaderLogo logo="images/logo.svg" alt="airbaltic-logo" />
		
		<div class="header-navigation-wrapper mt-6 flex flex-col items-end" role="presentation">
			<HeaderOptions :options="navigationOptions"/>
			<HeaderMenu :nav-items="navigation" />
		</div>
	</div>
</template>

<style scoped>

</style>