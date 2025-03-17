import * as z from "zod"

const formSchema = z.object({
	name: z.string().min(1, { message: 'Name needs to be atleast 1 character!' }).max(50).nonempty(),
	email: z.string().min(3).email({ message: 'Invalid email address!' }).nonempty(),
	prefix: z.string().min(1, { message: 'Country code should be atleast 1 character!' }).max(4).nonempty(),
	phone: z.string().min(4).nonempty({ message: 'Phone number should consist of atleast 4 numbers!' }),
	flightNumber: z.string().min(3, { message: 'Flight number invalid!' }).nonempty(),
	day: z.string().min(1, { message: 'Flight day invalid!' }).nonempty(),
	month: z.string().min(1, { message: 'Flight month invalid!'}).nonempty(),
	year: z.string().min(4, { message: 'Flight year invalid!'}).nonempty(),
})

type formSchemaType = z.infer<typeof formSchema>
const errors = ref<z.ZodFormattedError<formSchemaType> | null>(null)

export const useFormStore = defineStore('form', {
	state: () => ({
		formData: {
			name: '',
			email: '',
			prefix: '',
			phone: '',
			flightNumber: '',
			day: '',
			month: '',
			year: '',
		}
	}),
	getters: {
		errorsObj(state) {
			return state.errors
		}
	},
	actions: {
		validateForm() {
			const validSchema = formSchema.safeParse(this.formData)
			
			if (!validSchema.success) {
				this.errors = validSchema.error.format()
				
				return
			} else {
				this.errors = null
			}
		},
	}
})