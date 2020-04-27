<template>
    <div class="products">
      
						<div class="new-arrival">
							<div class="row">
								<div class="col-lg-6">
									<h2 class="title mb-0">New Arrival Item</h2>
								</div>
								<div class="col-lg-6">
									<ul class="nav justify-content-end" id="myTab" role="tablist">
									  <li class="nav-item">
									    <a class="nav-link active" id="featured-tab" data-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="true">Featured</a>
									  </li>
									 <!--  <li class="nav-item">
									    <a class="nav-link" id="bestSeller-tab" data-toggle="tab" href="#bestSeller" role="tab" aria-controls="bestSeller" aria-selected="false">Best Seller</a>
									  </li> -->
									</ul>
								</div>
								<div class="col-lg-12">
									<hr>
								</div>
							</div>
							<div class="tab-content" id="myTabContent">
							  <div v-if="owlSlide.length > 0" class="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="featured-tab">
							  	<section v-if="errored">
                    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
                  </section>
                  <section v-else>
                  <div v-if="loading">Loading...</div>
                    <carousel class="featured" :autoplay="true" :dots="false" :items="4">
                      <div class="item" v-for="(item, index) in owlSlide" :key="index">
                        <div class="card card-body d-block">
                          <router-link :to="{ name: 'product.details', params: { productUrl: item.pro_url }}">
                            <img :src="item.product_image.name" :alt="item.product_image.name">
                          </router-link>
                          <!-- <ul class="nav rating">
                            <li><i class="mdi mdi-star"></i></li>
                            <li><i class="mdi mdi-star"></i></li>
                            <li><i class="mdi mdi-star"></i></li>
                            <li><i class="mdi mdi-star"></i></li>
                            <li><i class="mdi mdi-star"></i></li>
                          </ul> -->
                          <router-link :to="{ name: 'product.details', params: { productUrl: item.pro_url }}">
                            <h3>{{item.name}}</h3>
                            <!-- <h1>{{item.created_at | formatDate}}</h1> -->
                            <!-- <h1>{{(item.discount_date | formatDate)<=(item.created_at | formatDate)}}</h1> -->
                          </router-link>
                          <div class="position-relative">
                            <div class="price-box">
                              <div v-if="discountDateCheck(item.discount_date)">
                                  <span class="offer-price">৳{{productInfo.sell_price}}</span>
                                  <span class="recent-price" v-if="item.discountPer==1">৳{{((item.sell_price)-((item.discount*item.sell_price)/100))}}</span>
                                  <span class="recent-price" v-else>৳{{(item.sell_price-item.discount)}}</span>
                                  
                                </div>
                                <div v-else>
                                  <span class="recent-price">৳{{item.sell_price}}</span>
                                </div>
                            </div>
                            <div class="addcart-box">
                              <AddToCart :pId="item.id"></AddToCart>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </carousel>
                </section>
              </div>
            </div>
          </div>
        </div>
  </template>


<script>
import carousel from 'vue-owl-carousel';


import moment from 'moment';

export default {
  components: {
        carousel
    },
    data() {
      return {
        info: [],
        owlSlide: [],
        loading: true,
        errored: false 
      }
    },
    mounted () {
      this.$http.get('newProducts')
      .then(response => {
          this.info = response.data.responseData;
          this.owlSlide = response.data.responseData;
      })
      .catch(error => {
          //console.log(error)
          this.errored = true
      })
      .finally(() => this.loading = false)
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