<template>
  <h1 class="after:rounded-sm after:content-[''] after:h-1 after:w-1/12 after:mt-2 after:bg-green-600 after:block py-8 px-32 font-semibold text-3xl">Blog</h1>

  <Blog />
</template>

<script>
import Blog from '@/components/Blog.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: { Blog },
};
</script>

<style></style>
