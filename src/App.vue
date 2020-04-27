<template>
  <div id="app">
  	<Header/>
    <router-view/>
    <Footer/>
   <CartView/>
  </div>
</template>
<script>

export default {
	 components:{
	 	CartView: () => import(/* webpackChunkName: "AddToCard" */ "./components/CartView"),
	 	 Header: () => import(/* webpackChunkName: "Header" */ "./components/Header"),
    	Footer: () => import(/* webpackChunkName: "Footer" */ "./components/Footer"),
	 }
}
</script>