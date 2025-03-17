<script setup lang="ts">

</script>

<template>
	<div class="information mobile py-5 flex items-center justify-between" role="presentation">
		<div class="docs flex gap-13">
			<div class="copyrights mobile font-normal text-[13px] leading-[16px]">
				© 2017 airBaltic
			</div>
			
			<NuxtLink class="link font-normal text-[13px] leading-[36px]" to="/" target="_blank">Legal information</NuxtLink>
			<NuxtLink class="link font-normal text-[13px] leading-[36px]" to="/" target="_blank">Site index</NuxtLink>
			<NuxtLink class="link font-normal text-[13px] leading-[36px]" to="/" target="_blank">Technical requirements</NuxtLink>
		</div>
		
		<div class="copyrights desktop font-normal text-[13px] leading-[16px]">
			© 2017 airBaltic
		</div>
	</div>
</template>

<style scoped lang="scss">
	.copyrights.mobile {
		display: none;
	}
	
	@include breakpoint(medium) {
		.information.mobile {
			padding-top: 0;
		}
		
		.docs {
			flex-direction: column;
			gap: 0;
		}
		
		.link {
			font-weight: 400;
			font-size: 13px;
			line-height: 36px;
		}
		
		.copyrights {
			
			&.desktop {
				display: none;
			}
			
			&.mobile {
				display: flex;
				font-weight: 400;
				font-size: 13px;
				line-height: 16px;
				color: #999999;
				margin-bottom: 8px;
			}
		}
	}
</style>