<template>
<!-- cart -->
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
    <div v-if="checkoutBool()" class="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
        <p><strong>The total amount of</strong><strong><p class="mb-0">(including VAT)</p></strong></p>
        <p><strong>${{ cartSubTotal  }}</strong></p>
    </div>
    <div class=" d-flex justify-content-between align-items-center border-0 px-0">
        <button type="button" v-show="checkoutBool()" @click="clearCart()" class="btn mr-4 btn-primary btn-block waves-effect waves-light">Clear Cart</button>
        <button type="button" v-show="checkoutBool()" @click="checkoutPage()" class="btn btn-primary btn-block waves-effect waves-light">go Checkout</button>
    </div>   
<!--/ cart-->
</template>
<script>
export default {

 props: {
    
 },
 computed: {
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
    checkoutModal(){
       this.$store.dispatch('check/checkoutModal');
        console.log("CHECKOUT", this.cartTotal);
    },
     checkoutPage(){
       this.$router.push('/checkout');
       this.$store.dispatch('cart/showCart');
    },
    quantityChange(product,direction) {
      this.$store.dispatch('prod/quantityChange',{product:product,direction:direction});
    },
    clearCart(){
      this.$store.dispatch("prod/clearCart");
      this.$store.dispatch('cart/showCart');
    },
    checkoutBool(){
      return this.$store.getters["prod/checkoutBool"];
    },
 }
}
</script>