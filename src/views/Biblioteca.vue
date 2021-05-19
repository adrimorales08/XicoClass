<template>
  <div class="home">
    <navbar></navbar>
    <div class = "tab">
      <menuTabsBiblio>
      </menuTabsBiblio>
    </div>
    <div class="spacer"></div>
    <footerHome></footerHome>
  </div>
</template>

<script>
// import  component  from '@/components/foler-name/component.vue'
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
import menuTabsBiblio from "@/components/MiPortal/menuTabs/menuTabsBiblio.vue";

export default {
  name: "Biblioteca",

  components: {
    navbar,
    footerHome,
    menuTabsBiblio,
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
