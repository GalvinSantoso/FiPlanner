<template>
  <div class="grid grid-cols-3 gap-8">
    <div
      v-for="description in descriptions"
      v-bind:key="description.id"
      class="hover:scale-105 duration-300 cursor-pointer rounded-xl shadow-lg px-6 py-12 flex flex-col items-center justify-center"
    >
      <div class="bg-slate-500 rounded-full aspect-square w-1/2"></div>
      <p class="text-md font-semibold text-center py-4">
        {{ description.title }}
      </p>
      <p class="text-sm text-center">
        {{ description.desc }}
      </p>
      <button
        @click="$router.push('buy')"
        class="hover:bg-green-800 duration-300 text-white py-3 mt-2 px-8 font-semibold bg-primary rounded text-l"
      >
        {{ description.price }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptions: [
        {
          id: 1,
          title: "Siti Badiah",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolorsit amet, consectetur adipiscing elit",
          price: "Rp. 50.000",
        },
        {
          id: 2,
          title: "Siti Budiman",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolorsit amet, consectetur adipiscing elit",
          price: "Rp. 52.000",
        },
        {
          id: 3,
          title: "Siti Satiah",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolorsit amet, consectetur adipiscing elit",
          price: "Rp. 45.000",
        },
        {
          id: 4,
          title: "Siti Sutiman",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolorsit amet, consectetur adipiscing elit",
          price: "Rp. 53.000",
        },
      ],
    };
  },
};
</script>

<style></style>
