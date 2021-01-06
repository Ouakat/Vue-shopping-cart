<template>
<!--Ceckout -->
    <!--Grid column-->
    <div class="col-lg-8">
      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4 wish-list">
         <h5 class="mb-4">Cart (<span>{{ cart.length  }}</span> items)</h5>
          <div class="row mb-3" v-for="(product,index) in cart" :key="index">
        <div class="col-md-3 col-lg-3 col-xl-3">
            <div class="view image-cart zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                <i class="fas fa-trash-alt" @click="removeProduct(product)"></i>
                <img class="img-fluid w-100" :src="product.image" :alt="cart[index].product">
            </div>
        </div>
        <div class="col-md-9 col-lg-9 col-xl-9">
            <div>
                <div class="d-flex justify-content-between">
                <div>
                    <h5>{{ cart[index].product }}</h5>
                </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                <div>
                    <div class="def-number-input number-input safari_only mb-0 w-100">
                        <button @click="quantityChange(product,'decriment')" class="minus"></button>
                        <input class="quantity" min="0" name="quantity" v-model="cart[index].quantity" type="number">
                        <button @click="quantityChange(product,'incriment')" class="plus"></button>
                    </div>
                </div>
                <p class="mb-0"><span><strong>${{ product.price  }}</strong></span></p>
                </div>
            </div>
        </div>
          </div>
          <p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
            items to your cart does not mean booking them.</p>
        </div>
      </div>
      <!-- Card -->
      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4">

          <h5 class="mb-4">Expected shipping delivery</h5>

          <p class="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
        </div>
      </div>
      <!-- Card -->

      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4">

          <h5 class="mb-4">We accept</h5>

          <img class="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
            alt="Visa">
          <img class="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
            alt="American Express">
          <img class="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
            alt="Mastercard">
          <img class="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
            alt="PayPal acceptance mark">
        </div>
      </div>
      <!-- Card -->

    </div>
    <!--Grid column-->
    <!--Grid column-->
    <div class="col-lg-4">
      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4">

          <h5 class="mb-3">The total amount of</h5>

          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Temporary amount
              <span v-if="cartSubTotal != 0">${{ cartSubTotal  }}</span>
            </li>
             <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
              Tax
              <span v-if="cartSubTotal != 0">${{ cartTotal - cartSubTotal  }}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
                <strong>
                  <p class="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span v-if="cartSubTotal != 0"><strong >${{ cartTotal  }} </strong></span>
            </li>
          </ul>

          <button type="button" class="btn btn-primary btn-block">go to checkout</button>

        </div>
      </div>
      <!-- Card -->

      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4">

          <a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">
            Add a discount code (optional)
            <span><i class="fas fa-chevron-down pt-1"></i></span>
          </a>

          <div class="collapse" id="collapseExample">
            <div class="mt-3">
              <div class="md-form md-outline mb-0">
                <input type="text" id="discount-code" class="form-control font-weight-light"
                  placeholder="Enter discount code">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Card -->

    </div>
    <!--Grid column-->
<!-- Checkout -->
</template>
<script>
export default {
  computed: {
    showModal(){
      return this.$store.getters["check/showModal"];
    },
    cart(){
      return this.$store.getters["prod/cart"];
    },
    cartTotal(){
      return this.$store.getters["prod/cartTotal"];
    },
    cartSubTotal(){
      return this.$store.getters["prod/cartSubTotal"];
    }
  },
  methods: {
    removeProduct(product){
       this.$store.dispatch('prod/removeProduct',{product:product});
    },
     quantityChange(product,direction) {
      this.$store.dispatch('prod/quantityChange',{product:product,direction:direction});
    },
    clearCart(){
      this.$store.dispatch("prod/clearCart");
      this.$store.dispatch('cart/showCart');
    },
    checkoutModal(){
       this.$store.dispatch('check/checkoutModal');
    },
    hideModal() {
      this.$store.dispatch('check/hideModal');
    }
 }
}
</script>