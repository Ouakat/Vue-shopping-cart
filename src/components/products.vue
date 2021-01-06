<template>
<!--pagination-->
<section class="mb-3">

  <div class="row d-flex justify-content-around align-items-center">
    <div class="col-12 col-md-6 text-center text-md-left">
      <a href="#!" class="text-reset"><i class="fas fa-th-list fa-lg mr-1"></i></a>
      <a href="#!" class="text-reset"><i class="fas fa-th-large fa-lg"></i></a>
    </div>
    <div class="col-12 col-md-6 text-center">
       <pagination />
    </div>
  </div>

</section>
<!-- end pagination -->
   <section>
        <!--products page -->
        <div class="row mb-4">
            <div class="col-md-6 col-lg-4 mb-4" v-for='(product, index) in products' :key='index' :class="product.product">
                <div class="view zoom z-depth-2 rounded"  @click='viewProduct(product)' >
                    <img  class="img-fluid w-100" :src="product.image" alt="Sample">
                    <a href="#!"><div class="mask waves-effect waves-light"></div></a>
                </div>
                <div class="text-center pt-4">
                    <h5>{{ product.product }}</h5>
                    <h6 class="mb-3">${{ product.price  }}</h6>
                    <button type="button" class="btn btn-primary btn-sm mr-1 waves-effect waves-light" @click='addToCart(product)'><i class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
                    <button type="button" class="btn btn-danger btn-sm px-3 material-tooltip-main waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to wishlist"><i class="far fa-heart"></i></button>
                </div>
            </div>
        
             <div class="modal-mask" v-show="showModalPr">
                <div class="modal-wrapper">
                   <div class="modal-card">
                    <div class="modal-body">
                      <div class='prevProduct btn-nav' @click='changeProductInModal("prev")'>
                        <button class="btn-pr">
                          <span class="v-btn__content"> <i class='fa fa-angle-left'></i></span>
                        </button>
                      </div>
                      <div class='nextProduct btn-nav' @click='changeProductInModal("next")'>
                        <button class="btn-pr">
                          <span class="v-btn__content"> <i class='fa fa-angle-right'></i></span>
                        </button>
                      </div> 
                         <!--content--product-->
                         <section>
                          <div class="row">
                            <div class="col-md-5 mb-4 mb-md-0">
                              <div class="view zoom z-depth-2 rounded">
                                <img class="img-fluid w-100"
                                  :src="modalData.image"
                                  :alt="modalData.product"
                                />
                                <a href="#!">
                                  <div class="mask waves-effect waves-light"></div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-7">
                              <h5>{{modalData.product}}</h5>
                              <ul class="rating">
                                <li>
                                  <i class="fas fa-star fa-sm text-primary"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm text-primary"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm text-primary"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm text-primary"></i>
                                </li>
                                <li>
                                  <i class="far fa-star fa-sm text-primary"></i>
                                </li>
                              </ul>
                              <p>
                                <span class="mr-1"><strong>${{ modalData.price  }}</strong></span>
                              </p>
                              <p class="pt-1">
                               {{ modalData.description }}
                              </p>
                              <hr />
                              <div class="table-responsive mb-2">
                                <table class="table table-sm table-borderless">
                                  <tbody>
                                    <tr>
                                      <td class="pl-0 pb-0 w-25">Quantity</td>
                                    </tr>
                                    <tr>
                                      <td class="pl-0">
                                        <div
                                          class="def-number-input number-input safari_only mb-0"
                                        >
                                          <button @click="quantityChangeModal('decriment')" class="minus"></button>
                                          <input class="quantity" min="0" name="quantity" v-model="modalAmount" type="number">
                                          <button @click="quantityChangeModal('incriment')" class="plus"></button>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                           
                              <div class="btn-add text-center">
                              <button type="button" class="btn btn-primary btn-md mr-1 mb-2 waves-effect waves-light">
                                  Buy now
                                </button>
                                <button type="button" @click='modalAddToCart(modalData), hideModal()' class="btn btn-light btn-md mr-1 mb-2 waves-effect waves-light">
                                  <i class="fas fa-shopping-cart pr-2"></i>Add to cart
                                </button>
                               </div>                          
                          </div>
                         </section>
                         <!--end content product -->  
                    </div>
                     <div class="modal-footer">
                       <button type="button" class="v-btn" @click="hideModal()"><span class="v-btn__content">Close</span></button>
                     </div>
                   </div>
               </div>
             </div>   
        </div>
        <!--/ products page -->
  </section>
</template>
<script>
import pagination from '@/components/pagination.vue';
export default {
   components: {
    pagination
  },
  data() {
      return {
        showModal: false,
      };
    },
  ready: function () {
    var self = this;
    document.addEventListener("keydown", function(e) {
      if (self.showModalPr && e.keyCode == 37) {
        self.changeProductInModal("prev");
      } else if (self.showModalPr && e.keyCode == 39) {
        self.changeProductInModal("next");
      } else if (self.showModalPr && e.keyCode == 27) {
        self.hideModal();
      }
    });
  },
  computed: {
    productsData(){
      return this.$store.getters["prod/productsData"];
    },
    cartTotal(){ 
      return this.$store.getters["prod/cartTotal"];
    },
    showModalPr(){
      return this.$store.getters["prod/showModalPr"];
    },
    modalData(){
      return this.$store.getters["prod/modalData"];
    },
    modalAmount(){
      return this.$store.getters["check/modalAmount"];
    },
    timeout(){
      return this.$store.getters["check/timeout"];
    },
    mousestop(){
      return this.$store.getters["check/mousestop"];
    },
    checkoutBool(){
      return this.$store.getters["cart/checkoutBool"];
    },
    products() {
      return this.$store.getters["prod/products"];
    }
  },
   methods: {
    addToCart(product){
      this.$store.dispatch('prod/addToCart',{product:product});
    },
    viewProduct: function(product) {      
        this.$store.dispatch('prod/viewProduct',{product:product});
    },
    hideModal: function() {
      this.$store.dispatch('prod/hideModal');
    },
    changeProductInModal: function(direction) {
      var self = this,
          productsLength = self.productsData.length,
          currentProduct = self.modalData.sku,
          newProductId;

      if(direction === "next") {
        newProductId = currentProduct + 1;

        if(currentProduct >= productsLength) {
          newProductId = 1;
        }

      } else if(direction === "prev") {
        newProductId = currentProduct - 1;

        if(newProductId === 0) {
          newProductId = productsLength;
        }
      }

      //console.log(direction, newProductId);

      for (var i = 0; i < productsLength; i++) {
        if (self.productsData[i].sku === newProductId) {
          self.viewProduct(self.productsData[i]);
        }
      }
    },
    modalAddToCart: function(modalData) {
      var self = this;
      for(var i = 0; i < self.modalAmount; i++) {
        self.addToCart(modalData);
      }
      self.modalAmount = 1;
    },
        imageMouseOver: function(event) {
      event.target.style.transform = "scale(2)";
    },
    quantityChangeModal: function(direction){
        this.$store.dispatch('check/quantityChangeModal',{direction:direction});
    },
    imageMouseMove: function(event) {
      var self = this;
      
      event.target.style.transform = "scale(2)";
      
      self.timeout = setTimeout(function() {
        event.target.style.transformOrigin = ((event.pageX - event.target.getBoundingClientRect().left) / event.target.getBoundingClientRect().width) * 100 + '% ' + ((event.pageY - event.target.getBoundingClientRect().top - window.pageYOffset) / event.target.getBoundingClientRect().height) * 100 + "%";
      }, 50);
      
      self.mouseStop = setTimeout(function() {
        event.target.style.transformOrigin = ((event.pageX - event.target.getBoundingClientRect().left) / event.target.getBoundingClientRect().width) * 100 + '% ' + ((event.pageY - event.target.getBoundingClientRect().top - window.pageYOffset) / event.target.getBoundingClientRect().height) * 100 + "%";
      }, 100);
    },
    imageMouseOut: function(event) {
      event.target.style.transform = "scale(1)";
    }
}
}
</script>