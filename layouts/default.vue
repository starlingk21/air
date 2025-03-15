<script setup lang="ts">

</script>

<template>
	<div class="app-layout" role="presentation">
		<Header />
		
		<div class="content">
			<slot />
		</div>
	</div>
	
	<Footer />
</template>

<style scoped lang="scss">
	.app-layout {
		margin: 0 140px;
	}
</style>