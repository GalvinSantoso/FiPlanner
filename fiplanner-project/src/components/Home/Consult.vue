<template>
  <!-- container consult -->
  <div class="py-8 px-20">
    <!-- judul -->
    <div class="w-full">
      <h1 class="font-semibold text-center text-5xl garis-hijau my-4 after:mx-auto">{{ consultTitle }}</h1>
    </div>
    <!-- end judul -->

    <!-- isi -->
    <div class="w-full">
      <!-- text -->
      <div>
        <h6 class="text-center">{{ consultDesc }}</h6>
      </div>
      <!-- end text -->
      <!-- card -->
      <div class="grid grid-cols-3">
        <div class="bg-gradient-to-b from-primary to-white">
          <!-- card atas -->
          <div>
            <img :src="consultCard.img" alt="" />
          </div>
          <!-- end card atas -->

          <!-- card bawah -->
          <div>
            <h5>{{}}</h5>
          </div>
          <!-- end card bawah -->
        </div>
      </div>
      <!-- end card -->
    </div>
    <!-- end isi -->
  </div>
  <!-- end container consult -->
</template>

<script>
export default {
  data() {
    return {
      consultTitle: 'Talk it out to professionals',
      consultDesc: 'Lakukan konsultasi dengan para professional pilihanmu!',
      consultCard: {
        img: '',
        title: '',
        desc: '',
      },
    };
  },
};
</script>

<style></style>
