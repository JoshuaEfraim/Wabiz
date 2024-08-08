<template>
  <NavBar/>
  <Ecosystem
  :content="content"/>
  <Create
  :content="content"/>
  <Footer/>
</template>

<script>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import Ecosystem from './forsolutions/Ecosystem.vue';
import Create from './forsolutions/Create.vue';

/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'SolutionPage',
  data() {
    return {
      content: {}
    }
  },
  components:{
    NavBar,
    Footer,
    Ecosystem,
    Create,
  },
  mounted() {
    console.log('partner')
  }
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>

</style>
