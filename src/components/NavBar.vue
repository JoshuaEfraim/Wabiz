  <template>
  <nav class="navbar navbar-expand-lg border py-3">
    <div class="container">
      <a class="brand-image" href="#">
        <img src="Wabiz.JPG" alt="Bootstrap" width="180" height="52">
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" @click="toSolutionPage">Solutions</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" @click="toPartnersPage">Partners</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <ul class="dropdown-menu" >
            <li><a class="dropdown-item" style="color: #009C77;" @click="toBlogPage">Blog</a></li>
            <li><a class="dropdown-item" style="color: #009C77;" href="#">FAQ</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    toSolutionPage() {
      this.$router.push('/solutionpage');
    },
    toPartnersPage() {
      this.$router.push('/partnerspage');
    },
    toBlogPage() {
      this.$router.push('/blogpage');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-link, .nav-link.active {
  color: #009C77;
  cursor: pointer;
}
.dropdown-item {
  cursor:pointer;
}
.brand-image {
  width: 200px;
  height: 40px; /* Adjust this value to suit your design */
  max-height: 100%;
}
</style>
