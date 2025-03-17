<script setup lang="ts">

</script>

<template>
	<div class="footer mt-16" role="presentation">
		<div class="support-section py-9 flex justify-between" role="presentation">
			<FooterTabs />
			<FooterNewsletter />
		</div>
		
		<FooterCopyrights class="mobile-copyrights" />
		
		<div class="partners-and-social pb-8 flex items-center justify-between" role="presentation">
			<FooterPartners />
			<FooterSocial class="desktop-socials" />
		</div>
		
		<FooterCopyrights class="desktop-copyrights" />
	</div>
</template>

<style scoped lang="scss">
	.footer {
		background-color: #f9f9f9;
		
		.mobile-copyrights {
			display: none;
		}
	}
	
	.support-section,
	.partners-and-social,
	.information {
		margin: 0 140px;
	}
	
	.partners-and-social {
		border-bottom: 1px solid #ced2d7;
	}
	
	@include breakpoint(medium) {
		.footer {
			margin-top: 16px;
			
			.support-section {
				margin: 0 20px;
				flex-direction: column;
				
				.tabs-wrapper {
					flex-direction: column;
				}
			}
			
			.desktop-socials,
			.desktop-copyrights {
				display: none;
			}
			
			.mobile-copyrights {
				margin: 0 20px;
			}
			
			.partners-and-social {
				margin: 0 20px;
				padding-bottom: 48px;
			}
		}
	}
</style>