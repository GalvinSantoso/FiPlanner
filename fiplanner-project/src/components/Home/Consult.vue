<template>
  <!-- container consult -->
  <div class="py-8 px-20">
    <!-- judul -->
    <div class="w-full">
      <h1
        class="font-semibold text-center text-5xl garis-hijau my-4 after:mx-auto"
      >
        {{ consultTitle }}
      </h1>
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
      <div class="grid grid-cols-3 py-12 gap-8">
        <div
          class="bg-gradient-to-b from-primary to-white p-8 h-[400px] shadow-xl rounded-md"
        >
          <!-- card atas -->
          <div class="flex items-end justify-center">
            <img
              :src="require(`../../assets/Home/${consultCard.img}.png`)"
              alt=""
            />
          </div>
          <!-- end card atas -->
          <!-- card bawah -->
          <div class="text-center px-2 py-4">
            <h5 class="text-xl font-semibold">{{ consultCard.title }}</h5>
            <p class="text-md">{{ consultCard.desc }}</p>
          </div>
          <!-- end card bawah -->
        </div>
        <div
          class="bg-gradient-to-b from-primary to-white p-8 h-[400px] shadow-xl rounded-md"
        >
          <!-- card atas -->
          <div class="flex items-end justify-center">
            <img
              :src="require(`../../assets/Home/${consultCard.img}.png`)"
              alt=""
            />
          </div>
          <!-- end card atas -->
          <!-- card bawah -->
          <div class="text-center px-2 py-4">
            <h5 class="text-xl font-semibold">{{ consultCard.title }}</h5>
            <p class="text-md">{{ consultCard.desc }}</p>
          </div>
          <!-- end card bawah -->
        </div>
        <div
          class="bg-gradient-to-b from-primary to-white p-8 h-[400px] shadow-xl rounded-md"
        >
          <!-- card atas -->
          <div class="flex items-end justify-center">
            <img
              :src="require(`../../assets/Home/${consultCard.img}.png`)"
              alt=""
            />
          </div>
          <!-- end card atas -->
          <!-- card bawah -->
          <div class="text-center px-2 py-4">
            <h5 class="text-xl font-semibold">{{ consultCard.title }}</h5>
            <p class="text-md">{{ consultCard.desc }}</p>
          </div>
          <!-- end card bawah -->
        </div>
      </div>
      <!-- end card -->
    </div>
    <!-- end isi -->

    <!-- button -->
    <div class="pt-2 pb-4 flex justify-center">
      <button
        class="bg-primary p-4 font-semibold text-lg text-white rounded-md"
        @click="$router.push('discover')"
      >
        Explore lebih banyak
      </button>
    </div>
    <!-- end button -->
  </div>
  <!-- end container consult -->
</template>

<script>
export default {
  data() {
    return {
      consultTitle: "Talk it out to professionals",
      consultDesc: "Lakukan konsultasi dengan para professional pilihanmu!",
      consultCard: {
        img: "cardImg",
        title: "John Cena",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    };
  },
};
</script>

<style></style>
