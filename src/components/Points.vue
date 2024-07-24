<template>
<div class="container-fluid">
  <div class="container">
        <div class="row">
            <!-- Big Column on the Left -->
            <div class="col-lg-6 box">
              <img src="features.png" width="700">
            </div>
            <!-- Small Columns on the Right -->
            <div class="col-lg-5">
                <div class="row">
                    <div class="col-md-12 box first  mb-4">
                        <h3 class="heading">Engaging Features</h3>
                        <p>Fully featured messaging to create consistently delightful experiences that help drive business outcomes across the customer journey</p>
                    </div>
                    <div class="col-md-12 box mb-4">
                        <h3 class="heading">Quality by Design</h3>
                        <p>The API has built-in user feedback controls which help ensure engagement stays high overtime</p>
                    </div>
                    <div class="col-md-12 box mb-4">
                        <h3 class="heading">Intuitively Conversational</h3>
                        <p>1st social media messenger preferred by user to have interaction with</p>
                    </div>
                    <div class="col-md-12 box">
                        <h3 class="heading">Automate and Scale</h3>
                        <p>Flexible platform that lets you deliver consistent, personalized customer experiences at scale</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    

</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Points'
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>
  .container-fluid {
    padding-top:80px;
    padding-bottom:80px;
    font-family: Metrophobic;
  }
  .first {
    margin-top:17%;
  }
  .heading {
    color:#009C77;
    font-weight:600;
  }
  .container {
    border: solid 2px black;
    border-radius: 60px;
  }

</style>
