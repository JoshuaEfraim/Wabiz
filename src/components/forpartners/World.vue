<template>
<div class="container-fluid">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <h2 class="title">Join Us</h2>
        <p>
          Join a growing network of multinational partners who trust Wabiz for their WhatsApp API needs. Our platform is designed to meet the diverse requirements of global businesses, ensuring seamless integration and superior performance. By partnering with us, you'll be in good company, benefiting from the same high-quality service and support that leading enterprises around the world rely on. 
        </p>
        <div class="buttons pt-4">
          <a class="btn" href="#" role="button">Register</a>
          <a class="btn ms-3" @click="toFormpage" role="button">Talk to an Expert</a>
        </div>
      </div>
      
      <div class="col-6  worldmap">
        <img src="@/assets/public/worldmap.svg" height="330">
      </div>

      <div class="w-100 my-5"></div>

      <div class="col-6 mt-2">
        <img src="@/assets/public/locations.svg" height="300">

      </div>
      <div class="col-6">
        <h2 class="title">Our Partners</h2>
        <div class="row">
          <div class="col-4">

          </div>
          <div class="col-4">
            
          </div>
          <div class="col-4">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
 /* eslint-disable vue/multi-word-component-names */
  name: 'World',
  props: {
   content: String
  },
  methods: {
    toFormpage() {
      this.$router.push('/formspage');
    }}
  
};
</script>

<style scoped>
.container-fluid {
  width:100%;
  background-color:#009C77;
  font-family: metrophobic;
  color:white;
  padding-bottom: 5vh;
}
.title {
  font-weight: 600;
  margin-top:50px;
}
.container-fluid {
  padding-top: 8vh;
}
.btn {
  background-color:white;
  color:#009C77;
  width: 28%;
  border-radius: 60px;
}
</style>
