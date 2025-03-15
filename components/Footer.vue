<script setup lang="ts">

</script>

<template>
	<div class="footer mt-16" role="presentation">
		<div class="support-section py-9 flex justify-between" role="presentation">
			<FooterTabs />
			<FooterNewsletter />
		</div>
		
		<div class="partners-and-social pb-8 flex items-center justify-between" role="presentation">
			<FooterPartners />
			<FooterSocial />
		</div>
		
		<div class="information py-5 flex items-center justify-between" role="presentation">
			<div class="docs flex gap-13">
				<NuxtLink class="font-normal text-[13px] leading-[36px]" to="/" target="_blank">Legal information</NuxtLink>
				<NuxtLink class="font-normal text-[13px] leading-[36px]" to="/" target="_blank">Site index</NuxtLink>
				<NuxtLink class="font-normal text-[13px] leading-[36px]" to="/" target="_blank">Technical requirements</NuxtLink>
			</div>
			
			<div class="copyrights font-normal text-[13px] leading-[16px]">
				© 2017 airBaltic
			</div>
		</div>
		
	</div>
</template>

<style scoped lang="scss">
	.footer {
		background-color: #f9f9f9;
	}
	
	.support-section,
	.partners-and-social,
	.information {
		margin: 0 140px;
	}
	
	.partners-and-social {
		border-bottom: 1px solid #ced2d7;
	}
</style>