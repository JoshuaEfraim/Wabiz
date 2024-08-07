<template>
<div class="container-fluid">
  <div class="container">
    <div class="row">
      <div class="col-4">
        <img class="mandiri mt-4" src="mandiri.png" height="75">
      </div>
      <div class="col-8">
        <h1 class="title mt-5">Success Story</h1>

      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <img class="mt-5" src="bank.svg" height="400">
      </div>
      <div class="col-8 text-left mt-5">
        <p>Mandiri Bank has significantly enhanced its customer engagement and business growth through the WhatsApp Business Platform. Utilizing this powerful communication tool, Mandiri has seen remarkable improvements in various key metrics. For instance, 37% of all conversions now occur via WhatsApp, highlighting the platform's effectiveness in driving customer actions. Furthermore, the use of WhatsApp has contributed to a substantial 42% increase in net margin interest income, showcasing its positive impact on the bank's financial performance. Additionally, the platform's instant and reliable notifications have resulted in a 56% increase in credit card applicants responding to verification requests, streamlining the application process and improving customer experience. By leveraging the WhatsApp Business Platform, Mandiri Bank has set a benchmark for digital transformation and customer-centric banking services.</p>
        <div class="row justify-content-center">
          <div class="col-3">
            <img src="conversion.gif" height="100">
            <p><span style="color:#009C77;">37%</span> of all conversions are via Whatsapp</p>
          </div>
          <div class="col-3">
            <img src="interest.gif" height="100">
            <p><span style="color:#009C77;">42%</span> increase in net margin interest income through Whatsapp</p>
          </div>
          <div class="col-3">
            <img src="verification.gif" class="mt-3" height="80">
            <p class="mt-1"><span style="color:#009C77;">56%</span> more credit card applicants respond to verification notifications</p>
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
  name: 'Success',
  
};
</script>

<style scoped>
.container {
  font-family:metrophobic;
  padding-top: 30px;
  margin-bottom: 50px;
}
.title {
  color:#009C77;
  font-weight: 600;
}
.text-left {
  text-align: left;
}
.col-3 {
  text-align: center;
}
span {
  font-weight:600;
}
</style>
