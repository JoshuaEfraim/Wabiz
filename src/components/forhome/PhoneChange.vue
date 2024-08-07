<template>
<div class="container-fluid">
    <h1 class="title mb-5">Messaging Capabilities</h1>
      <div class="row justify-content-center">
                  <div class="col-md-3 box  mb-4">
                        <img src="comment.png" height="90">
                        <h4 class="heading">Text</h4>
                    </div>
                    <div class="col-md-3 box  mb-4">
                      <img src="reply.png" height="90">
                      <h4 class="heading">Quick Reply Button</h4>
                  </div>
      </div>
        <div class="row justify-content-center">
            <!-- Big Column on the Left -->
            <!-- Small Columns on the Right -->
            <div class="col-lg-2">
                <div class="row">

                    <div class="col-md-12 box  mt-5 mb-5">
                      <img src="image.png" height="90">
                      <h4 class="heading">Image</h4>
                    </div>
                    <div class="col-md-12 box  mt-5 mb-5">
                      <img src="document.png" height="90">

                        <h4 class="heading">Document</h4>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 box ">
              <img class="image" src="phonesample1.png" height="500">
            </div>
            <div class="col-lg-2">
                <div class="row">
                    <div class="col-md-12 box mt-5 mb-5">
                      <img src="call.png" height="90">
                      <h4 class="heading">Call to Action</h4>
                    </div>
                    <div class="col-md-12 box  mt-5 mb-5">
                      <img src="catalog.png" height="90">

                        <h4 class="heading">Catalog</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
                    <div class="col-md-3 box ">
                      <img src="video.png" height="90">

                        <h4 class="heading">Video</h4>
                    </div>
                    <div class="col-md-3 box ">
                      <img src="list.png" height="90">

                        <h4 class="heading">List Menu Message</h4>
                    </div>
      </div>
</div>
    

</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'PhoneChange'
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>
  .title {
    font-weight: 600;
    color:white;
  }
  .container-fluid {
    padding-top:80px;
    padding-bottom:80px;
    font-family: Metrophobic;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1700' height='1200' preserveAspectRatio='none' viewBox='0 0 1700 1200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1023%26quot%3b)' fill='none'%3e%3crect width='1700' height='1200' x='0' y='0' fill='rgba(0%2c 156%2c 119%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c716.128C132.878%2c703.491%2c260.402%2c649.026%2c359.983%2c560.144C451.547%2c478.418%2c475.648%2c352.052%2c530.763%2c242.391C588.47%2c127.572%2c699.889%2c28.81%2c691.473%2c-99.419C682.963%2c-229.087%2c566.755%2c-319.408%2c487.151%2c-422.119C402.647%2c-531.153%2c345.955%2c-689.822%2c211.162%2c-719.151C75.708%2c-748.624%2c-37.339%2c-616.618%2c-165.652%2c-564.158C-277.999%2c-518.226%2c-410.474%2c-515.884%2c-496.193%2c-429.954C-584.257%2c-341.673%2c-600.251%2c-210.734%2c-637.057%2c-91.595C-680.898%2c50.318%2c-777.309%2c192.888%2c-732.339%2c334.448C-686.838%2c477.679%2c-540.121%2c563.613%2c-406.85%2c633.071C-281.569%2c698.365%2c-140.64%2c729.503%2c0%2c716.128' fill='%23007d5f'%3e%3c/path%3e%3cpath d='M1700 1883.356C1831.343 1914.799 1989.578 1896.8400000000001 2089.298 1805.76 2188.1530000000002 1715.471 2160.974 1556.219 2198.787 1427.788 2230.191 1321.127 2314.205 1223.874 2292.742 1114.777 2271.4700000000003 1006.654 2164.982 942.627 2087.855 863.921 2015.711 790.3 1954.326 699.662 1855.914 669.004 1756.881 638.153 1652.608 670.554 1552.333 697.0930000000001 1449.526 724.302 1345.531 753.079 1267.055 824.851 1183.009 901.717 1128.78 1003.899 1097.213 1113.3319999999999 1062.1480000000001 1234.894 1011.827 1376.037 1076.7350000000001 1484.636 1141.942 1593.7359999999999 1307.4479999999999 1575.7269999999999 1414.516 1644.221 1521.247 1712.5 1576.78 1853.858 1700 1883.356' fill='%2300bb8f'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1023'%3e%3crect width='1700' height='1200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");  }
    .first {
    margin-top:8%;
    }
  .heading {
    color:white;
    font-size:20px;
  }

  .image {
    border: 2px solid black;
    border-radius: 60px;
    background-color: white;
  }



</style>
