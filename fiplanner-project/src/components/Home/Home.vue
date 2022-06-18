<template>
  <section class="w-full h-[90vh] bg-[url('@/assets/Home/hero.png')] bg-center bg-no-repeat bg-cover">
    <!-- hero-->
    <div class="w-full bg-[rgba(0,0,0,0.2)] h-full text-white flex p-8 relative">
      <!-- hero content -->
      <div class="w-[50vw] flex items-center">
        <h1 ref="heroTitle" class="text-5xl font-semibold leading-[5rem]"></h1>
      </div>
      <img src="@/assets/Home/hero2.png" class="absolute bottom-0 right-0 w-1/2" alt="" />
      <!-- end hero content -->
    </div>
    <!-- end hero-->
  </section>
</template>

<script>
export default {
  data() {
    return {
      HeroTitle: 'Hitung Budget dan Lakukan <span class="bg-primary p-2">Financial Check-up</span> di <span class="text-primary">Fi</span>Planner.',
    };
  },
  mounted() {
    this.$refs.heroTitle.innerHTML = this.HeroTitle;
  },
};
</script>

<style></style>
