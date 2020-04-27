<template>
		<main class="main">
		<!--page-banner-->
		<div class="page-banner py-3">
			<div class="container-wrapper">
				<span class="shape"></span>
				<span class="shape2"></span>
				<span class="shape3"></span>
				<div class="row align-items-center">
					<div class="col-lg-4">
						<h3 class="mb-0">Products</h3>
					</div>
					<div class="col-lg-8">
						<nav aria-label="breadcrumb">
						  <ol class="breadcrumb bg-transparent justify-content-end mb-0">
						    <li class="breadcrumb-item"><a href="index.html">Products</a></li>
						    <li class="breadcrumb-item active" aria-current="page">{{search_key}}</li>
						  </ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		
		<div class="page-content">
			<div class="container-wrapper">
				<!--Products-->
				<div class="products">
					<div class="row">
						<div class="col-lg-3">
						
								<div class="sidebar card mb-3">
									<div class="card-body p-0 pb-4">
										<h3 class="sub-title">Products</h3>
										<!--Media card-->
											<div class="media mt-4" v-for="(relatedProduct,index) in relatedProducts" :key="index">
											    <div class="row no-gutter m-0">
											    	<div class="col-lg-4">
											    		<router-link :to="{ name: 'product.details', params: { productUrl: relatedProduct.pro_url }}">
											    			<img :src="relatedProduct.product_image.name" class="mr-3" :alt="relatedProduct.name">
											    		</router-link>
											    	</div>
											    	<div class="col-lg-8">
											    		<div class="media-body">
											    		  <router-link :to="{ name: 'product.details', params: { productUrl: relatedProduct.pro_url }}">
											    		  	<h5 class="mt-0 mb-1">{{relatedProduct.name}}</h5>
											    		  <p>{{relatedProduct.short_details}}</p> 
											    		  </router-link>
											    		
											    		</div>
											    	</div>
											    	<div class="col-lg-12">
											    		<div class="price-box">
											    			<div v-if="discountDateCheck(relatedProduct.discount_date)">
											    				<span class="offer-price">৳{{relatedProduct.sell_price}}</span>
												    			<span class="recent-price" v-if="relatedProduct.discountPer==1">৳{{((relatedProduct.sell_price)-((relatedProduct.discount*relatedProduct.sell_price)/100))}}</span>
												    			<span class="recent-price" v-else>৳{{(relatedProduct.sell_price-relatedProduct.discount)}}</span>
												    			
											    			</div>
											    			<div v-else>
											    				<span class="recent-price">৳{{relatedProduct.sell_price}}</span>
											    			</div>
											    		</div>
											    	</div>
											    </div>
										 	</div>
										 	
										
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
											<li class="nav-item" v-for="(category,index) in categoryInfos" :key="index" >
											<div v-if="index%2==0">
										      	<router-link :to="{ name: 'category', params: { categoryUrl: category.category_url }}" class="nav-link" >{{category.name}}</router-link>
										        </div>
										        <div v-else>
										        	<router-link :to="{ name: 'product.category', params: { categoryUrl: category.category_url }}" class="nav-link" >{{category.name}}</router-link>
										        </div>
											</li>
										</ul>
										
									</div>
								</div>

								</div>
													
						<div class="col-lg-9">
							
							<div class="special-products">
								<div class="row">
									<div class="col-lg-6">
										<h2 class="title mb-0">{{search_key}}</h2>
									</div>
							
									<div class="col-lg-12">
										<hr>
									</div>
								</div>
								<div class="row">
							  		<div class="col-lg-3" v-for="productInfo in products" :key="productInfo.id">
							  			<div class="card card-body d-block">
							  				<router-link :to="{ name: 'product.details', params: { productUrl: productInfo.pro_url }}" class="img-box">
							  					<img :src="productInfo.product_image.name" alt="productInfo.name">
							  				</router-link>
							  				
							  				<router-link :to="{ name: 'product.details', params: { productUrl: productInfo.pro_url }}">
							  					<h3>{{productInfo.name}}</h3>
							  				</router-link>
							  				<div class="position-relative">
							  					<div class="price-box">
							  						<div v-if="discountDateCheck(productInfo.discount_date)">
											    				<span class="offer-price">৳{{productInfo.sell_price}}</span>
												    			<span class="recent-price" v-if="productInfo.discountPer==1">৳{{((productInfo.sell_price)-((productInfo.discount*productInfo.sell_price)/100))}}</span>
												    			<span class="recent-price" v-else>৳{{(productInfo.sell_price-productInfo.discount)}}</span>
												    			
											    			</div>
											    			<div v-else>
											    				<span class="recent-price">৳{{productInfo.sell_price}}</span>
											    			</div>
							  					</div>
							  					<div class="addcart-box">
							  						<AddToCart :pId="productInfo.id"></AddToCart>
							  					</div>
							  				</div>
							  			</div>
							  		</div>
							  	</div>
							  	<div class="row" v-if="pageInfo.last_page>1">
							  		<div class="col-lg-12">
			
							  		 <nav class="toolbox toolbox-pagination float-right">
					                    <ul class="pagination">
					                       <ul class="pagination" role="navigation">
												<li class="page-item disabled" aria-disabled="true" aria-label="&laquo; Previous" v-if="pageInfo.current_page==1"><span class="page-link" aria-hidden="true">&lsaquo;</span></li>
												<li class="page-item" v-else>
												<a class="page-link" href="#" v-on:click="loadPaginationData(pageInfo.current_page-1)" rel="prev" aria-label="&laquo; Previous">&lsaquo;</a>
												</li>
												
												<li  v-for="index in pageInfo.last_page"  v-bind:class="{'page-item':true, 'active':(index === pageInfo.current_page)}" >
													<a class="page-link" href="#" v-on:click="loadPaginationData(index)" :items="index">{{index}}</a>
												</li>
												<li class="page-item disabled" aria-disabled="true" aria-label="Next &raquo;" v-if="pageInfo.current_page==pageInfo.last_page">
												<span class="page-link" aria-hidden="true">&rsaquo;</span>
												</li>
												<li class="page-item" v-else>
												<a class="page-link" href="#" rel="next" aria-label="Next &raquo;" v-on:click="loadPaginationData(pageInfo.current_page+1)">&rsaquo;</a>
												</li>
												</ul>
					                    </ul>
				                   </nav> 
				               </div>
						  	</div>
						</div>
							
					</div>
				</div>
			</div>
			
			</div>
		</div>
	</main>

</template>
<script>
//import SideProduct from './element/SideProduct.vue';
//import Paginate from 'vuejs-paginate';
import moment from 'moment';

export default {
	components:{
		//SideProduct,
		//Paginate,
	},
	data(){
		return{
			products:[],
			categoryInfos:[],
			pageInfo:[],
			search_key:null,
			relatedProducts:[]
		}
	},
	
	beforeCreate() {

		this.$http.get('/search/products/'+this.search_key)
                     .then(response => {
                     	console.dir(response.data.responseData.data);
                     	this.products = response.data.responseData.data;
                     	this.categoryInfos = response.data.categories;
                     	this.pageInfo=response.data.responseData;
                     	this.relatedProducts=response.data.relatedProducts;
                     	
                     	//alert(this.pageInfo.last_page);
                     })
                        .catch(error => {''})
                             .finally(() => '')
	},

	mounted(){
	this.search_key=this.$route.params.search_key;
		getSearchedProducts:{
                    this.$http.get('/search/products/'+this.search_key)
                     .then(response => {
                     //	console.dir(response.data.responseData.data);
                     	this.products = response.data.responseData.data;
                     	this.categoryInfos = response.data.categories;
                     	this.pageInfo=response.data.responseData;
                     	this.relatedProducts=response.data.relatedProducts;
                     	
                     	//alert(this.pageInfo.last_page);
                     })
                        .catch(error => {''})
                             .finally(() => '')}
	},

	methods:{
		
		loadPaginationData(pageNum)
		{
		
			this.$http.get(this.pageInfo.path+"?page="+pageNum)
                     .then(response => {
                     
                     	this.products = response.data.responseData.data;
                     	this.categoryInfo = response.data.categoryInfo;
                     	this.pageInfo=response.data.responseData;
                     	
                     })
                        .catch(error => {''})
                             .finally(() => '')
                             
		},
		clickCallback: function(pageNum) {
      			console.log(pageNum);
    	},
    	searchProducts(){
    		/*this.$http.get('/search/products/'+this.search_key)
                     .then(response => {
                     	console.dir(response.data.responseData.data);
                     	this.products = response.data.responseData.data;
                     	this.categoryInfos = response.data.categories;
                     	this.pageInfo=response.data.responseData;
                     	this.relatedProducts=response.data.relatedProducts;
                     	
                     	//alert(this.pageInfo.last_page);
                     })
                        .catch(error => {''})
                             .finally(() => '')
                             */
    	},
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

 	