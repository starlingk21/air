<script setup lang="ts">

</script>

<template>
	<div class="socials-wrapper flex gap-3" role="presentation">
		<NuxtLink class="social-link w-12 h-12 flex justify-center items-center"
		          to="https://www.facebook.com/airBaltic/" target="_blank">
			<NuxtImg src="images/fb.png" alt="facebook-logo" width="10px" />
		</NuxtLink>
		
		<NuxtLink class="social-link w-12 h-12 flex justify-center items-center"
		          to="https://x.com/airBaltic" target="_blank">
			<NuxtImg src="images/twitter.png" alt="x-logo" width="21px" />
		</NuxtLink>
		
		<NuxtLink class="social-link w-12 h-12 flex justify-center items-center"
		          to="https://www.instagram.com/airbaltic/" target="_blank">
			<NuxtImg src="images/instagram.png" alt="instagram-logo" width="20px" />
		</NuxtLink>
		
		<NuxtLink class="social-link w-12 h-12 flex justify-center items-center"
		          to="https://www.youtube.com/channel/UCJqzd0gL7Ciluh5_3AVk2PQ" target="_blank">
			<NuxtImg src="images/youtube.png" alt="youtube-logo" width="21px" />
		</NuxtLink>
	</div>
</template>

<style scoped lang="scss">
	.social-link {
		background-color: #e9e9e9;
		border-radius: 100%;
	}
</style>