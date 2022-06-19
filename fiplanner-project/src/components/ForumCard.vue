<template>
  <div>
    <div
      v-for="question in questions"
      v-bind:key="question.title"
      class="rounded-xl shadow-lg py-8 p-4 mx-8 gap-3 flex my-4"
    >
      <div class="flex items-center flex-col">
        <div class="bg-slate-500 rounded-full aspect-square w-3/4"></div>
        <p class="text-center font-semibold text-xs">{{ question.name }}</p>
      </div>
      <div>
        <p class="font-semibold">
          {{ question.title }}
        </p>
        <p>
          {{ question.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          title: "Bagaimana cara pembagian gaji seorang sandwich generation?",
          answer:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan pretium odio ultricies aliquet nec venenatis. Nec sit congue ipsumphasellus mauris donec at.",
          name: "John Cena",
        },
        {
          title: "Bagaimana cara berinvestasi saham?",
          answer:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan pretium odio ultricies aliquet nec venenatis. Nec sit congue ipsumphasellus mauris donec at.",
          name: "John Cuna",
        },
        {
          title: "Bagaimana investasi di kripto",
          answer:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan pretium odio ultricies aliquet nec venenatis. Nec sit congue ipsumphasellus mauris donec at.",
          name: "Cena John",
        },
      ],
    };
  },
};
</script>

<style></style>
