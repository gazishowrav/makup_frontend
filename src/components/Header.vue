<template>
    <!-- header -->
	<header class="header">
		<!-- top header-->
		<div class="top-header">
			<div class="container-wrapper">
				<nav class="navbar navbar-expand-lg px-lg-0">
				  <router-link class="navbar-brand" to="/home">
				  	<img :src="logo" alt="makeup-world-bd-logo">
				  </router-link>
				  <button class="btn btn-dark shadow-none mobile-collapse-open" v-on:click="isCollapse = !isCollapse" v-bind:class="{ show: isCollapse }">
				    <span></span>
				  </button>

				  <div class="mobile-collapse justify-content-end" v-bind:class="{ show: isCollapse }">
				    <ul class="navbar-nav m-auto">
				      <li class="nav-item active">
				        <router-link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></router-link>
				      </li>
				      <li class="nav-item dropdown" v-for="(mainCategory,mainCategoryIndex) in categories" :key="mainCategoryIndex" v-if="mainCategory.position==0">
				      	<slot v-if="mainCategoryIndex%2==0">
				      		<router-link :to="{ name: 'category', params: { categoryUrl: mainCategory.category_url }}" class="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{mainCategory.name}}</router-link>
				        </slot>
				    	<slot v-else>
				        	<router-link :to="{ name: 'product.category', params: { categoryUrl: mainCategory.category_url }}" class="nav-link dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{mainCategory.name}}</router-link>
				   		 </slot>
				        
				        <!--Dropdown-->
				        <div class="dropdown-menu megamenu-lg" aria-labelledby="dropdownMenuButton"  v-for="(subCategory,subCategoryIndex) in categories" :key="subCategoryIndex" v-if="subCategory.position==1 && subCategory.parent_id==mainCategory.id">
				            <div class="row">
				            	<div class="col-lg-4">
				            		<router-link :to="{ name: 'category', params: { categoryUrl: subCategory.category_url }}" v-if="subCategoryIndex%2==0">
				            		<h4>{{subCategory.name}}</h4>
				            		</router-link>
				            		<router-link :to="{ name: 'product.category', params: { categoryUrl: subCategory.category_url }}" v-else>
				            		<h4>{{subCategory.name}}</h4>
				            		</router-link>
				            		<ul class="nav flex-column">
				            			<li class="nav-item" v-for="(subSubCategory,subSubCategoryIndex) in categories" :key="subSubCategoryIndex" v-if="subSubCategory.position==2 && subSubCategory.parent_id==subCategory.id">
				            				<router-link :to="{ name: 'product.category', params: { categoryUrl: subSubCategory.category_url }}" v-if="subSubCategoryIndex%2==0" class="nav-link">{{subSubCategory.name}}</router-link>
				            				<router-link :to="{ name: 'category', params: { categoryUrl: subSubCategory.category_url }}" v-else class="nav-link">{{subSubCategory.name}}</router-link>
				            			</li>
				            		</ul>
				            	</div>
				            </div>
				          </div>
				        <!--/Dropdown-->
				      </li>
				   
				      
				    </ul>
				    <ul class="navbar-nav ml-auto social-menu">
				      <li class="nav-item">
				        <a href="https://www.facebook.com/makeupworldbd" class="nav-link" style="color:blue;" target="_blank"><i class="mdi mdi-facebook"></i></a>
				      </li>
				      <li class="nav-item">
				        <a href="#" class="nav-link"><i class="mdi mdi-instagram"></i></a>
				      </li>
				      <li class="nav-item">
				        <a href="https://www.youtube.com/channel/UCrHCiuYlo3twLOLyVucGPZQ" class="nav-link" target="_blank" style="color:red;"><i class="mdi mdi-youtube"></i></a>
				      </li>
				    </ul>
				  </div>
				</nav>
			</div>
		</div>
		<!-- /top header-->
		<!-- main header-->
		<div class="main-header">
			<div class="container-wrapper">
				<div class="row align-items-center">
					<div class="col-12 col-lg-3">
						<div class="btn-catagory" v-on:click="isActive = !isActive" v-bind:class="{ show: isActive }">
							<span class="btn btn-light shadow-none"><i class="mdi mdi-format-list-bulleted"></i></span>
							<p class="mb-0">Shop By <br>
							<span>Categories</span></p>
							<!-- Dropdown Menu -->
							<ul class="nav categories-dropdown">
							    <li class="nav-item" v-for="(category,index) in categories" :key="index" v-if="category.position==0">
							    	<div v-if="index%2==0">
								      	<router-link :to="{ name: 'category', params: { categoryUrl: category.category_url }}" class="nav-link" >{{category.name}}</router-link>
								        </div>
								        <div v-else>
								        	<router-link :to="{ name: 'product.category', params: { categoryUrl: category.category_url }}" class="nav-link" >{{category.name}}</router-link>
								        </div>
							    </li>
							    
						  	</ul>
							<!-- /Dropdown Menu -->
						</div>
					</div>
					<div class="col-3 col-lg-5">
						<div class="search-box web-view">
							<form role="form"  @submit.prevent="submitSearchForm" >
									<div class="input-group">
									 <!--  <div class="input-group-prepend dropdown">
									    <span class="input-group-text dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Catagories</span>
									    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									        <a class="dropdown-item" href="#">Entertainment</a>
									        <a class="dropdown-item" href="#">Electronic</a>
									        <a class="dropdown-item" href="#">Packaging & Printing</a>
									      </div>
									  </div> -->
									  <input type="text" class="form-control" placeholder="Search Products" v-model="search_key">
									  <div class="input-group-append">
									    <!-- <span class="input-group-text"> --> 
									    	<button type="submit" @click="searchProducts" class="btn btn-danger">
									    	<i class="mdi mdi-magnify"></i>
									    </button>
									    <!-- </span>  -->
									  </div>
									</div>
							</form>
						</div>
						<div class="search-box mobile-view">
							<button type="button" id="search-box-open" v-on:click="isSearch = !isSearch" v-bind:class="{ show: isSearch }"><span class="mdi mdi-magnify"></span></button>
						</div>
					</div>
					<div class="col-9 col-lg-4 text-right">
						<div class="cart-box d-flex align-items-center justify-content-end">
							<div class="account" v-if="this.$store.state.userInfo.loggedIn">
								<span>Signed as</span><br>
								<span class="font-weight-bold">{{this.$store.state.userInfo.name}}
									<a @click="logOutFunction">(Logout)</a>
								</span>

							</div>
							<div class="account" v-else>

								<router-link :to="{ name: 'signin'}" class="font-weight-bold">Sign In<br>My Account</router-link>
								
							</div>
							<router-link :to="{name:'cartReView'}" class="cart d-flex align-items-center pl-5">
							
								<span class="cart-count">
									<i class="mdi mdi-cart-outline"></i>
									<span class="count-num">{{this.$store.state.priceInfo.totalItem}}</span>
								</span>
								<div class="cash">
									
									My Cart <br>
									<span class="font-weight-bold">৳ {{(this.$store.state.priceInfo.totalPrice)-(this.$store.state.priceInfo.totalDiscount)}}</span>
								
								</div>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<!--form-->
			<div class="mobile-form" v-bind:class="{ show: isSearch }">
				<form role="form"  @submit.prevent="submitSearchForm">
					  <!-- <div class="input-group-prepend dropdown">
					    <span class="input-group-text dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Catagories</span>
					    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					        <a class="dropdown-item" href="#">Entertainment</a>
					        <a class="dropdown-item" href="#">Electronic</a>
					        <a class="dropdown-item" href="#">Packaging & Printing</a>
					      </div>
					  </div> -->
					  <input type="text" class="form-control" placeholder="Search Products" v-model="search_key">
					  <div class="input-group-append">
					  	<button type="submit" @click="searchProducts" class="btn btn-sm btn-danger">
						    <span class="input-group-text">
						    	<i class="mdi mdi-magnify"></i>
						    </span>
						</button>
					  </div>
				</form>
			</div>
			<!--/form-->
		</div>
		<!-- /main header-->
	</header>
	<!-- /header -->
</template>

<script>
export default {
    data() {
        return {
            logo: require('../assets/img/makeup-world-bd-logo.jpg'),
            appInfo:[],
            shopLogo:null,
            categories:[],
            isActive:false,
            search_key:null,
            searchFlag:false,
            isCollapse: false,
            isSearch: false
        }
	},
	methods: {
		handleSCroll(event) {
		let header = document.querySelector(".header");
		if (window.scrollY > 75 && !header.className.includes("header-fixed")) {
			header.classList.add("header-fixed");
		} else if (window.scrollY < 75) {
			header.classList.remove("header-fixed");
		}
		},
		submitSearchForm(e)
		{
			e.preventDefault();
			//this.$router.push('/');
			//this.$router.push({ name: 'product.search', params: { search_key: this.search_key } });
		},
		searchProducts()
		{
			if(this.searchFlag==false)
			{
					this.searchFlag=true;
					this.$router.push({ name: 'search.product', params: { search_key: this.search_key } });
			}
			else
			{
					this.searchFlag=false;
					this.$router.push({ name: 'product.search', params: { search_key: this.search_key } });
			}

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
		logOutFunction()
		{
			//alert(this.$store.state.userInfo.phone);
			let userPhone=this.$store.state.userInfo.phone;
			let token=this.$store.state.userInfo.token;
			let formData=new FormData();
			formData.append('userPhone',userPhone);
			formData.append('token',token);
			this.$http.post('logout',formData)
					.then(response=>{
					
						if(response.data.logOutStatus==true)
						{
							this.$store.commit('logoutFunction');
							this.$toaster.success(response.data.logOutMessage);
							location.reload();
						}
						else
						{
							this.$toaster.warning(response.data.logOutMessage);
						}
					})
					.catch(error=>{this.$toaster.warning('Something Went Wrong.Please Try Again Later.')})
					.finally(()=>'');
		}

	},
	created() {
		window.addEventListener("scroll", this.handleSCroll);
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleSCroll);
	},
	  mounted () {
	  	getAppInfo:{
			      this.$http.get('/appInfo')
			      .then(response => { this.appInfo=response.data.appInfo;})
			      .catch(error => {console.log(error) ; //this.errored = true;
			      })
			      .finally(() => '')
  		};
  		getCategory:{
			      this.$http.get('/category')
			      .then(response => {this.categories=response.data.responseData})
			      .catch(error => {console.log(error) ; //this.errored = true;
			      })
			      .finally(() => '')
  		}

  }
      
      //console.dir(this.$http.get('/discountProducts'));
//      alert(this.$ht
}
</script>

<style>

</style>