<template>
  <div>
    <NavBar />
    <Jumbotron
      :content="content"
    />
    <Solutions
      :content="content"
    />
    <Statistics 
    :content="content"
    />
    <JoinUs
    :content="content"
    />
    <Points 
    :content="content"/>
    <Engagement 
    :content="content"/>
    <PhoneChange 
    :content="content"/>/>
    <Clients />

    <Footer />
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import Jumbotron from './forhome/Jumbotron.vue';
import Solutions from './forhome/Solutions.vue';
import Statistics from './forhome/Statistics.vue';
import JoinUs from './forhome/JoinUs.vue';
import Points from './forhome/Points.vue';
import Engagement from './forhome/Engagement.vue';
import PhoneChange from './forhome/PhoneChange.vue';
import Clients from './forhome/Clients.vue';
import Footer from './Footer.vue';
import idContent from '@/language/id.json';
import enContent from '@/language/en.json';


export default {
  /* eslint-disable vue/multi-word-component-names */
  name: 'Home',
  data() {
    return {
      content: {}
    }
  },
  components: {
    NavBar,
    Jumbotron,
    Solutions,
    Statistics,
    JoinUs,
    Points,
    Engagement,
    PhoneChange,
    Clients,
    Footer
  },
  created() {
    let lang = localStorage.getItem('language');
    if (lang==='id') {
      this.content = idContent;
    } else if (lang=== 'en') {
      this.content = enContent;
    }
    console.log(this.content)
    }
};
</script>

<style>
/* Add any necessary styling here */
</style>
