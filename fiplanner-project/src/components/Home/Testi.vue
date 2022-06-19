<template>
  <div class="px-20 py-8 bg-primary">
    <!-- judul -->
    <div class="text-white">
      <h1 class="text-5xl font-bold garis-hijau after:bg-white after:mx-auto text-center">{{ testiTitle }}</h1>
      <!-- desc -->
      <div class="w-1/2 mx-auto my-4">
        <p class="text-center leading-7">{{ testiDesc }}</p>
      </div>
      <!-- end desc -->
    </div>
    <!-- end judul -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      testiTitle: 'Masih Tidak Yakin?',
      testiDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate, enim ab totam repudiandae eius cum minima eum quo unde adipisci quod? Tenetur dolor possimus dolore molestiae assumenda delectus nostrum.',
    };
  },
};
</script>

<style></style>
