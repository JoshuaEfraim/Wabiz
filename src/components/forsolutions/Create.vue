<template>
  <div class="container-fluid pt-4 pb-5">
    <div class="container">
      <h3 class="title pb-4 pt-4 text-center">Our Solutions for Multiple Industries</h3>
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-6 d-flex justify-content-center mb-4" v-for="(industry, index) in industries" :key="index">
          <div class="card" style="width: 19rem; height:18rem;">
            <div style="display: flex; justify-content: center; width: 100%;">
              <img :src="industry.img" class="card-img-top mt-4" alt="...">
            </div>
            <div class="card-body mb-2">
              <h5>{{ industry.name }}</h5>
              <ul class="list-group list-group-flush mx-2">
                <li class="list-group-item" v-for="(item, idx) in industry.services" :key="idx">
                  <i class="fas fa-check text-success"></i>
                  {{ item }}
                </li>
              </ul>
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
  name: 'Create',
  data() {
    return {
      industries: [
        {
          name: 'Financial Service',
          img: 'budget.png',
          services: [
            'Transactional Notification',
            'Application Verification',
            'Collection & Reminder',
          ],
        },
        {
          name: 'Government',
          img: 'government.png',
          services: [
            'Informational Updates',
            'Reminder Alerts',
            'Queries & FAQs',
          ],
        },
        {
          name: 'Retail, FMCG, F&B',
          img: 'wholesaler.png',
          services: [
            'Purchase Order',
            'Product Catalog',
            'Promotional Program',
          ],
        },
        {
          name: 'Healthcare',
          img: 'protection.png',
          services: [
            'Booking Appointments',
            'Booking Reminders',
            'Checking Status',
          ],
        },
        {
          name: 'Logistics',
          img: 'logistics.png',
          services: [
            'Delivery Information',
            'Tracking Package',
            'Customer Service',
          ],
        },
        {
          name: 'Hospitality',
          img: 'hospitality.png',
          services: [
            'Reservation Management',
            'Guest Communication',
            'Service Requests',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.container-fluid {
  font-family: Metrophobic;
  background-color: #AFE1AF;
}
.card {
  background-color: white;
  border-radius: 50px;
}
.list-group-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.list-group {
  font-size: 12px;
  text-align: left;
}
.card-img-top {
  height: 80px;
  width: 80px;
  text-align: center;
  justify-content: center;
  padding-top: 10px;
}
.title {
  color: #027057;
  font-weight: 600;
}
</style>
