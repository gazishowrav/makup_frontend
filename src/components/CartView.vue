<template>
  <!--Add to Cart-->
  <div class="add-to-cart" v-bind:class="{ cartShow: isShortCart }">
  
      <!--Short cart-->
      <div class="short-cart" v-on:click="isShortCart = !isShortCart">
        <div class="cart-btn">
          <span class="quantity">
            <i class="mdi mdi-cart"></i>
            <span>({{this.$store.state.priceInfo.totalItem}}) Items</span>
          </span>
          <span class="price">৳ {{(this.$store.state.priceInfo.totalPrice)-(this.$store.state.priceInfo.totalDiscount)}}</span>
        </div>
      </div>
      <!--/Short cart-->
    
    <!--Details cart-->
    <div class="details-cart">
      <div class="cart-header">
        <div class="d-flex align-items-center justify-content-between">
          <div class="cart-btn d-flex align-items-center">
            <span class="mdi mdi-cart"></span>
            <span>({{this.$store.state.priceInfo.totalItem}}) Items</span>
          </div>
          <button
            type="button"
            class="close-cart"
            v-on:click="isShortCart = !isShortCart"
          >Close</button>
        </div>
      </div>
      <div class="cart-body">
        <!--list item-->
          <div class="list-item" v-for="(productInfo,index) in this.$store.state.cart" :key="index">
        <!-- <div class="list-item" v-for="(product, index) in products" :key="index"> -->
          <!-- <div class="sl">{{productInfo.productId}}</div> -->
          <div class="item-img">
            <img :src="productInfo.productImage" :alt="productInfo.name" />
          </div>
          <div class="item-name">
            {{productInfo.name}}
            <span>৳ {{productInfo.quantity}} X {{productInfo.price}}</span>
          </div>
          <div class="price">৳ {{(productInfo.price)*(productInfo.quantity)}}</div>
          <div class="remove">
            <a @click="$store.commit('removeFromCart',index)">
              <i class="mdi mdi-close"></i>
            </a>
          </div>
        </div>
        <!--/list item-->
      </div>
      <div class="cart-footer">
        <router-link :to="{name:'cartReView'}">
          <span class="btn btn-warning rounded-0">Place your order</span>
          <span class="btn btn-dark rounded-0">৳ {{(this.$store.state.priceInfo.totalPrice)-(this.$store.state.priceInfo.totalDiscount)}}</span>
        </router-link>
      </div>
    </div>
    <!--/Details cart-->
  </div>
  <!--/Add to Cart-->
</template>

<script>
export default {
  data() {
    return {
      isFullCart: false,
      isShortCart: false,

      products: [
        {
          id: 1,
          url: require("../assets/img/products/1-264x347.jpg"),
          name: "Accessories",
          quantity: "5",
          price: "900",
          total: "4500"
        },
        {
          id: 2,
          url: require("../assets/img/products/8-264x347.jpg"),
          name: "Induction",
          quantity: "3",
          price: "1000",
          total: "3000"
        }
      ]
    };
  }
};
</script>

<style>

.add-to-cart .short-cart {
  display: block;
}

.add-to-cart.cartShow .short-cart {
  display: none;
}

.add-to-cart .details-cart {
  display: none;
}
.add-to-cart.cartShow .details-cart {
  display: block;
}

/*.add-to-cart.cartShow .details-cart {
  display: block;
}
.close-cart.shortCartShow .details-cart {
  display: none;
}
.close-cart.shortCartShow .short-cart {
  display: block;
}*/
</style>