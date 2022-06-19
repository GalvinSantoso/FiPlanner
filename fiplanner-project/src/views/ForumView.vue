<template>
  <h1
    class="after:rounded-sm after:content-[''] after:h-1 after:w-1/12 after:mt-2 after:bg-green-600 after:block w-1/2 pt-8 px-8 font-semibold text-3xl"
  >
    Forum
  </h1>
  <p class="px-8 pt-4">Tanyakan pertanyaanmu disini!</p>
  <ForumCard />
  <Footer />
</template>

<script>
import ForumCard from "@/components/ForumCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {ForumCard, Footer},
};
</script>

<style></style>
