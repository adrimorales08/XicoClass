<template>
    <div class="Evaluacion">
        <navbar></navbar>
        <v-container>
            <h1>Hola</h1>
        </v-container>


    
    <div>
        <footerHome></footerHome>
    </div>
    </div>

</template>

<script>
import navbar from '../components/navbar-home/navbar.vue';
import footerHome from "@/components/footer-home/footer.vue";
export default {
    name: "Evaluacion",
    data() {
        return {};
    },
    components: {
        navbar,
        footerHome,
    },
    mounted() 
    {},
};
</script>

<style scoped>

</style>