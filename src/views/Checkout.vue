<template>
  <page-title msg="Checkout page"/>
  <div class="container">
    <div class="row" v-if="cart.length>0">
           <checkout-area />
    </div>
    <div class="row" v-else>
        <h1 class="secondary-heading mb-4">Your cart is empty</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/layout/pagetitle.vue';
import CheckoutArea from '@/components/checkoutArea.vue';

export default {
  name: 'Home',
  components: {
    PageTitle,
    CheckoutArea
  },
  computed: {
    cart(){
      return this.$store.getters["prod/cart"];
    }
 }
}
</script>
