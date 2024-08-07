<template>
  <NavBar/>
  <MCASH
  :content="content"/>
  <World
  :content="content"/>
  <Success
  :content="content"/>
  <Footer/>
</template>

<script>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import MCASH from './forpartners/MCASH.vue';
import World from './forpartners/World.vue';
import Success from './forpartners/Success.vue';
import idContent from '@/language/id.json';
import enContent from '@/language/en.json';



/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'PartnersPage',
  data() {
    return {
      content: {}
    }},
  components:{
    NavBar,
    Footer,
    MCASH,
    World,
    Success

  },
  mounted() {
    console.log('partner')
  },
  created() {
      let lang = this.$router.currentRoute.value.params.lang;
    if (lang==='id') {
      this.content = idContent;
    } else if (lang=== 'en') {
      this.content = enContent;
    }
    console.log(this.content)
    }
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>

</style>
