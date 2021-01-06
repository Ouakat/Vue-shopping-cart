<template>
    <div class="banner" style="background:#000;">
        <div class="row header-top">
            <a class="col16 link_img" href="https://www.jumia.ma/sp-commandez-par-telephone/" target="_blank" >
             <img  src="https://ma.jumia.is/cms/1_2020/Week40/STB/MA__STB_Desktop_CS-Call-Noir.png" class="_ni" alt="MA-TopBanner-CScall">
            </a>
        </div>
    </div>
    <!-- Main Navigation -->
<header>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-md navbar-light scrolling-navbar header-sticky">
    <div class="container-fluid">

      <!-- Brand -->
      <a class="navbar-brand" href="https://mdbecommerce.com/">
        <i class="fab fa-mdb fa-3x" alt="mdb logo"></i>
      </a>

      <!-- Collapse button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="basicExampleNav">

        <!-- Right -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown cart-dropdown">
            <a href="#!" @click="showCart_m" class="nav-link navbar-link-2 waves-effect">
              <span class="badge badge-pill red">{{ cart.length  }}</span>
              <i class="fas fa-shopping-cart pl-0"></i>
            </a>
            <div class="dropdown-menu-cart" v-show="showCart()">
              <div class="card-body">
                <cart />
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="true">
              <i class="united kingdom flag m-0"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#!">Action</a>
              <a class="dropdown-item" href="#!">Another action</a>
              <a class="dropdown-item" href="#!">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="#!" class="nav-link waves-effect">
              Shop
            </a>
          </li>
          <li class="nav-item">
            <a href="#!" class="nav-link waves-effect">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a href="#!" class="nav-link waves-effect">
              Sign in
            </a>
          </li>
          <li class="nav-item pl-2 mb-2 mb-md-0">
            <a href="#!" type="button"
              class="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign
              up</a>
          </li>
        </ul>

      </div>
      <!-- Links -->
    </div>
  </nav>
  <!-- Navbar -->
</header>
<!-- Main Navigation -->
</template>
<script>
import cart from '@/components/cart.vue';
export default { 
 components: {
    cart
  },
 computed: {
    cart(){
      return this.$store.getters["prod/cart"];
    }
 },
 methods: {
    showCart_m(){
        this.$store.dispatch('cart/showCart');
    },
    showCart(){
        return this.$store.getters["cart/showCart"];
    }
 }
}

</script>
<style scoped>
.banner{
    text-align: center;
    width: 100%;
    position: relative;
}
.row{
margin-right: auto;
margin-left: auto;
flex-wrap: wrap;
flex: 0 1 auto;
display: flex;
}
.header-top{
    padding-right: 8px;
    padding-left: 8px;
    max-width: 1184px;
    width: 100%;
}

 .dropdown-menu-cart {
    top: 100%;
    left: 0;
    z-index: 1000;
    position: absolute;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    margin: .125rem 0 0;
    padding: 0;
    min-width: 25rem;
    border: 0;
    border-radius: .375rem;
    -webkit-box-shadow: 0 50px 100px rgba(50,50,93,0.1), 0 15px 35px rgba(50,50,93,0.15), 0 5px 15px rgba(0,0,0,0.1);
    box-shadow: 0 50px 100px rgba(50,50,93,0.1), 0 15px 35px rgba(50,50,93,0.15), 0 5px 15px rgba(0,0,0,0.1);
}
header {
    position: -webkit-sticky;
    position: sticky;
    top: 0; /* required */
    z-index: 70;
}
.navbar{
    background-color: #fff;
    height: 70px;
}
.col16 {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
    width: 100%;
}
.cart-dropdown [class*="col"]:first-child {
    padding-left: 0;
}

.link_img {
    padding-top: 4.79452%;
}
.link_img img{
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    position: absolute;
}
</style>