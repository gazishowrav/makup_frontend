<template>
  <div class="futurecard">
        <!--Future Card-->
        <div class="future-card mb-5">
            <div class="row">
                <div class="col-lg-6" v-for="(banner, index) in banners" :key="index">
                    <div class="card shadow-sm">
                        <img v-lazy="banner.name" :alt="banner.category.name" >
                        <div class="card-body">
                           <!--  <h4>{{item.name}}</h4>
                            <p>{{item.des}}</p> -->
                            <router-link :to="{name:'category', params:{categoryUrl:banner.category.category_url}}">Shop Now</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/Future Card-->
  </div>
</template>

<script>
export default {
    data() {
        return {
           /* futureCardTop: [
                {
                    url:  require('../../assets/img/future-card/Sub-banner-01.jpg'),
                    name: "iWatch Series 4",
                    des: "Now in all Color Varient AvailableGrab This Offer...",
                    pathurl: "#",
                    state: 'futureCardTop',
                },
                {
                    url:  require('../../assets/img/future-card/Sub-banner-02.jpg'),
                    name: "34' inch Monitor",
                    des: "Get Extra $250 Voucher AndWarranty of 2 Year...",
                    pathurl: "#",
                    state: 'futureCardTop',
                }
            ],*/
            banners:[]
        }
    },
     beforeMount(){
          getBanners:{
                    this.$http.get('/banners')
                     .then(response => {this.banners = response.data.responseData;})
                        .catch(error => {''})
                             .finally(() => '')}
    },
     mounted () {
      
    }
}
</script>

<style>

</style>