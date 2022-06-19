<template>
  <!-- planning -->
  <section
    class="bg-gradient-to-b h-[100vh] from-primary to-white flex justify-center items-center"
  >
    <!-- kotak -->
    <div
      class="w-4/5 min-h-[80vh] shadow-xl bg-[rgba(255,255,255,0.8)] rounded-lg p-8"
    >
      <!-- header -->
      <div class="flex justify-between items-center">
        <h5 class="text-white text-2xl font-semibold">
          <span class="text-primary">Target: {{ targetPlanning }}</span>
        </h5>
        <select
          name=""
          id=""
          class="bg-primary text-white font-semibold text-lg p-2 hover:text-primary hover:bg-white hover:border-primary transition border duration-500 border-white rounded-md"
        >
          <option v-for="bulan in bulanOption" :key="bulan" :value="bulan">
            {{ bulan }}
          </option>
        </select>
      </div>
      <!-- end header -->

      <div class="p-8">
        <h1 class="font-semibold text-2xl pb-4">
          Transaksi yang kamu lakukan bulan Mei
        </h1>
        <div class="shadow-lg p-4 flex justify-between items-center rounded-lg">
          <div>
            <p class="py-2 font-medium">Makan</p>
            <p class="py-2 font-medium">Minum</p>
            <p class="py-2 font-medium">Jalan-jalan</p>
            <p class="py-2 font-medium">Total Transaksi</p>
          </div>
          <div>
            <p class="py-2 font-medium">Rp 150.000</p>
            <p class="py-2 font-medium">Rp 150.000</p>
            <p class="py-2 font-medium">Rp 150.000</p>
            <p class="py-2 font-medium">Rp 450.000</p>
          </div>
        </div>
        <p class="py-2 font-semibold">
          Kamu menghabiskan 250.000 lebih banyak dari target bulananmu!
        </p>
      </div>
    </div>

    <div></div>

    <!-- end kotak -->
  </section>
  <!-- end planning -->
</template>

<script>
export default {
  data() {
    return {
      targetPlanning: 200000,
      bulan: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "Juny",
        "July",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
    };
  },
  computed: {
    bulanOption() {
      return this.bulan.map((e) => {
        return e;
      });
    },
  },
};
</script>

<style></style>
