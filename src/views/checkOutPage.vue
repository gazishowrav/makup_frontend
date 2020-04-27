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
          <div class="row">
            <div class="col-lg-6">
              <div class="card card-body shadow-sm h-100">
                <strong class="mb-3">Choose Your Delivery Method</strong>
                <table class="table">
                  <tr>
                    <td>
                      <input type="radio" name="radio" />
                    </td>
                    <td class="font-weight-bold">Dhaka</td>
                    <td class="font-weight-bold">48 Hours</td>
                    <td class="font-weight-bold">৳60.00</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="radio" name="radio" />
                    </td>
                    <td class="font-weight-bold">Outside Dhaka</td>
                    <td class="font-weight-bold">3 Days</td>
                    <td class="font-weight-bold">৳100.00</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="radio" name="radio" />
                    </td>
                    <td class="font-weight-bold">Eastern Plaza</td>
                    <td class="font-weight-bold">Collection</td>
                    <td class="font-weight-bold">Free!</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card card-body shadow-sm h-100">
                <strong class="mb-3">Choose Your Payment Method</strong>
                <table class="table mb-2">
                  <tr>
                    <td>
                      <input type="radio" name="radio" />
                    </td>
                    <td class="font-weight-bold">
                      <img v-for="(item, item_index) in payment" :key="item_index" :src="item.pay" :alt="item.alt">
                      
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="radio" name="radio" />
                    </td>
                    <td class="font-weight-bold">Pay with cash on delivery</td>
                  </tr>
                </table>

                <a href="#" class="btn btn-success">Confirm Order</a>
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
		}
	}
}
</script>
