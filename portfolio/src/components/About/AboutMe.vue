<template>
    <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/Picture.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
    setup(){
        return {
            bios: [
                {id:1,
                bio: "Hi there! I'm Javier Candeira a 21-year-old freshly graduated with a Bachelor of Science in Software Engineering. I come from Madrid, Spain although right now I live in Aarhus, Denmark where I finished my career.  I'm passionate about learning new technologies and throughout my career, I have enjoyed creating things that live on the internet. "
                 },
                {
                    id:2,
                    bio:"That's why I've specialized in Interactive Media in my career, where I could learn more about front-end technologies and interaction design. I have a good understanding of creating appealing UI/UX with good typography, smooth animations and mix of colors. "
                }
            ]
        }
    }
}
</script>

<style>

</style>