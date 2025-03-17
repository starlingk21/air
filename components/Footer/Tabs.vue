<script setup lang="ts">
	import { onMounted, onUnmounted, ref } from 'vue'
	
	const tabs = ref([
		{
			title: 'Helpful links',
			content:  [{ name: 'Book a flight' }, { name: 'Check-in online' }, { name: 'All about baggage' }, { name: 'Destinations' }]
		},
		{
			title: 'About airbaltic',
			content:  [{ name: 'Careers' }, { name: 'About us' }, { name: 'airBaltic souveniers' }]
		},
		{
			title: 'airbaltic partners',
			content:  [{ name: 'Pilots Academy' }, { name: 'airBaltic Training' }, { name: 'PINS' }]
		},
		{
			title: 'Customer support',
			content:  [{ name: 'Contact us' }, { name: 'FAQs' }, { name: 'Request assistance' }]
		}
	])
	
	const isActive = reactive({})
	
	const toggleTabs = async (i) => {
		isActive[i] = !isActive[i]
	}
	
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
</script>

<template>
	<div v-if="!isMobile" class="tabs-wrapper flex flex-1 gap-4">
		<div v-for="tab in tabs" class="tabs-list flex-1" role="presentation">
			<h3 class="uppercase font-medium text-[14px] leading-[32px]">{{ tab.title }}</h3>
			
			<ul class="links-list" role="list">
				<li v-for="item in tab.content" class="links" role="listitem">
					<NuxtLink class="font-normal text-[14px] leading-[36px]" to="/">{{ item.name }}</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
	
	<div v-else class="tabs-wrapper flex flex-1 gap-4">
		<div v-for="(tab, index) in tabs" :key="index"
		     class="tabs-list flex-1"
		     role="presentation">
				<h3 :class="['uppercase font-medium text-[14px] leading-[32px]', { 'is-open': isActive[index] }]"
				    @click="toggleTabs(index)">
					{{ tab.title }}
				</h3>
				
				<ul v-show="isActive[index]" class="links-list" role="list">
					<li v-for="item in tab.content" class="links" role="listitem">
						<NuxtLink class="font-normal text-[14px] leading-[36px]" to="/">{{ item.name }}</NuxtLink>
					</li>
				</ul>
		</div>
	</div>
</template>

<style scoped lang="scss">
	@include breakpoint(medium) {
		.tabs-wrapper {
			
			.tabs-list {
				
				h3 {
					border-bottom: 1px solid #ced2d7;
					padding: 8px 0;
					position: relative;
					
					&::before,
					&::after {
						content: '+';
						position: absolute;
						top: 50%;
						right: 0;
						transform: translateY(-50%);
						font-size: 20px;
					}
					
					&.is-open {
						&::before {
							display: none;
						}
						
						&::after {
							content: '-';
						}
					}
				}
			}
		}
	}
</style>