<template>
		<tr>
			<td class="item-img">
				<img :src="productImage" :alt="productName">
			</td>
			<td class="item-name font-weight-bold">
				{{productName}}
			</td>
			<td class="quantity">
				<input type="text"  min="1" class="text-center border rounded p-2" style="width: 50px"  v-model="productQuantity">
			</td>
			<td class="price font-weight-bold">৳ {{productPrice*productQuantity}}</td>
			<td class="discount font-weight-bold">৳ {{productDiscount*productQuantity}}</td>
			<td class="subtotal font-weight-bold">৳ {{(productPrice*productQuantity)-(productDiscount*productQuantity)}}</td>
			<td class="remove text-center">
				<a class="btn btn-sm" @click="updateCartQuantity(productIndex,productId)">
					<i class="mdi mdi-refresh" style="font-size:24px; color:#1ef; font-weight:bolder;"></i>
				</a>
				<a class="btn btn-sm" @click="$store.commit('removeFromCart',productIndex)">
					<i class="mdi mdi-close" style="font-size:24px; color:red; font-weight:bolder;"></i>
				</a>
			</td>
		</tr>
</template>
<script>
export default {
  name: "cartProductReview",
  props: {
    proId: Number,
    proIndex: Number,
    proQuantity: String,
    proName: String,
    proDiscount: String,
    proPrice: String,
    proImage: String,
  },
  data() {
    return {
      productId: this.proId,
      productIndex: this.proIndex,
      productQuantity: this.proQuantity  ,
      productName: this.proName,
      productDiscount: this.proDiscount,
      productPrice: this.proPrice,
      productImage: this.proImage,
    };
  },
  methods:{
  	updateCartQuantity:function(index,productId)
    	{
    		
    		
    		let formData = new FormData();
            formData.append('productId',  this.productId);
            formData.append('quantity',  this.productQuantity);
           this.$http.post('product/addToCart',formData)
            .then(response => {
                      if(response.data.addToCartFlag==true)
                       {
              
                          this.$store.commit('updateCartQuantity', response.data.cartInfo);
                          this.$toaster.success('Cart Updated Successfully.');
                        }
                      else
                        { 
                          this.$toaster.warning(response.data.lessQuantity);
                          this.$toaster.warning('Failed To Update Cart');
                        }
             })
            .catch(error => {console.log(error) ; //this.errored = true;
            })
            .finally(() => '')
			
    	}
  }
};
</script>