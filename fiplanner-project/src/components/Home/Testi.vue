<template>
  <div class="px-20 py-8 bg-primary">
    <!-- judul -->
    <div class="text-white">
      <h1
        class="text-5xl font-bold garis-hijau after:bg-white after:mx-auto text-center"
      >
        {{ testiTitle }}
      </h1>
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
      testiTitle: "Masih Tidak Yakin?",
      testiDesc:
        "Kami telah memberikan 1-on-1 konsultasi kepada ratusan pengguna dari pelajar, profesional, manajer, hingga executive. Lebih baik lagi, mereka puas dengan layanan kami!",
    };
  },
};
</script>

<style></style>
