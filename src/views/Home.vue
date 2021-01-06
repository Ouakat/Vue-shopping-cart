<template>
 <page-title msg="Shop"/>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mt-3 mb-4">
         <filter-review/>
      </div>
      <div class="col-lg-8">
        <products />
       </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/layout/pagetitle.vue';
import products from '@/components/products.vue';
import FilterReview from '@/components/filter/filterReview.vue';

export default {
  name: 'Home',
  components: {
    PageTitle,
    products,
    FilterReview
  },
  computed: {
    checkoutBool(){
      return this.$store.getters["prod/checkoutBool"];
    }
  }
}
</script>
