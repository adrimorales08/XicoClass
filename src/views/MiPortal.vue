<template>
  <div class="MiPortal">
    <navbar></navbar>
    <div class="tabs">
      <menuTabs></menuTabs>
    </div>
    <div></div>

    <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
import menuTabs from "@/components/MiPortal/menuTabs/menuTabs.vue";
export default {
  name: "MiPortal",
  data() {
    return {
      tab: 1,
    };
  },
  components: {
    navbar,
    footerHome,
    menuTabs,
  },
  watch: {
    tab: function () {
      console.log(this.tab);
    },
  },
};
</script>

<style scoped></style>
