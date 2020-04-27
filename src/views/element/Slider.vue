<template>
    <!--slider-->
    <div class="slider">
        <div id="makupSlider" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(sliderInfo, item_index) in sliders" :key="item_index" :class="{ active: item_index==0 }">
                    <img v-lazy="sliderInfo.name" class="d-block w-100" alt="...">
                    
                    <!-- <div class="carousel-caption d-none d-md-block">
                        <h5 class="carousel-title">{{item.title}}</h5>
                        <p class="carousel-subtitle">{{item.subtitle}}</p>
                        <p class="carousel-des">{{item.des}}, <span>{{item.btn}} </span></p>
                    </div> -->
                </div>
            </div>
            <a class="carousel-control-prev" href="#makupSlider" role="button" data-slide="prev">
            <span class="mdi mdi-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#makupSlider" role="button" data-slide="next">
            <span class="mdi mdi-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    <!--/slider-->
</template>

<script>
export default {
    data() {
        return {
            slider:[
                {
                    url: require('../../assets/img/slider/main-banner-1.jpg'), 
                    alt: 'maestro',
                    title: 'Arrival Offer Available',
                    subtitle: 'Upto 30% Flate',
                    des: 'On Every Women’s Clothing',
                    btn: 'Grab Offer Now',
                },
                {
                    url: require('../../assets/img/slider/main-banner-2.jpg'), 
                    alt: 'maestro',
                    title: 'Festival Offer Available',
                    subtitle: 'Upto 40% Flate',
                    des: 'On Every Women’s Clothing',
                    btn: 'Grab Offer Now',
                }
            ],
            sliders:[],
        }
    },
     mounted () {
      
        getSliders:{
                  this.$http.get('/sliders')
                  .then(response => {this.sliders=response.data.responseData})
                  .catch(error => {console.log(error) ; //this.errored = true;
                  })
                  .finally(() => '')
        }

  }
}
</script>

<style>

</style>