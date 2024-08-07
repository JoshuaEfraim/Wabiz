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
import idContent from '@/language/id.json';
import enContent from '@/language/en.json';


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
  },
  created() {
      let lang = this.$router.currentRoute.value.params.lang;
    if (lang==='id') {
      this.content = idContent;
    } else if (lang=== 'en') {
      this.content = enContent;
    }
    }
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>

</style>
