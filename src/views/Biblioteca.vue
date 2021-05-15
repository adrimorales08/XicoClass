<template>
  <div class="home">
    <navbar></navbar>
    <h1>Es que te quieroooo neroooo</h1>
    <div class="spacer"></div>
    <footerHome></footerHome>
  </div>
</template>

<script>
// import  component  from '@/components/foler-name/component.vue'
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";

export default {
  name: "Biblioteca",

  components: {
    navbar,
    footerHome
  },
  data() {
    return {};
  },
};
</script>

<style>
.spacer {
  display: block;
  height: 20px;
}
</style>
