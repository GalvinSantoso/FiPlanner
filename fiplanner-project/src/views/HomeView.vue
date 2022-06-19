<template>
  <Home />
  <About />
  <Benefits />
  <Consult />
  <Testi />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home/Home.vue';
import About from '@/components/Home/About.vue';
import Benefits from '@/components/Home/Benefits.vue';
import Consult from '@/components/Home/Consult.vue';
import Footer from '@/components/Footer.vue';
import Testi from '@/components/Home/Testi.vue';
export default {
  name: 'HomeView',
  components: { Home, About, Benefits, Consult, Footer, Testi },
};
</script>
