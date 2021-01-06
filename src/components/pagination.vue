<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination pagination-circle justify-content-center float-md-right mb-0">
          <li class="page-item"><a v-if="currentPage != 1" @click="PageNexPre('Prev')" class="page-link waves-effect waves-effect"><i class="fas fa-chevron-left"></i></a></li>
          <li  v-for="(n,index) in numOfPages" :key="index" :class="index==currentPage-1 ? 'active':''" class="page-item"><a v-if="n>=currentPage-1 && n<currentPage+3" @click="setPage(n)" class="page-link waves-effect waves-effect">{{n}}</a></li>   
          <li class="page-item"><a v-if="currentPage < numOfPages"  @click="PageNexPre('Next')" class="page-link waves-effect waves-effect"><i class="fas fa-chevron-right"></i></a></li>     
        </ul>
      </nav>
</template>
<script>
export default {
    computed: {
    currentPage(){
      return this.$store.getters["prod/currentPage"];
    },
    perPage(){
      return this.$store.getters["prod/perPage"];
    },
    perPageOptions(){
      return this.$store.getters["prod/perPageOptions"];
    },
    numOfPages() {
      return this.$store.getters["prod/numOfPages"];
    }
    },
    methods: {
    setPage(n){
      this.$store.dispatch('prod/setPage',{n:n});
    },
    PageNexPre(direction){
      this.$store.dispatch('prod/PageNexPre',{direction:direction});      
    },
    }
}
</script>