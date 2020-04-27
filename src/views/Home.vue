<template>
  <div class="home">
    
    <!-- main-->
    <main class="main">
      <Slider/>
      <!--products view-->
      <div class="products-view pt-5">
        <div class="container-wrapper">
          <div class="row">
            <SideProduct/>
            <div class="col-lg-9">
              <Depertment/>
              <DoubleFutureCard/>
              <NewArrival/>
            </div>
          </div>
        </div>
      </div>
      <!--/products view-->
    </main>
    <!-- /main-->
    
  </div>
</template>

<script>
//import NewArrivalVue from './element/NewArrival.vue';
import SideProduct from './element/SideProduct.vue';
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
   
   // AddToCart: () => import(/* webpackChunkName: "AddToCart" */ "@/components/AddToCart"),
    Slider: () => import(/* webpackChunkName: "Slider" */ "./element/Slider"),
    Depertment: () => import(/* webpackChunkName: "Depertment" */ "./element/Depertment"),
    DoubleFutureCard: () => import(/* webpackChunkName: "DoubleFutureCard" */ "./element/DoubleFutureCard"),
    NewArrival: () => import(/* webpackChunkName: "NewArrival" */ "./element/NewArrival"),
    SideProduct,
 

  }
}
</script>
