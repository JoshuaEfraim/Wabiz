<template>
<div class="container-fluid">
  <div class="container">
    <h1 class="title">Customer Engagement Platform</h1>
        <div class="row">
            <!-- Big Column on the Left -->
            <!-- Small Columns on the Right -->
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-md-6 box first  mb-4">
                        <img src="sound.gif" height="70">
                        <h4 class="heading">Alert and Reminder</h4>
                        <p>Ensure Timely Notifications and Important Reminders for Your Customers</p>
                    </div>
                    <div class="col-md-6 box first mb-4">
                      <img src="notification.gif" height="70">
                        <h4 class="heading">Transaction and Notification</h4>
                        <p>Keep Customers Informed with Real-Time Transaction Updates</p>
                    </div>
                    <div class="col-md-6 box mb-4">
                      <img src="promotion.gif" height="70">

                        <h4 class="heading">Marketing Promotion</h4>
                        <p>Amplify Your Reach and Engage Your Audience with Targeted Marketing Campaigns</p>
                    </div>
                    <div class="col-md-6 box ">
                      <img src="password.gif" height="70">

                        <h4 class="heading">Authentication</h4>
                        <p>Provide a Secure and Effortless Authentication Process for Your Users</p>
                    </div>
                    <div class="col-md-6 box mb-4">
                      <img src="brochure.gif" height="70">

                        <h4 class="heading">Catalog</h4>
                        <p>Present and Manage Your Product Offerings Seamlessly for Easy Customer Browsing</p>
                    </div>
                    <div class="col-md-6 box">
                      <img src="advertising.gif" height="70">

                        <h4 class="heading">Click to Whatsapp</h4>
                        <p>Enable Instant, Direct Customer Engagement with a Simple Click</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 box ">
              <img src="engagement.png" width="700" height="700">
            </div>
        </div>
    </div>
</div>
    

</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Engagement'
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>
  .title {
    font-weight: 600;
    color:#009C77;
  }
  .container-fluid {
    padding-top:80px;
    padding-bottom:80px;
    font-family: Metrophobic;
  }
  .first {
    margin-top:8%;
  }
  .heading {
    color:#009C77;
    font-weight:600;
  }


</style>
