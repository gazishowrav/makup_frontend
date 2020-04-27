<template>
  <div class="depertment">
        <!--shop by depertment-->
        <div class="shop-by-catagory mb-3">
            <div class="shop-by-catagory-body">
                <h3>Shop By Category <span>Choose What You Looking For</span></h3>
                <carousel class="depertment" :autoplay="true" :dots="false" :responsive="{0:{items:2},600:{items:5}}">
                    <div class="item" v-for="(item, index) in depertment" :key="index">
                       <router-link :to="{ name: 'category', params: { categoryUrl: item.category_url }}"  class="card">
                            <div class="card-header">
                                <img v-lazy="item.category_image.name" :alt="item.name">
                            </div>
                            <div class="card-body text-center">
                                {{item.name}}
                            </div>
                        </router-link>
                    </div>
                </carousel>
            </div>
        </div>
        <!--/shop by depertment-->
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import moment from 'moment';

export default {
    components: {
        carousel
    },
    data() {
        return {
            // depertment: [
            //     {
            //         url: require('../../assets/img/shop-by-depertment/cat-2-130x130_t.jpg'),
            //         name: "Accessories"
            //     },
            //     {
            //         url: require('../../assets/img/shop-by-depertment/cat-3-130x130_t.jpg'),
            //         name: "Induction"
            //     },
            //     {
            //         url: require('../../assets/img/shop-by-depertment/cat-4-130x130_t.jpg'),
            //         name: "Camera"
            //     },
            //     {
            //         url: require('../../assets/img/shop-by-depertment/cat-5-130x130_t.jpg'),
            //         name: "Headphone"
            //     },
            //     {
            //         url: require('../../assets/img/shop-by-depertment/cat-6-130x130_t.jpg'),
            //         name: "Shorts"
            //     },
            //     {
            //         url: require('../../assets/img/shop-by-depertment/cat-7-130x130_t.jpg'),
            //         name: "Bags"
            //     },
            //     {
            //         url: require('../../assets/img/shop-by-depertment/cat-1-130x130_t.jpg'),
            //         name: "Shows"
            //     },
            // ],  
              
            depertment:[null]
        }
    },
    beforeMount(){
          getCategory:{
        this.$http.get('/categoryWithBanner')
      .then(response => {
          this.depertment = response.data.responseData;
      })
      .catch(error => {
          //console.log(error)
          this.errored = true
      })
      .finally(() => this.loading = false)
        }
    },
     mounted () {
      
    },
    methods:{
        discountDateCheck(value)
        {
                var discountDate = moment(value);//Date format
                var today = moment();

                var isAfter = moment(discountDate).isAfter(today);
                return isAfter;
        }
    }
}
</script>

<style>

</style>