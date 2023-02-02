<template>
    <div>
        <div class="container mx-auto">
            <AboutMe />
        </div>
    </div>
</template>

<script>
import AboutMe from '@/components/About/AboutMe';

export default {
        name: "About",
        components :{
            AboutMe,
        },
        data : () => {
            return {};
        },
}
</script>

<style>

</style>