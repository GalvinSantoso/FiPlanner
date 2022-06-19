<template>
  <div
    class="w-full h-[100vh] flex justify-center items-center bg-[url('@/assets/Planner/plannerphoto1.jpg')] bg-cover bg-no-repeat"
  >
    <div
      class="flex justify-center items-center bg-[rgba(0,0,0,0.8)] w-full h-[100vh]"
    >
      <!-- kotak isi -->
      <div class="w-3/5 text-center">
        <h1 class="text-5xl p-8 font-bold bg-primary opacity-80 text-white">
          {{ plannerTitle }}
        </h1>
        <div class="flex flex-col w-1/2 justify-around items-center mx-auto">
          <input
            type="text"
            class="focus:outline-none w-full border-primary border-2 rounded-md p-2 bg-slate-300 my-4 text-primary text-lg font-semibold"
          />
          <button
            @click="$router.push('/plannerDetail')"
            class="text-white bg-primary p-4 w-full text-lg font-semibold rounded-md"
          >
            Go to your plan
          </button>
        </div>
      </div>

      <!-- end kotak isi -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plannerTitle: "Cek Pengeluaranmu dengan aplikasi kami!",
    };
  },
};
</script>

<style></style>
