<template>
  <div>
    <h1 class="px-8 pt-8 font-semibold text-3xl">Konsultasi dengan para Ahli Finansial</h1>
    <p class="px-8">Temukan ahli keuangan yang sesuai dengan kebutuhanmu!</p>
    <div class="px-8 py-4">
      <Card />
    </div>
    <Chat />
    <Footer />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';
import Chat from '@/components/Home/Chat.vue';

export default {
  components: { Card, Footer, Chat },
};
</script>

<style></style>
