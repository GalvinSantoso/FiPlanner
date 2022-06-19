<template>
  <div class="flex fixed right-24 bottom-0 bg-stone-900 rounded-md h-3/4 w-1/2">
    <div class="flex-1 px-4">
      <div class="flex items-center">
        <div class="w-6 h-6 bg-slate-500 rounded-full aspect-square"></div>
        <div>
          <p class="text-white p-4">Financial Planner Abi</p>
        </div>
      </div>
    </div>
    <div class="pt-4 flex-1 chat-room relative border-l-2 border-l-white">
      <div class="rounded-md flex gap-3 m-4 items-center p-4">
        <div class="w-6 h-6 bg-slate-500 rounded-full aspect-square"></div>
        <p class="rounded-md p-2 bg-green-500 flex-1 text-xs text-white">
          Halo, Apa masalah Financial mu?
        </p>
      </div>
      <div class="rounded-md flex gap-3 m-4 items-center p-4">
        <p class="rounded-md p-2 bg-green-500 flex-1 text-xs text-white">
          Halo Apa masalah Financial mu?
        </p>
        <div
          class="w-6 h-6 bg-slate-500 rounded-full aspect-square w-1/2"
        ></div>

        <!-- Input Button -->
      </div>
      <div class="flex items-center absolute bottom-0 w-full">
        <input
          class="rounded-md flex m-4 items-center px-2 py-1 text-xs focus:outline-none w-3/4"
          type="text"
        />
        <button
          class="bg-primary rounded-full h-6 w-6 font-semibold text-white"
        >
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
