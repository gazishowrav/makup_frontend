<template>
	<!-- main-->
	<main class="main">
		<!--page-banner-->
		<div class="page-banner py-3">
			<div class="container-wrapper">
				<span class="shape"></span>
				<span class="shape2"></span>
				<span class="shape3"></span>
				<div class="row align-items-center">
					<div class="col-lg-4">
						<h3 class="mb-0">Cart</h3>
					</div>
					<div class="col-lg-8">
						<nav aria-label="breadcrumb">
						  <ol class="breadcrumb bg-transparent justify-content-end mb-0">
						    <li class="breadcrumb-item"><router-link :to="{name:'Home'}">Home</router-link></li>
						    <li class="breadcrumb-item active" aria-current="page">Cart</li>
						  </ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<!--/page-banner-->
		<div class="page-content">
			<div class="container-wrapper">
				
				<!--Cart-->
				<div class="cart mb-3">
					<div class="table-responsive">
						<table class="table table-bordered">
							<tr class="bg-light">
								<th colspan="2">Product</th>
								<!-- <th>Name</th> -->
								<th>Quantity</th>
								<th>Price</th>
								<th>Discount</th>
								<th>Sub Total</th>
								<th class="text-center">Action</th>
							</tr>
							<slot v-for="(productInfo,index) in this.$store.state.cart">	
									<cartProductReview 
									:proId="productInfo.productId" 
									:proIndex="index" 
									:proQuantity="productInfo.quantity | formatNumberWithOutDecimal" 
									:proName="productInfo.productName" 
									:proDiscount="productInfo.discount" 
									:proPrice="productInfo.price" 
									:proImage="productInfo.productImage" 
									>
									</cartProductReview>
							</slot>
							<!-- <tr v-for="(productInfo,index) in this.$store.state.cart" :key="index">
								<td class="item-img">
									<img :src="productInfo.productImage" alt="">
								</td>
								<td class="item-name font-weight-bold">
									{{ productInfo.productName }}
								</td>
								<td class="quantity">
									<input type="text" value="1" class="text-center border rounded p-2" style="width: 50px">
									{{productInfo.quantity | formatNumberWithOutDecimal}}
								</td>
								<td class="price font-weight-bold">৳ {{ productInfo.price }}</td>
								<td class="discount font-weight-bold">৳ {{productInfo.discount}}</td>
								<td class="subtotal font-weight-bold">৳ 4500</td>
								<td class="remove text-center"><i class="mdi mdi-close"></i></td>
							</tr> -->
							<tr>
								<td colspan="7" class="text-right">
									<!-- <a href="checkout.html" class="btn btn-dark">Proceed to checkout <i class="mdi mdi-arrow-right pl-1"></i></a> -->
									<router-link :to="{name:'checkout'}" class="btn btn-dark">Proceed to checkout <i class="mdi mdi-arrow-right pl-1"></i></router-link>
								</td>
							</tr>
						</table>
					</div>
				</div>
				<!-- <div class="products">
					<div class="row">
						
						<div class="col-lg-2">Photo</div>
						<div class="col-lg-3">Name</div>
						<div class="col-lg-2">Quantity</div>
						<div class="col-lg-1">Price</div>
						<div class="col-lg-2">Discount</div>
						<div class="col-lg-1">Sub Total</div>
						<div class="col-lg-1">Action</div>
						
					</div>
					
					<div v-for="(productInfo,index) in this.$store.state.cart" :key="index">	
							<cartProductReview 
							:proId="productInfo.productId" 
							:proIndex="index" 
							:proQuantity="productInfo.quantity | formatNumberWithOutDecimal" 
							:proName="productInfo.productName" 
							:proDiscount="productInfo.discount" 
							:proPrice="productInfo.price" 
							:proImage="productInfo.productImage" 
							>
							</cartProductReview>
					</div>

					<div class="row float-right ">
						<div class="col-lg-12">
							<router-link :to="{name:'checkout'}" class="btn btn-dark">Proceed to checkout</router-link>
						</div>
					</div>
				</div> -->
				<!--/Cart-->
				<!--Spacial Products-->
				<div class="special-products">
					<div class="row">
						<!-- <div class="col-lg-3">
							<div class="card shadow-sm mb-3">
								<img class="rounded" src="" alt="">
							</div>
						</div> -->
				  		<div class="col-lg-12">
				  			<div class="row">
				  				<div class="col-lg-12">
				  					<h2 class="title mb-0">You May Like</h2>
				  				</div>
				  				<div class="col-lg-12">
				  					<hr>
				  				</div>
				  			</div>
				  			<div class="row">
				  			
				  				<div class="col-lg-3" v-for="(discountProduct,index) in discountProducts" :key="index" v-if="index<4">
				  					<div class="card card-body d-block">
				  						<router-link :to="{ name: 'product.details', params: { productUrl: discountProduct.pro_url }}" class="img-box">
				  								<img :src="discountProduct.product_image.name"  :alt="discountProduct.name">
				  						</router-link>
				  						
				  						<a href="product-details.html">
				  							<h3>{{discountProduct.name}}</h3>
				  						</a>
				  						<div class="position-relative">
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
				  							<div class="addcart-box">
				  								<AddToCart :pId="discountProduct.id"></AddToCart>
				  								
				  							</div>
				  						</div>
				  					</div>
				  				</div>
				  			</div>
				  		</div>
				  	</div>
				</div>
				<!--/Spacial Products-->
			</div>
		</div>
	</main>
	<!-- /main-->
</template>
<script>
import moment from 'moment';
export default {
  data() {
        return {
              
           
            discountProducts:[],
            loading:false,
        
           	productQuantity:[],
           	
           	serial:1,

        }
    },
    beforeMount(){
			      getDiscountProducts:{
			        this.$http.get('/discountProductsForSideView')
			      .then(response => {this.discountProducts = response.data.responseData;})
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
    	},
    	

	}
}
</script>