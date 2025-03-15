<script setup lang="ts">

</script>

<template>
	<div class="newsletter-wrapper w-64 flex flex-col">
		<h3 class="uppercase font-medium text-[14px] leading-[32px] mb-2">Subscribe to newsletter</h3>
		
		<input class="bg-white p-3 font-normal text-[16px] leading-[20px] outline-none mb-10 flex-1"
		       type="text"
		       id="subscribe"
		       placeholder="Enter your e-mail" />
		
		<div class="redirect-details relative">
			<NuxtImg class="redirect-icon" src="icons/redirect.svg" width="16px" alt="redirect-icon" />
			<span class="font-normal text-[12px] leading-4">This indicates a link to an external site that may not follow the same accessibility policies.</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
	input {
		border: 1px solid #ced2d7;
	}
	
	.redirect-details {
		color: #999999;
		
		.redirect-icon {
			position: absolute;
			top: 8px;
			left: -24px;
		}
	}
</style>