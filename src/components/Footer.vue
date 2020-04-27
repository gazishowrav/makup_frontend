<template>
    <!--Footer-->
	<footer class="footer mt-3">
		<!--footer top-->
		 <div class="footer-top py-5">
			<div class="container-wrapper">
				<div class="row">
					<div class="col-lg-6">
					
						<div class="footer-menu">
							<div class="row">
								<div class="col-lg-4">
									<h4>Help</h4>
									<ul class="nav flex-column footer-menu">
										<li><a href="#" class="nav-link">Payments</a></li>
										<li><a href="#" class="nav-link">Shipping</a></li>
										<li><a href="#" class="nav-link">Cancellation</a></li>
										<li><a href="#" class="nav-link">FAQ</a></li>
										<li><a href="#" class="nav-link">Report Infringement</a></li>
									</ul>
								</div>
								<div class="col-lg-4">
									<h4>Policy</h4>
									<ul class="nav flex-column footer-menu">
										<li><a href="#" class="nav-link">Return Policy</a></li>
										<li><a href="#" class="nav-link">Terms Of Use</a></li>
										<li><a href="#" class="nav-link">Security</a></li>
										<li><a href="#" class="nav-link">Privacy</a></li>
										<li><a href="#" class="nav-link">Sitemap</a></li>
									</ul>
								</div>
								<div class="col-lg-4">
									<h4>About</h4>
									<ul class="nav flex-column footer-menu">
										<li><a href="#" class="nav-link">Contact Us</a></li>
										<li><a href="#" class="nav-link">About Us</a></li>
										<li><a href="#" class="nav-link">Careers</a></li>
										<li><a href="#" class="nav-link">Flipkart Stories</a></li>
										<li><a href="#" class="nav-link">Press</a></li>
									</ul>
								</div>
							</div>
						</div>
						
					</div>
					<div class="col-lg-6 border-left">
						
						<div class="address">
							<div class="row">
								<div class="col-lg-6"></div>
								<div class="col-lg-6">
									<h4>Contact Us</h4>
									<ul class="nav address-nav">
										<li class="nav-item">
											<div class="nav-link d-flex align-items-center">
												<span class="mdi mdi-map-marker-radius"></span>
												<p>{{appInfo.address}}</p>
											</div>
										</li>
										<li class="nav-item">
											<div class="nav-link d-flex align-items-center">
												<span class="mdi mdi-headset"></span>
												<p>{{appInfo.phone}}</p>
											</div>
										</li>
										<li class="nav-item">
											<div class="nav-link d-flex align-items-center">
												<span class="mdi mdi-email-open-outline"></span>
												<p>{{appInfo.email}}</p>
											</div>
										</li>
									</ul>
								</div>
								<!--
								<div class="col-lg-6">
									 <h4>Subscribe Now</h4>
									<div class="subscribe-box">
										<p>Subscribe to our newsletterget 10% off your first purchase at here for update.</p>
										<form action="#">
											<div class="input-group mb-3">
											  	<input type="text" class="form-control shadow-none" placeholder="Type your email...">
												<div class="input-group-prepend">
											    	<span class="input-group-text"><i class="fab fa-telegram-plane"></i></span>
											  	</div>
											</div>
										</form>
									</div>  
								</div>
							-->
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div> 
		<!--footer top-->
		<!--footer bottom-->
		<div class="footer-bottom">
			<div class="container-wrapper">
				<div class="row align-items-center no-gutters">
					<!-- <div class="col-lg-4">
						<ul class="nav footer-bottom-menu">
							<li class="nav-item"><a href="#" class="nav-link">Specials</a></li>
							<li class="nav-item"><a href="#" class="nav-link">Affiliates</a></li>
							<li class="nav-item"><a href="#" class="nav-link">Special Discount</a></li>
							<li class="nav-item"><a href="#" class="nav-link">Brands</a></li>
						</ul>
					</div> -->
					<div class="col-lg-4 ">
						<span class="copyright-text">Copyright © {{'2020'|formatYear}} {{appInfo.name}}</span>
					</div>
					<div class="col-lg-4"></div>
					<div class="col-lg-4">
						<ul class="nav justify-content-end payment-card">
							<li v-for="(item, item_index) in payment" :key="item_index">
								<img :src="item.pay" :alt="item.alt">
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--footer bottom-->
	</footer>
	<!--/Footer-->
</template>

<script>
export default {
    data() {
        return {
            payment:[
                {pay: require('../assets/img/payment/maestro.png'), alt: 'maestro'},
                {pay: require('../assets/img/payment/mastercard.png'), alt: 'mastercard'},
                {pay: require('../assets/img/payment/paypal.png'), alt: 'paypal'},
                {pay: require('../assets/img/payment/visa.png'), alt: 'visa'}
            ],
            appInfo:[]
        }
    },
    mounted () {
      this.$http.get('/appInfo')
      .then(response => {
      		this.appInfo=response.data.appInfo;
      })
      .catch(error => {
        //  console.log(error)
        //  this.errored = true
      })
      .finally(() => '')
      
      //console.dir(this.$http.get('/discountProducts'));
//      alert(this.$http.get('/'));
    }
   
}
</script>

<style>

</style>