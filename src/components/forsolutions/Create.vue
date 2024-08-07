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
  props: {
   content: String
  },
  data() {
  return {
    industries: [
      {
        name: `${this.content.solution_page.Create.Financial}`,
        img: require('@/assets/public/budget.png'),
        services: [
          `${this.content.solution_page.Create.FinancialOne}`,
          `${this.content.solution_page.Create.FinancialTwo}`,
          `${this.content.solution_page.Create.FinancialThree}`,
        ],
      },
      {
        name: `${this.content.solution_page.Create.Government}`,
        img: require('@/assets/public/government.png'),
        services: [
          `${this.content.solution_page.Create.GovernmentOne}`,
          `${this.content.solution_page.Create.GovernmentTwo}`,
          `${this.content.solution_page.Create.GovernmentThree}`,
        ],
      },
      {
        name: `${this.content.solution_page.Create.Retail}`,
        img: require('@/assets/public/wholesaler.png'),
        services: [
          `${this.content.solution_page.Create.RetailOne}`,
          `${this.content.solution_page.Create.RetailTwo}`,
          `${this.content.solution_page.Create.RetailThree}`,
        ],
      },
      {
        name: `${this.content.solution_page.Create.Healthcare}`,
        img: require('@/assets/public/protection.png'),
        services: [
          `${this.content.solution_page.Create.HealthcareOne}`,
          `${this.content.solution_page.Create.HealthcareTwo}`,
          `${this.content.solution_page.Create.HealthcareThree}`,
        ],
      },
      {
        name:  `${this.content.solution_page.Create.Logistics}`,
        img: require('@/assets/public/logistics.png'),
        services: [
          `${this.content.solution_page.Create.LogisticsOne}`,
          `${this.content.solution_page.Create.LogisticsTwo}`,
          `${this.content.solution_page.Create.LogisticsThree}`,
        ],
      },
      {
        name:`${this.content.solution_page.Create.Hospitality}`,
        img: require('@/assets/public/hospitality.png'),
        services: [
          `${this.content.solution_page.Create.HospitalityOne}`,
          `${this.content.solution_page.Create.HospitalityTwo}`,
          `${this.content.solution_page.Create.HospitalityThree}`,
        ],
      },
    ],
  };
}

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
