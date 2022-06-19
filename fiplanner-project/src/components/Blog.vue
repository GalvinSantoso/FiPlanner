<template>
  <div>
    <div
      v-for="description in descriptions"
      v-bind:key="description.id"
      class="py-8 px-32 flex-col-reverse lg:flex-row flex items-center"
    >
      <div class="flex-1">
        <p>{{ description.name }}</p>
        <h1 class="font-semibold text-2xl">How to be Rich in 10 Minutes</h1>
        <p class="text-justify">
          {{ description.body }}
        </p>
      </div>
      <div class="flex-1">
        <img
          class="rounded-lg w-1/2 m-auto"
          src="../assets/Home/hero.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptions: [],
    };
  },
  mounted() {
    fetch("https://39e0-118-99-106-88.ap.ngrok.io/api/posts")
      .then((res) => res.json())
      .then((data) => {
        this.descriptions = data.data;
      });
  },
};
</script>

<style></style>
