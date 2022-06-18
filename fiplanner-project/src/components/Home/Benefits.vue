<template>
  <section class="flex sm:flex-col-reverse px-36 py-8 lg:flex-row">
    <!-- benefits isi -->
    <div class="flex-1">
      <div class="py-10">
        <h1 class="text-6xl font-semibold garis-hijau">{{ benefitsTitle }}</h1>
      </div>
      <!-- text -->
      <ul class="list-none text-xl">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
    </div>
    <!-- gambar -->
    <div class="flex-1">
      <img src="@/assets/Home/benefits.png" class="w-full" alt="" />
    </div>

    <!-- end benefits isi -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      benefitsTitle: 'Mendorong kebebasan finansial bagi generasi Z',
    };
  },
};
</script>

<style></style>
