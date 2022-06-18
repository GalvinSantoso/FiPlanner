<template>
  <nav class="text-white bg-black p-4 flex justify-between items-center">
    <!-- nav-logo -->
    <div class="w-2/5 p-4">
      <h1 class="font-bold text-2xl">Fi<span class="text-primary">Planner</span></h1>
    </div>
    <!-- end nav logo -->

    <!-- nav-link -->
    <ul class="list-none flex justify-evenly w-3/5 p-4 text-lg font-semibold">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/forum">Forum</router-link></li>
      <li><router-link to="/discover">Discover</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
    <!-- end nav-link -->

    <!-- sign-in button -->
    <div class="w-2/5 flex justify-end">
      <button @click="$router.push('signin')" class="hover:bg-green-800 duration-300 text-white py-3 mr-8 px-8 font-semibold bg-primary rounded text-l">Sign In</button>
    </div>
    <!-- end sign-in button -->
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
