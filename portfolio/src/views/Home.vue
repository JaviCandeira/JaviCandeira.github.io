<template>
    <div class="container mx-auto">
        <AppBanner class="mb-5 sm:mb-8"/>

        <div class="mt-10 sm:mt-20 flex justify-center">
            <router-link
				to="/projects"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Projects"
			>
				<ButtonUI title="More Projects" />
			</router-link>
        </div>
    </div>
</template>

<script>
import AppBanner from '@/components/shared/AppBanner';
import ButtonUI from '../components/reusable/ButtonUI.vue';
export default {
    name: 'Home',
    components: {
        AppBanner,
        ButtonUI,
    },
}
</script>

<style>

</style>