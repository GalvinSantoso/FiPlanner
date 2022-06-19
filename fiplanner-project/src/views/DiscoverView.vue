<template>
  <div>
    <h1 class="px-8 pt-8 font-semibold text-3xl">
      Konsultasi dengan para Ahli Finansial
    </h1>
    <p class="px-8">Temukan ahli keuangan yang sesuai dengan kebutuhanmu!</p>
    <div class="px-8 py-4">
      <Card />
    </div>
    <Chat v-if="showChat" />
    <Footer />
    <button
      @click="showChatFunction()"
      class="fixed m-2 bottom-0 right-0 bg-primary w-20 h-20 rounded-full text-white text-sm"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";
import Chat from "@/components/Home/Chat.vue";

export default {
  data() {
    return {
      showChat: false,
      buttonText: "Chat",
    };
  },
  components: {Card, Footer, Chat},
  methods: {
    showChatFunction() {
      this.showChat = !this.showChat;
      this.buttonText = this.showChat ? "Minimize" : "Chat";
    },
  },
};
</script>

<style></style>
