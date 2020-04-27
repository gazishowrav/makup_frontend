 <template>
  <div >
        <button class="btn btn-primary" @click="addToCart"> 
        	<i class="mdi mdi-cart"></i>
        </button>
    
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  props: {
    pId: Number,
  },

  data(){
      return {
          productId: this.pId,
          productQuantity: 1,
          item :{
            productName: null,
            productImage: null,
            productPrice: null,
            productId: null,
            productQuantity: null,
            productDiscount:null,
            productLoyality:null,
          }
      }
  },
  methods:{
    addToCart(){
            let formData = new FormData();
            formData.append('productId',  this.productId);
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
                          this.$toaster.warning(response.data.lessQuantity);
                          this.$toaster.warning('Failed To Add Cart');
                        }
             })
            .catch(error => {console.log(error) ; //this.errored = true;
            })
            .finally(() => '')
    },
    

  }

};
</script>
