<template>
  <div>
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "HomeView",
  components: {
    Nav,
  },
};
</script>

<style lang="postcss">
* {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
}
.garis-hijau {
  @apply after:content-[''] after:rounded-sm after:mt-4 after:py-1 after:h-1 after:w-1/6 after:bg-primary after:block;
}
</style>
