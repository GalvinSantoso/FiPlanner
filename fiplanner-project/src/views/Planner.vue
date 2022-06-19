<template>
  <div class="w-full h-[80vh] overflow-hidden flex justify-center items-center">
    <!-- kotak isi -->
    <div class="w-3/5 text-center">
      <h1 class="text-5xl p-8">{{ plannerTitle }}</h1>
      <input type="text" class="border-primary border-2 rounded-md w-1/2 p-2 bg-slate-300 text-primary text-lg font-semibold" />
      <button @click="$router.push('')"></button>
    </div>
    <!-- end kotak isi -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      plannerTitle: 'Cek Pengeluaranmu dengan aplikasi kami!',
    };
  },
};
</script>

<style></style>
