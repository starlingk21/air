<script setup lang="ts">

</script>

<template>
	<div class="partners-wrapper flex" role="presentation">
		<div class="partners-one desktop pr-10" role="presentation">
			<NuxtImg src="images/geotrust.png" alt="geotrust-logo" width="115px" />
		</div>
		
		<div class="partners-two flex items-center gap-2 px-10" role="presentation">
			<NuxtImg src="images/mastercard.png" alt="geotrust-logo" width="42px" />
			<NuxtImg src="images/visa.png" alt="geotrust-logo" width="47px" />
			<NuxtImg src="images/amexpress.png" alt="geotrust-logo" width="30px" />
			<NuxtImg class="pr-5" src="images/paypal.png" alt="geotrust-logo" width="67px" />
			<span class="font-normal text-[12px] leading-[36px]">more</span>
		</div>
		
		<div class="partners-three flex items-center gap-5 px-10" role="presentation">
			<NuxtImg src="images/capa.png" alt="geotrust-logo" width="85px" />
			<NuxtImg src="images/punctual.png" alt="geotrust-logo" width="107px" />
		</div>
		
		<div class="partners-one mobile pr-10" role="presentation">
			<NuxtImg src="images/geotrust.png" alt="geotrust-logo" width="115px" />
		</div>
	</div>
</template>

<style scoped lang="scss">
	.partners-one,
	.partners-two {
		border-right: 1px solid #ced2d7;
	}
	
	.partners-one.mobile {
		display: none;
	}
	
	@include breakpoint(medium) {
		.partners-wrapper {
			flex-direction: column;
			flex: 1;
			
			.partners-one {
				&.desktop {
					display: none;
				}
				
				&.mobile {
					display: block;
				}
			}
			
			.partners-two {
				justify-content: space-between;
			}
			
			.partners-one,
			.partners-two,
			.partners-three {
				border-right: none;
				padding: 16px 0;
				border-top: 1px solid #ced2d7;
			}
		}
	}
</style>