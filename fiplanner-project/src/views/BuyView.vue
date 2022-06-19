<template>
  <div class="p-8">
    <h1 class="font-semibold text-2xl pb-4">Detail Transaksi</h1>
    <div class="shadow-lg p-4 flex justify-between items-center">
      <div>
        <p class="py-2 font-medium">Total Pembayaran</p>
        <p class="py-2 font-medium">Metode Pembayaran</p>
        <p class="py-2 font-medium">No. Virtual Account</p>
      </div>
      <div>
        <p class="py-2 font-medium">Rp 150.000</p>
        <p class="py-2 font-medium">BCA Virtual Account</p>
        <p class="py-2 font-medium">09490394090</p>
      </div>
    </div>
    <button
      @click="$router.push('discover')"
      class="hover:bg-green-800 duration-300 text-white font-medium text-center bg-primary w-full rounded-md py-4 mt-4"
    >
      Konfirmasi
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
