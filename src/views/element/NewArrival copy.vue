<template>
  <div class="product">
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>

        <section v-else>
            <div v-if="loading">Loading...</div>

            <div v-else v-for="(product, index) in info" :key="index">
                <!-- <p>{{ product.first_page_url }}</p> -->
                <p>{{ product.name }}</p>
            </div>
        </section>
       
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    data(){
        return {
          //  base: [],
            info: [],
            loading: true,
            errored: false
        }
    },
    mounted () {
      this.$http.get('newProducts')
      .then(response => {
          //this.base = response.data
          this.info = response.data.productsList.data
      })
      .catch(error => {
         // console.log(error)
         // this.errored = true
      })
      .finally(() => this.loading = false)
    }
  //   mounted () {
  //   axios
  //     .get('http://mwbddemo.com/makeup/api/products')
  //     .then(response => {
  //       this.info = response.data.productsList.data
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       this.errored = true
  //     })
  //     .finally(() => this.loading = false)
  // }
}
</script>

<style>

</style>