<template>
  <div class="rounded-lg m-8 border-2 border-green-500 flex">
    <div
      class="flex-1 p-12 bg-stone-900 text-white flex flex-col justify-center items-center"
    >
      <p class="text-4xl py-4 font-semibold">Welcome Back!</p>
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat,
        augue quis tempor, laoreet amet placerat. Donec facilisi urna quis sit
        et id.
      </p>
    </div>
    <div class="flex-1 p-12">
      <h1 class="font-semibold text-3xl">Create Account</h1>
      <div class="flex flex-col py-8">
        <label class="font-semibold" for="">Name</label>
        <input
          class="focus:outline-none border-b-2 border-stone-900"
          type="text"
        />
      </div>
      <div class="flex flex-col py-8">
        <label class="font-semibold" for="">Email</label>
        <input
          class="focus:outline-none border-b-2 border-stone-900"
          type="email"
        />
      </div>
      <div class="flex flex-col py-8">
        <label class="font-semibold" for="">Password</label>
        <input
          class="focus:outline-none border-b-2 border-stone-900"
          type="password"
        />
      </div>
      <button
        @click="signUp()"
        class="my-4 text-white py-3 mr-8 px-8 font-semibold bg-primary rounded"
      >
        Sign Up
      </button>
      <p class="py-4">
        Already Got an Account?
        <a class="text-green-600 underline underline-offset-2 cursor-pointer"
          ><router-link to="/signin">Sign In</router-link></a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: {
        name: "exampla",
        email: "edfe@gmail.com",
        password: "vbcdefgh",
        password_confirmation: "vbcdefgh",
      },
    };
  },
  methods: {
    signUp() {
      fetch("https://39e0-118-99-106-88.ap.ngrok.io/api/register", {
        method: "POST",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.test),
      }).then((res) => console.log("berhasil"));
    },
  },
};
</script>

<style></style>
