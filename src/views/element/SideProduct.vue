<template>
<div class="col-lg-3">
		<div class="sidebar card mb-3">
			<div class="card-body p-0 pb-4">
				<h3 class="sub-title">Products</h3>
				<!--Media card-->
					<div class="media mt-4" v-for="(discountProduct,index) in discountProducts" :key="index">
					    <div class="row no-gutter m-0">
					    	<div class="col-lg-4">
					    		<router-link :to="{ name: 'product.details', params: { productUrl: discountProduct.pro_url }}">
					    			<img v-lazy="discountProduct.product_image.name" class="mr-3" :alt="discountProduct.name">
					    		</router-link>
					    	</div>
					    	<div class="col-lg-8">
					    		<div class="media-body">
					    		 <router-link :to="{ name: 'product.details', params: { productUrl: discountProduct.pro_url }}">
					    		  	<h5 class="mt-0 mb-1">{{discountProduct.name}}</h5>
					    		  <p>{{discountProduct.short_details}}</p> 
					    		  </router-link>
					    		  <!--
					    		  <ul class="nav">
					    		  	<li><i class="mdi mdi-star"></i></li>
					    		  	<li><i class="mdi mdi-star"></i></li>
					    		  	<li><i class="mdi mdi-star"></i></li>
					    		  	<li><i class="mdi mdi-star"></i></li>
					    		  	<li><i class="mdi mdi-star"></i></li>
					    		  </ul>
					    		-->
					    		</div>
					    	</div>
					    	<div class="col-lg-12">
					    		<div class="price-box">
					    			<div v-if="discountDateCheck(discountProduct.discount_date)">
											    				<span class="offer-price">৳{{discountProduct.sell_price}}</span>
												    			<span class="recent-price" v-if="discountProduct.discountPer==1">৳{{((discountProduct.sell_price)-((discountProduct.discount*discountProduct.sell_price)/100))}}</span>
												    			<span class="recent-price" v-else>৳{{(discountProduct.sell_price-discountProduct.discount)}}</span>
												    			
											    			</div>
											    			<div v-else>
											    				<span class="recent-price">৳{{discountProduct.sell_price}}</span>
											    			</div>
					    		</div>
					    	</div>
					    </div>
				 	</div>
				 	
				<!--/Media card-->
			</div>
		</div>
		<div class="card shadow-sm mb-3">
			<img class="rounded" src="" alt="">
		</div>
		<div class="sidebar card mb-3">
			<div class="card-body p-0 pb-4">
				<h3 class="sub-title">Popular Tags</h3>
				<!--Popular tag-->
				<ul class="nav popular-tag p-3">
					<li class="nav-item" v-for="(category,index) in categories" :key="index" >
					<div v-if="index%2==0">
				      	<router-link :to="{ name: 'category', params: { categoryUrl: category.category_url }}" class="nav-link" >{{category.name}}</router-link>
				        </div>
				        <div v-else>
				        	<router-link :to="{ name: 'product.category', params: { categoryUrl: category.category_url }}" class="nav-link" >{{category.name}}</router-link>
				        </div>
					</li>
				</ul>
				<!--/Popular tag-->
			</div>
		</div>
	
	</div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
        return {
              
            categories:[],
            discountProducts:[],
            loading:false

        }
    },
    beforeMount(){
			      getDiscountProducts:{
			        this.$http.get('/discountProductsForSideView')
			      .then(response => {this.discountProducts = response.data.responseData;})
			      .catch(error => {''})
			      .finally(() => this.loading = false)};
			      getCategory:{
			        this.$http.get('/category')
			      .then(response => {this.categories = response.data.responseData;})
			      .catch(error => {''})
			      .finally(() => this.loading = false)};

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