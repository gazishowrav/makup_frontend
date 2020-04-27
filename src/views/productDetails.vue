<template>
  <div class="products-details">
    <!--page-banner-->
    <div class="page-banner py-3">
      <div class="container-wrapper">
        <span class="shape"></span>
        <span class="shape2"></span>
        <span class="shape3"></span>
        <div class="row align-items-center">
          <div class="col-lg-4">
            <h3 class="mb-0">Products Details</h3>
          </div>
          <div class="col-lg-8">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent justify-content-end mb-0">
                <li class="breadcrumb-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Products Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!--/page-banner-->
    <div class="page-content">
      <div class="container-wrapper">
        <!--Product Details-->
        <div class="product-details">
          <div class="row">
            <div class="col-lg-9">
              <div class="card card-body shadow-sm">
                <div class="row">
                  <div class="col-lg-5">
                    <img :src="productInfo.product_image.name" :alt="productInfo.name" />
                  </div>
                  <div class="col-lg-7">
                    <h3>{{productInfo.name}}</h3>
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
                    <p>{{productInfo.details}}</p>
                    <div class="quantity mb-3">
                      <input
                        type="text"
                        value="1"
                        min="1"
                        class="text-center border rounded p-2"
                        style="width: 50px"
                        v-model="productQuantity"
                      />
                      <button type="submit" class="btn btn-dark" v-on:click="specificProductAddToCart(productInfo.id)">
                        
                        <i class="mdi mdi-cart pr-1"></i>Add to cart
                      </button>
                    </div>
                   <!--  <p class="mb-1">
                      <strong>SKU:</strong> {{productInfo.pro_model}}
                    </p>
                    <p class="mb-1">
                      <strong>Categories:</strong> Clothings, Men
                    </p>
                    <p class="mb-1">
                      <strong>Tags:</strong> iPad Cases, Summer, Tattoo Supplies
                    </p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card shadow-sm mb-3" v-for="(banner,index) in banners" v-if="index==1">
                <router-link :to="{ name: 'category', params: { categoryUrl: banner.category.category_url }}">
                   <img class="rounded" :src="banner.name" :alt="banner.category.name" />
              </router-link>
              </div>
            </div>
          </div>
        </div>
        <!--/Product Details-->
        <!--Spacial Products-->
        <br><br>
        <div class="special-products">
          <div class="row">
            <div class="col-lg-3">
              <div class="card shadow-sm mb-3" v-for="(banner,index) in banners" v-if="index==2">
                <router-link :to="{ name: 'category', params: { categoryUrl: banner.category.category_url }}">
                   <img class="rounded" :src="banner.name" :alt="banner.category.name" />
              </router-link>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-lg-12">
                  <h2 class="title mb-0">Related Products</h2>
                </div>
                <div class="col-lg-12">
                  <hr />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3" v-for="(relatedProduct,index) in relatedProducts">
                  <div class="card card-body d-block">
                    <a  class="img-box" v-on:click="loadProductDetails(relatedProduct.pro_url)">
                      <img :src="relatedProduct.product_image.name" :alt="relatedProduct.name" />
                    </a>
                   <!--  <ul class="nav rating">
                      <li>
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li>
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li>
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li>
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li>
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul> -->
                    <a  v-on:click="loadProductDetails(relatedProduct.pro_url)">
                      <h3>{{relatedProduct.name}}</h3>
                    </a>
                    <div class="position-relative">
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
                      <div class="addcart-box">
                       <AddToCart :pId="relatedProduct.id"></AddToCart>
                       <!--  <a href="#">
                          <i class="mdi mdi-heart"></i>
                        </a>
                        <a href="product-details.html">
                          <i class="mdi mdi-eye"></i>
                        </a>
                        <a href="#">
                          <i class="mdi mdi-content-copy"></i>
                        </a> -->
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
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data(){
    return{
      productInfo:[],
      banners:[],
      
      productUrl:null,
      relatedProducts:[],
      productQuantity:1,
    }
  },
  
  mounted() {
    this.productUrl = this.$route.params.productUrl;
    getProductDetails: {
      this.$http
        .get("product/details/" + this.productUrl)
        .then(response => {
          this.productInfo=response.data.productInfo;
          this.banners=response.data.banners;
          this.relatedProducts=response.data.relatedProducts;
        })
        .catch(error => {
          "";
        })
        .finally(() => "");
    }
  },
  methods: {
    loadProductDetails: function (proUrl) {
        this.$router.push({ name: 'product.details', params: { productUrl:proUrl } });
           this.$http
            .get("product/details/" +proUrl)
            .then(response => {
              this.productInfo=response.data.productInfo;
              this.banners=response.data.banners;
              this.relatedProducts=response.data.relatedProducts;
            })
            .catch(error => {
              "";
            })
            .finally(() => "");
    },
    discountDateCheck(value)
      {
        var discountDate = moment(value);//Date format
        var today = moment();

        var isAfter = moment(discountDate).isAfter(today);
        return isAfter;
      },
      specificProductAddToCart(productId){
            let formData = new FormData();
            formData.append('productId',  productId);
            formData.append('quantity',  this.productQuantity);
           this.$http.post('product/addToCart',formData)
            .then(response => {
                      if(response.data.addToCartFlag==true)
                       {
                           //let obj=response.data.productInfo;
                         //  this.item=productFilter(obj);
                          this.$store.commit('addToCart', response.data.cartInfo);
                          this.$toaster.success('Added To Cart');
                        }
                      else
                        { 
                          this.$toaster.warning('Failed To Add To Cart.')
                        }
             })
            .catch(error => {console.log(error) ; //this.errored = true;
            })
            .finally(() => '')
    }
  }
};
</script>