<template>
  <div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact form -->
		<ContactForm />

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>

<script>
import feather from 'feather-icons';
import ContactForm from '@/components/Contact/ContactForm.vue';
import ContactDetails from '@/components/Contact/ContactDetails.vue';
export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Hasle Centervej, Aarhus, Denmark',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'javi.candeira@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '(+45) 50 160 500',
					icon: 'phone',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<style scoped></style>