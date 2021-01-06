<template>
     <div class="jumbotron color-grey-light mt-10">
      <div class="d-flex align-items-center h-100">
        <div class="container text-center py-5">
          <h3 class="mb-0">{{msg}}</h3>
        </div>
      </div>
 </div>
</template>
<script>
export default {
     props: ['msg'], 
}
</script>