<template>
  <div class="rounded-lg m-8 border-2 border-green-500 flex">
    <div class="flex-1 p-12 bg-stone-900 text-white flex flex-col justify-center items-center">
      <p class="text-4xl py-4 font-semibold">Welcome Back!</p>
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, augue quis tempor, laoreet amet placerat. Donec facilisi urna quis sit et id.</p>
    </div>
    <div class="flex-1 p-12">
      <h1 class="font-semibold text-3xl">Sign In to <span class="text-green-600">Fi</span>Planner</h1>
      <div class="flex flex-col py-8">
        <label class="font-semibold" for="">Email</label>
        <input class="focus:outline-none border-b-2 border-stone-900" type="email" />
      </div>
      <div class="flex flex-col py-8">
        <label class="font-semibold" for="">Password</label>
        <input class="focus:outline-none border-b-2 border-stone-900" type="password" />
      </div>
      <button class="my-4 text-white py-3 mr-8 px-8 font-semibold bg-primary rounded">Sign In</button>
      <p class="py-4">
        Not Registered Yet? <a class="text-green-600 underline underline-offset-2 cursor-pointer"><router-link to="/signup">Create an Account</router-link></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
