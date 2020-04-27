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
            <h3 class="mb-0">Checkout</h3>
          </div>
          <div class="col-lg-8">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent justify-content-end mb-0">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!--/page-banner-->
    <div class="page-content">
      <div class="container-wrapper">
        <!--Checkout-->
        <div class="checkout">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="title mb-0">Checkout</h2>
            </div>
            <div class="col-lg-12">
              <hr />
            </div>
          </div>
          <div class="row" v-if="formValidate">
            <div class="col-lg-12">
              <div class="alert alert-danger text-center"><strong>{{errmsg}}</strong></div>
            </div>
          </div>
          <div class="row">
                 <div class="col-lg-6">
                    <div class="row">
                          <div class="col-lg-12">
                            <div class="card card-body shadow-sm h-100">
                              <strong class="mb-3">Delivery Information</strong>
                              <table class="table">
                                  <tr>
                                      <td>Name</td>
                                      <td>
                                          <input type="text" name="name" v-model="customerName" placeholder="Enter Consumer Name" class="form-control">
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Phone</td>
                                      <td>
                                          <input type="text" name="name" v-model="customerPhone" placeholder="Enter Consumer Phone" class="form-control">
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Address</td>
                                      <td>
                                          <textarea v-model="addresss" placeholder="Enter Delivery Address" class="form-control"></textarea>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Note</td>
                                      <td>
                                          <textarea v-model="note" placeholder="Enter Note If Any" class="form-control"></textarea>
                                      </td>
                                  </tr>
                              </table>
                            </div>
                          </div>
                     </div>
                        <div class="row" style="margin-top:10px;">
                              <div class="col-lg-12">
                            <div class="card card-body shadow-sm h-100">
                              <strong class="mb-3">Choose Your Delivery Method</strong>
                              <table class="table">
                                <tr>
                                  <td>
                                    <input type="radio" name="radio" :v-model="dhaka" @click="updateDeliveryOption(dhaka)"/>
                                  </td>
                                  <td class="font-weight-bold">Dhaka</td>
                                  <td class="font-weight-bold">48 Hours</td>
                                  <td class="font-weight-bold">৳60.00</td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" name="radio" :v-model="outSideDhaka" @click="updateDeliveryOption(outSideDhaka)"/>
                                  </td>
                                  <td class="font-weight-bold">Outside Dhaka</td>
                                  <td class="font-weight-bold">3 Days</td>
                                  <td class="font-weight-bold">৳100.00</td>
                                </tr>
                                  
                              </table>
                            </div>
                          </div>
                        </div>
                 </div>
                   <div class="col-lg-6">
                        <!--Cart-->
                        <div class="cart">
                          <div class="card card-body shadow-sm h-100">
                            <strong class="mb-3">Product Review</strong>
                            <div class="table-responsive">
                              <table class="table table-bordered">
                                <tr class="bg-light">
                                  <th colspan="2">Product</th>
                                  <!-- <th>Name</th> -->
                                  <th>Quantity</th>
                                  <th>Price</th>
                                  <th>Discount</th>
                                  <th>Sub Total</th>
                                </tr>
                                  <tr v-for="(productInfo, index) in this.$store.state.cart" :key="index">
                                    <td class="item-img">
                                      <img :src="productInfo.productImage" :alt="productInfo.name">
                                    </td>
                                    <td class="item-name font-weight-bold">{{productInfo.name}}</td>
                                    <td class="quantity">{{productInfo.quantity}}</td>
                                    <td class="price font-weight-bold">{{productInfo.price*productInfo.quantity}}</td>
                                    <td class="discount font-weight-bold">{{productInfo.discount*productInfo.quantity}}</td>
                                    <td class="subtotal font-weight-bold">{{(productInfo.price*productInfo.quantity)-(productInfo.discount*productInfo.quantity)}}</td>
                                  </tr>
                                  <tr>
                                    <th class="text-right" colspan="5">Total Price</th>
                                    <th class="text-right">৳ {{this.$store.state.priceInfo.totalPrice | formatNumberWithDecimal}}</th>
                                  </tr>
                                  <tr>
                                    <th class="text-right" colspan="5">Total Discount</th>
                                    <th class="text-right">৳ {{this.$store.state.priceInfo.totalDiscount | formatNumberWithDecimal}}</th>
                                  </tr>
                                  <tr>
                                    <th class="text-right" colspan="5">Delivery Charge</th>
                                    <th class="text-right">৳ {{deliveryCharge | formatNumberWithDecimal}}</th>
                                  </tr>
                                  <tr>
                                    <th class="text-right" colspan="5">Grand Total</th>
                                    <th class="text-right">
                                      ৳ {{((this.$store.state.priceInfo.totalPrice+deliveryCharge)-(this.$store.state.priceInfo.totalDiscount)) | formatNumberWithDecimal}}
                                    </th>
                                  </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                        <!--/Cart-->
                        <div class="row" style="margin-top:10px;">
                          <div class="col-lg-12">
                            <div class="card card-body shadow-sm h-100">
                              <strong class="mb-3">Choose Your Payment Method</strong>
                              <table class="table mb-2">
                                <tr>
                                  <td>
                                    <input type="radio" name="paymethod"  @click="updatePaymentMethod(0)" />
                                  </td>
                                  <td class="font-weight-bold">
                                    <img v-for="(item, item_index) in payment" :key="item_index" :src="item.pay" :alt="item.alt">
                                    
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" name="paymethod" @click="updatePaymentMethod(0)" />
                                  </td>
                                  <td class="font-weight-bold">Pay with cash on delivery</td>
                                </tr>
                              </table>

                              <a href="#" class="btn btn-success">Confirm Order</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

        </div>
        <!--/Checkout-->
      </div>
    </div>
  </main>
  <!-- /main-->
</template>
<script>
export default {
  data(){
    return{
       payment:[
                {pay: require('../assets/img/payment/maestro.png'), alt: 'maestro'},
                {pay: require('../assets/img/payment/mastercard.png'), alt: 'mastercard'},
                {pay: require('../assets/img/payment/paypal.png'), alt: 'paypal'},
                {pay: require('../assets/img/payment/visa.png'), alt: 'visa'}
            ],
            deliveryCharge:0,
            dhaka:60,
            outSideDhaka:100,
            formValidate:false,
            errmsg:null,
            customerName:null,
            customerPhone:null,
            addresss:null,
            note:null,
            cartInfo:[],
            paymentMethod:null,
    }
  },
  methods:{
    updateDeliveryOption(charge)
    {
      this.deliveryCharge=charge;
    },
    updatePaymentMethod(payMethod)
    {
        this.paymentMethod=payMethod;
    }

  }
}
</script>
