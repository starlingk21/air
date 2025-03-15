<script setup lang="ts">

</script>

<template>
	<div class="request-page-wrapper flex mt-12" role="presentation">
		<RequestNavigation />
		
		<div class="request-details flex-1">
			<h1 class="text-[40px] font-light leading-[47px]">Request assistance from us</h1>
			
			<p class="text-[20px] font-light leading-[28px] my-10">Providing assistance to passengers with reduced mobility is part of our service at airBaltic.</p>
			
			<div>
				<h6 class="text-[16px] leading-[19px] font-medium mb-4">We can help you:</h6>
				
				<ul class="steps-list columns-2 ml-5 list-disc">
					<li class="step text-[16px] leading-[32px] font-normal">Get to the aircraft</li>
					<li class="step text-[16px] leading-[32px] font-normal">Board the aircraft</li>
					<li class="step text-[16px] leading-[32px] font-normal">Move around the aircraft cabin if required</li>
					<li class="step text-[16px] leading-[32px] font-normal">Disembark the aircraft</li>
					<li class="step text-[16px] leading-[32px] font-normal">Transfer between flights</li>
				</ul>
			</div>
			
			<div class="banner-wrapper flex gap-5 mt-6">
				<RequestBanner color="#e5f6ff">
					Personal mobility equipment and guide dogs are carried free of charge.
				</RequestBanner>
				
				<RequestBanner color="#ffffcc">
					Please note, we are unable to provide eating assistance and medical services.
				</RequestBanner>
			</div>
		</div>
		
	</div>
</template>

<style scoped lang="scss">
	h1, h6, p, li {
		color: #152649;
	}
	
	.step {
		
		&::marker {
			color: #cdda32;
		}
	}
</style>