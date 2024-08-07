<template>
 <div class="container-fluid pt-5 pb-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <img class="ecosystem" src="ecosystem.png" height="450">
      </div>
      <div class="col-5 text-left introduction">
        <h2 class="title">The Ecosystem We are Creating</h2>
        <p>In today’s fast-paced market, small businesses need effective tools to reach their customers quickly and efficiently. Our platform bridges the gap between businesses and their customers, ensuring timely and relevant communication.</p>
        <p>Our platform facilitates seamless interactions between customers, creating a community where they can share experiences, provide feedback, and support each other. This interconnected ecosystem not only enhances customer satisfaction but also drives business growth through word-of-mouth and social proof.</p>
        <div class="buttons pt-4">
          <a class="btn" href="#" role="button">Register</a>
          <a class="btn ms-3" href="#" role="button">Talk to an Expert</a>
        </div>
      </div>
    </div>
    <div class="row informations justify-content-center">
      <div class="col-3">
        <img src="CustomerEngagement.gif" height="100" width="100">
        <h3 class="heading">Enhance Customer Engagement</h3>
      </div>
      <div class="col-3">
        <img src="sale.gif" height="100" width="100">
        <h3 class="heading">Increase Sales</h3>
      </div>
      <div class="col-3">
        <img src="community.gif" height="100" width="100">
        <h3 class="heading">Build a Community</h3>
      </div>
      <div class="col-3">
        <img src="insight.gif" height="100" width="100">
        <h3 class="heading">Gain Insights</h3>
      </div>

      <div class="w-100"></div>
      <div class="col-3">
        <p>Keep your customers informed and engaged with real-time notifications and updates.</p>
      </div>
      <div class="col-3">
        <p>Boost your sales with targeted promotions and timely announcements.</p>
      </div>
      <div class="col-3">
        <p>Create a loyal customer base that interacts, shares, and supports your business.</p>
      </div>
      <div class="col-3">
        <p>Collect valuable feedback and insights from your customers to improve your offerings.</p>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
      /* eslint-disable vue/multi-word-component-names */

  name: 'Ecosystem',
  methods: {
    toPartner() {
      this.$router.push('/partner');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  font-family: metrophobic;
}

.heading {
  color:#009C77;
  font-weight:600;
}
.btn {
  background-color:#009C77;
  border:1px solid black;
  color:white;
  width:30%;
  border-radius: 60px;
}
img {
  margin-top:5vh;
}
.title {
  color:#009C77;
  font-weight:600;
}
.text-left {
  text-align: left;
}
.introduction {
  margin-top: 8vh;
}
.informations {
  margin-top: 8vh;
  margin-bottom: 5vh;
}
</style>
