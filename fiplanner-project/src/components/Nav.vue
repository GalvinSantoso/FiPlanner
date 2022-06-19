<template>
  <nav class="text-white bg-black p-4 flex justify-between items-center">
    <!-- nav-logo -->
    <div class="w-2/5 p-4">
      <h1 class="font-bold text-2xl">
        Fi<span class="text-primary">Planner</span>
      </h1>
    </div>
    <!-- end nav logo -->

    <!-- nav-link -->
    <ul
      id="list"
      class="list-none flex justify-evenly w-3/5 p-4 text-lg font-semibold"
    >
      <li class="home">
        <router-link to="/">Home</router-link>
      </li>
      <li class="forum">
        <router-link to="/forum">Forum</router-link>
      </li>
      <li class="discover">
        <router-link to="/discover">Discover</router-link>
      </li>
      <li class="blog"><router-link to="/blog">Blog</router-link></li>
    </ul>
    <!-- end nav-link -->

    <!-- sign-in button -->
    <div class="w-2/5 flex justify-end">
      <button
        @click="$router.push('signin')"
        class="hover:bg-green-800 duration-300 text-white py-3 mr-8 px-8 font-semibold bg-primary rounded text-l"
      >
        Sign In
      </button>
    </div>
    <!-- end sign-in button -->
  </nav>
</template>

<script>
export default {};
document.addEventListener("DOMContentLoaded", function (event) {
  function navbarColor() {
    document.querySelector("ul li").style.color = "white";
    let currLoc = window.location.pathname;
    console.log("test");
    if (currLoc == "/") {
      document.getElementsByClassName("home")[0].style.color = "#1AA37A";
    } else if (currLoc == "/forum") {
      document.getElementsByClassName("forum")[0].style.color = "#1AA37A";
    } else if (currLoc == "/discover") {
      document.getElementsByClassName("discover")[0].style.color = "#1AA37A";
    } else if (currLoc == "/blog") {
      document.getElementsByClassName("blog")[0].style.color = "#1AA37A";
    }
  }

  navbarColor();
  // document.querySelectorAll("li").addEventListener("click", function () {
  //   navbarColor();
  // });
});
</script>

<style></style>
