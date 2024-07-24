<template>
  <div>
    <NavBar />
    <Jumbotron />
    <Solutions />
    <Statistics />
    <JoinUs />
    <Points />
    <Engagement />
    <PhoneChange />
    <Clients />
    <Footer />
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import Jumbotron from './Jumbotron.vue';
import Solutions from './Solutions.vue';
import Statistics from './Statistics.vue';
import JoinUs from './JoinUs.vue';
import Points from './Points.vue';
import Engagement from './Engagement.vue';
import PhoneChange from './PhoneChange.vue';
import Clients from './Clients.vue';
import Footer from './Footer.vue';

export default {
  /* eslint-disable vue/multi-word-component-names */
  name: 'Home',
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
  }
};
</script>

<style>
/* Add any necessary styling here */
</style>
