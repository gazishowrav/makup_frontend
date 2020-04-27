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
						    <li class="breadcrumb-item"><a href="index.html">Category</a></li>
						    <li class="breadcrumb-item active" aria-current="page">{{categoryInfo.name}}</li>
						  </ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<!--/page-banner-->
		<div class="page-content">
			<div class="container-wrapper">
				<!--Products-->
				<div class="products">
					<div class="row">
						<!-- <div class="col-lg-3">
							<div class="sidebar card mb-3">
								<div class="card-body p-0 pb-4">
									<h3 class="sub-title">Product categories</h3>
									
									<ul class="nav flex-column popular-categories p-3">
										<li class="nav-item"><a href="#" class="nav-link">Bag</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Electronic Cigarettes</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Eye Makeup</a></li>
										<li class="nav-item"><a href="#" class="nav-link">iPad Cases</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Summer</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Lingerie</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Tattoo Kits</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Tattoo Supplies</a></li>
										<li class="nav-item"><a href="#" class="nav-link">ele</a></li>
									</ul>
									
								</div>
							</div>
							<div class="sidebar card mb-3">
								<div class="card-body p-0 pb-4">
									<h3 class="sub-title">Popular Tags</h3>
									
									<ul class="nav popular-tag p-3">
										<li class="nav-item"><a href="#" class="nav-link">Bag</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Electronic Cigarettes</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Eye Makeup</a></li>
										<li class="nav-item"><a href="#" class="nav-link">iPad Cases</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Summer</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Lingerie</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Tattoo Kits</a></li>
										<li class="nav-item"><a href="#" class="nav-link">Tattoo Supplies</a></li>
										<li class="nav-item"><a href="#" class="nav-link">ele</a></li>
									</ul>
									
								</div>
							</div>
						</div> -->
						<SideProduct/>
						<div class="col-lg-9">
							<!--Spacial Products-->
							<div class="special-products">
								<div class="row">
									<div class="col-lg-6">
										<h2 class="title mb-0">{{categoryInfo.name}}</h2>
									</div>
									<!-- <div class="col-lg-6">
										<div class="product-search">
											<form action="#" class="form-row">
												<div class="form-group col p-0 mb-0">
													<input type="text" class="form-control shadow-none rounded-0" placeholder="Search...">
												</div>
												<div class="form-group col p-0 mb-0">
													<select class="form-control shadow-none rounded-0">
														<option value="0" selected hidden>--Select Catagory--</option>
														<option value="1">Bags</option>
														<option value="1">Camera</option>
														<option value="1">Electronics</option>
														<option value="1">Bed</option>
														<option value="1">Sofa</option>
													</select>
												</div>
												<div class="form-group col p-0 mb-0">
													<select class="form-control shadow-none rounded-0">
														<option value="0" selected hidden>--Select Price--</option>
														<option value="1">৳ 50-200</option>
														<option value="1">৳ 200-500</option>
														<option value="1">৳ 500-1000</option>
														<option value="1">৳ 1000-1500</option>
														<option value="1">৳ 1500-2000</option>
													</select>
												</div>
												<div class="form-group col p-0 mb-0">
													<button type="button" class="btn btn-themered rounded-0"><i class="fas fa-filter pr-1"></i>Filter</button>
												</div>
											</form>
										</div>
									</div> -->
									<div class="col-lg-12">
										<hr>
									</div>
								</div>
								<div class="row">
							  		<div class="col-lg-3" v-for="productInfo in products" :key="productInfo.id">
							  			<div class="card card-body d-block">
							  			<router-link :to="{ name: 'product.details', params: { productUrl: productInfo.pro_url }}">
							  					<img :src="productInfo.product_image.name" alt="productInfo.name">
							  			</router-link>
							  				<!-- <ul class="nav rating">
							  					<li><i class="mdi mdi-star"></i></li>
							  					<li><i class="mdi mdi-star"></i></li>
							  					<li><i class="mdi mdi-star"></i></li>
							  					<li><i class="mdi mdi-star"></i></li>
							  					<li><i class="mdi mdi-star"></i></li>
							  				</ul> -->
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
							  						<!-- <a href="#"><i class="mdi mdi-cart"></i></a> -->
							  						<!-- <a href="#"><i class="mdi mdi-heart"></i></a>
							  						<a href="product-details.html"><i class="mdi mdi-eye"></i></a>
							  						<a href="#"><i class="mdi mdi-content-copy"></i></a> -->
							  					</div>
							  				</div>
							  			</div>
							  		</div>
							  	</div>
							  	<div class="row" v-if="pageInfo.last_page>1">
							  		<div class="col-lg-12">
							  			<!-- <nav class="toolbox toolbox-pagination float-right">
							  				 <ul class="pagination">
					                       <ul class="pagination" role="navigation">
					                       		<paginate
					                       		:v-model="pageInfo.last_page"
					                       		:page-count="20"
												:page-range="3"
												:margin-pages="2"
												:click-handler="clickCallback"
												:prev-class="page-item"
												:next-class="page-item"
												:prev-text="'prev'"
												:next-text="'next'"
												:container-class="'pagination'"
												:page-class="'page-item'">
												</paginate>

					                       </ul>
					                   </ul>
					                    </nav> -->
												
								
					
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
							<!--/Spacial Products-->
					</div>
				</div>
			</div>
				<!--/Products-->
			</div>
		</div>
	</main>
	<!-- /main-->
</template>
<script>
import SideProduct from './element/SideProduct.vue';
import AddToCart from '../components/AddToCart.vue';
//import Paginate from 'vuejs-paginate';
import moment from 'moment';

export default {
	components:{
		SideProduct,
		AddToCart,
		//Paginate,
	},
	data(){
		return{
			products:[],
			categoryInfo:[],
			pageInfo:[],
		}
	},

	mounted(){
		//console.dir(this.$route.params.categoryUrl);
		let categoryUrl=this.$route.params.categoryUrl;
		getCategoryProducts:{
                    this.$http.get('/categoryProducts/'+categoryUrl)
                     .then(response => {
                     //	console.dir(response.data.responseData.data);
                     	this.products = response.data.responseData.data;
                     	this.categoryInfo = response.data.categoryInfo;
                     	this.pageInfo=response.data.responseData;
                     	//alert(this.pageInfo.last_page);
                     })
                        .catch(error => {''})
                             .finally(() => '')}
	},
	methods:{
		/*loadCategoryProducts(){
			console.log("okay now");
		},
		*/
		loadPaginationData(pageNum)
		{
			//console.dir(pageUrl);
			//alert("okay");
			this.$http.get(this.pageInfo.path+"?page="+pageNum)
                     .then(response => {
                     //	console.dir(response.data.responseData.data);
                     	this.products = response.data.responseData.data;
                     	this.categoryInfo = response.data.categoryInfo;
                     	this.pageInfo=response.data.responseData;
                     	//alert(this.pageInfo.last_page);
                     })
                        .catch(error => {''})
                             .finally(() => '')
                             
		},
		clickCallback: function(pageNum) {
      			console.log(pageNum);
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

 	