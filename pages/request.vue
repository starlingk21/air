<script setup lang="ts">
	import { useFormStore } from '~/stores/requestForm'
	
	const flights = ref(1)
	
	const addFlight = () => {
		flights.value++
	}
	
	const deleteFlight = () => {
		flights.value--
	}
	
	const store = useFormStore()
	const { errorsObj, formData } = storeToRefs(store)
	
	const { validateForm } = useFormStore()
	
	const handleSubmit = () => {
		validateForm()
		
		if (errorsObj.value === null) {
			// Do the submission request here or in state action
		}
	}
</script>

<template>
	<div class="request-page-wrapper flex mt-12" role="presentation">
		<RequestNavigation />
		
		<div class="request-details flex-1" role="presentation">
			<h1 class="text-[40px] font-light leading-[47px]">Request assistance from us</h1>
			
			<p class="details-text text-[20px] font-light leading-[28px] my-10">Providing assistance to passengers with reduced mobility is part of our service at airBaltic.</p>
			
			<div class="steps-list-wrapper" role="presentation">
				<h6 class="text-[16px] leading-[19px] font-medium mb-4">We can help you:</h6>
				
				<ul class="steps-list columns-2 ml-5 list-disc" role="list">
					<li class="step text-[16px] leading-[32px] font-normal" role="listitem">Get to the aircraft</li>
					<li class="step text-[16px] leading-[32px] font-normal" role="listitem">Board the aircraft</li>
					<li class="step text-[16px] leading-[32px] font-normal" role="listitem">Move around the aircraft cabin if required</li>
					<li class="step text-[16px] leading-[32px] font-normal" role="listitem">Disembark the aircraft</li>
					<li class="step text-[16px] leading-[32px] font-normal" role="listitem">Transfer between flights</li>
				</ul>
			</div>
			
			<div class="banner-wrapper flex gap-5 mt-6" role="presentation">
				<RequestBanner color="#e5f6ff">
					Personal mobility equipment and guide dogs are carried free of charge.
				</RequestBanner>
				
				<RequestBanner color="#ffffcc">
					Please note, we are unable to provide eating assistance and medical services.
				</RequestBanner>
			</div>
			
			<CoreFormSection @submit="handleSubmit" color="#f9f9f9" class="rounded-[6px]">
				<template #form>
					<div class="section-one flex gap-12" role="presentation">
						<div class="details px-6 py-7 pr-0 max-w-[255px] box-content flex-1" role="presentation">
							<h6 class="font-medium text-[16px] leading-[19px] mb-2">Contact details</h6>
							<p class="font-normal text-[12px] leading-[20px]">Something also goes here, so it doesn't look that lonely down here</p>
						</div>
						
						<div class="form-inputs mr-12 flex-1" role="presentation">
							<div class="field flex flex-col mt-7 mb-4" role="presentation">
								<label class="mb-2 font-normal text-[12px] leading-[14px]" for="name">Name, Surname</label>
								<input class="bg-white p-3 font-normal text-[16px] leading-[20px] outline-none"
								       type="text"
								       v-model="formData.name"
								       id="name" />
								
								<div v-if="errorsObj?.name" class="error-msg text-red-800 flex flex-col">
									<span v-for="error in errorsObj?.name?._errors">{{ error }}</span>
								</div>
							</div>
							
							<div class="field flex flex-col mt-7 mb-4" role="presentation">
								<label class="mb-2 font-normal text-[12px] leading-[14px]" for="email">E-mail</label>
								<input class="bg-white p-3 font-normal text-[16px] leading-[20px] outline-none"
								       type="text"
								       v-model="formData.email"
								       id="email" />
								
								<div v-if="errorsObj?.email" class="error-msg text-red-800 flex flex-col">
									<span v-for="error in errorsObj?.email?._errors">{{ error }}</span>
								</div>
							</div>
							
							<div class="field flex gap-4 mb-8" role="presentation">
								<div class="country-code flex flex-col" role="presentation">
									<label class="mb-2 font-normal text-[12px] leading-[14px]"
									       for="prefix">
										Country code
									</label>
									<input class="bg-white p-3 font-normal text-[16px] leading-[20px] outline-none"
									       type="text"
									       v-model="formData.prefix"
									       id="prefix" />
									
									<div v-if="errorsObj?.prefix" class="error-msg text-red-800 flex flex-col">
										<span v-for="error in errorsObj?.prefix?._errors">{{ error }}</span>
									</div>
								</div>
								
								<div class="phone-number flex flex-col flex-1">
									<label class="mb-2 font-normal text-[12px] leading-[14px]"
									       for="phone">
										Phone number
									</label>
									<input class="bg-white p-3 font-normal text-[16px] leading-[20px] outline-none"
									       type="text"
									       v-model="formData.phone"
									       id="phone" />
									
									<div v-if="errorsObj?.phone" class="error-msg text-red-800 flex flex-col">
										<span v-for="error in errorsObj?.phone?._errors">{{ error }}</span>
									</div>
								</div>
							
							</div>
						</div>
					</div>
					
					<div class="section-two flex gap-12" role="presentation">
						<div class="details px-6 py-7 pr-0 max-w-[255px] box-content flex-1" role="presentation">
							<h6 class="font-medium text-[16px] leading-[19px] mb-2">Select flight</h6>
							<p class="font-normal text-[12px] leading-[20px]">Suspendisse elementum turpis ut volutpat ultricies. Mauris eget nisl diam. In vel felis in metus vulputate imperdiet vestibulum at dolor.</p>
						</div>
						
						<div class="form-inputs mr-12 flex-1" role="presentation">
							<template v-for="(flight, index) in flights" :key="index">
								<div class="field flex flex-col mt-7 mb-4" role="presentation">
									<label class="mb-2 font-normal text-[12px] leading-[14px]" for="flightNumber">Flight number</label>
									<input class="bg-white p-3 font-normal text-[16px] leading-[20px] outline-none"
									       type="text"
									       v-model="formData.flightNumber"
									       id="flightNumber" />
									
									<div v-if="errorsObj?.flightNumber" class="error-msg text-red-800 flex flex-col">
										<span v-for="error in errorsObj?.flightNumber?._errors">{{ error }}</span>
									</div>
								</div>
								
								<div class="field flex flex-col mt-7 mb-4" role="presentation">
									<label class="mb-2 font-normal text-[12px] leading-[14px]" for="day">Flight date</label>
									
									<div class="date-wrapper flex gap-3">
										<input class="bg-white p-3 font-normal text-[16px] leading-[20px] outline-none"
										       type="text"
										       id="day"
										       v-model="formData.day"
										       placeholder="DD" />
										
										<input class="bg-white p-3 font-normal text-[16px] leading-[20px] outline-none"
										       type="text"
										       id="month"
										       v-model="formData.month"
										       placeholder="MM" />
										
										<input class="bg-white p-3 font-normal text-[16px] leading-[20px] outline-none"
										       type="text"
										       id="year"
										       v-model="formData.year"
										       placeholder="YYYY" />
									</div>
									
									<span class="font-normal text-[12px] leading-[14px] mt-2">For example:  30  8  1972</span>
									
									<div v-if="errorsObj?.day" class="error-msg text-red-800 flex flex-col">
										<span v-for="error in errorsObj?.day?._errors">{{ error }}</span>
									</div>
									
									<div v-if="errorsObj?.month" class="error-msg text-red-800 flex flex-col">
										<span v-for="error in errorsObj?.month?._errors">{{ error }}</span>
									</div>
									
									<div v-if="errorsObj?.year" class="error-msg text-red-800 flex flex-col">
										<span v-for="error in errorsObj?.year?._errors">{{ error }}</span>
									</div>
								</div>
							</template>
							
							<div class="buttons-wrapper mr-12 flex-1 my-8" role="presentation">
								<button class="btn secondary h-13 w-40 rounded-[4px] text-white font-bold text-[14px] leading-[14px] cursor-pointer"
								        @click="addFlight"
										type="button">
									Add flight
								</button>
								
								<button v-if="flights > 1" class="btn delete h-13 w-40 font-bold text-[14px] leading-[14px] cursor-pointer"
								        @click="deleteFlight"
										type="button">
									Delete flight
								</button>
							</div>
						</div>
					</div>
				</template>
				
				<template #actions>
					<div class="actions flex gap-12" role="presentation">
						<div class="details px-6 py-7 pr-0 max-w-[255px] box-content flex-1" role="presentation">
							<p class="font-normal text-[12px] leading-[20px]">
								By submitting this form you agree to airBaltic’s
								<NuxtLink class="underline" to="/">Privacy Policy</NuxtLink>
							</p>
						</div>
						
						<div class="form-inputs mr-12 flex-1 my-8" role="presentation">
							<button class="btn primary h-13 w-40 rounded-[4px] text-white font-bold text-[16px] leading-[14px] cursor-pointer">
								Confirm
							</button>
						</div>
					</div>
				</template>
			</CoreFormSection>
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
	
	.details h6 {
		color: #152649;
	}
	
	.field {
		input {
			border: 1px solid #ced2d7;
		}
	}
	
	.section-one, .section-two {
		border-bottom: 1px solid #e2e4e9;
	}
	
	.btn {
		background-color: #313892;
		
		&.secondary {
			background: transparent;
			border: 1px solid #313892;
			color: #313892;
		}
		
		&.delete {
			background: transparent;
			border: none;
			color: #152649a3;
		}
	}
	
	@include breakpoint(medium) {
		.request-page-wrapper {
			margin-top: 0;
			
			.request-details {
				
				.details-text, h1, .steps-list-wrapper {
					margin-left: 20px;
					margin-right: 20px;
				}
				
				.details-text {
					margin-top: 20px;
					margin-bottom: 20px;
				}
			}
			
			.steps-list {
				columns: 1;
			}
			
			.banner-wrapper {
				flex-direction: column;
				gap: 0;
			}
			
			.section-one,
			.section-two,
			.actions {
				flex-direction: column;
				gap: 24px;
				
				.details {
					padding-bottom: 0;
					padding-left: 20px;
				}
				
				.field {
					margin-top: 20px;
				}
				
				.form-inputs {
					margin: 0 20px;
					
					.field input {
						width: 100%;
					}
				}
			}
			
			.actions .btn.primary {
				width: 100%;
			}
			
			.form-inputs {
				
				.buttons-wrapper {
					display: flex;
					margin: 32px 0 36px 0;
				}
			}
		}
	}
</style>