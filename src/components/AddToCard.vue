<template>
  <!--Add to Cart-->
  <div class="add-to-cart" v-bind:class="{ cartShow: isShortCart }">
  
      <!--Short cart-->
      <div class="short-cart" v-on:click="isShortCart = !isShortCart">
        <div class="cart-btn">
          <span class="quantity">
            <i class="mdi mdi-cart"></i>
            <span>(12) Items</span>
          </span>
          <span class="price">৳ 7980.00</span>
        </div>
      </div>
      <!--/Short cart-->
    
    <!--Details cart-->
    <div class="details-cart">
      <div class="cart-header">
        <div class="d-flex align-items-center justify-content-between">
          <div class="cart-btn d-flex align-items-center">
            <span class="mdi mdi-cart"></span>
            <span>(12) Items</span>
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
        <div class="list-item" v-for="(product, index) in products" :key="index">
          <div class="sl">{{product.id}}</div>
          <div class="item-img">
            <img :src="product.url" alt="..." />
          </div>
          <div class="item-name">
            {{product.name}}
            <span>৳ {{product.quantity}} X {{product.price}}</span>
          </div>
          <div class="price">৳ {{product.total}}</div>
          <div class="remove">
            <i class="mdi mdi-close"></i>
          </div>
        </div>
        <!--/list item-->
      </div>
      <div class="cart-footer">
        <a href="#">
          <span class="btn btn-warning rounded-0">Place your order</span>
          <span class="btn btn-dark rounded-0">৳ 7500.00</span>
        </a>
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