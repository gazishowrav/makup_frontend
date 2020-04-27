import Vue from 'vue';
import Vuex from 'vuex';
import numeral from "numeral";

Vue.use(Vuex);
Vue.use(numeral);

let cart = window.localStorage.getItem('cart');
let priceInfo = window.localStorage.getItem('priceInfo');
let userInfo = window.localStorage.getItem('userInfo');


export default new Vuex.Store({
    state: {
      cart: cart ? JSON.parse(cart) : [],
      priceInfo:priceInfo ? JSON.parse(priceInfo):[],
      userInfo:userInfo ? JSON.parse(userInfo):[],
      logged:userInfo ? JSON.parse(userInfo).loggedIn:false,
      // this.commit('insitiatData'),
    },

    getters: {
     /* totalPrice: state => {
        let total = 0;
        state.cart.filter((item) => {
            total += (item.productPrice * item.productQuantity);
        });

        return total;
      }
      */
    },

    mutations:{

      addToCart(state, item){

        //alert(item.productId);
        let found = state.cart.find(product => product.productId == item.productId );
          
        if(found){
            let proQuantity=parseInt(found.quantity)+parseInt(item.quantity); 
              proQuantity=numeral(proQuantity).format('0.00');
              
              found.quantity=proQuantity;
           // this.commit()
        }else{
          state.cart.push(item);
        }

        this.commit('saveData');

      },

      saveData(state){
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
        this.commit('saveTotalPriceAndDiscount');
      },

      removeFromCart(state, index){

          //let index = state.cart.indexOf(item);
          state.cart.splice(index,1);

        this.commit('saveData');

      },

      saveTotalPriceAndDiscount(state){
         let cartInfos=state.cart;
         let price=0;
         let discount=0;
         let totalItem=0;
         console.dir(cartInfos)
         cartInfos.forEach(cartInfo=>{
             totalItem++;
            price=price+(parseFloat(cartInfo.price)*parseFloat(cartInfo.quantity));
            discount=discount+(parseFloat(cartInfo.discount)*parseFloat(cartInfo.quantity));
         })
        
         let priceInfos={
                totalPrice:price,
                totalDiscount:discount,
                totalItem:totalItem,
         }
         //alert(priceInfos);
         //console.dir(priceInfos);
         state.priceInfo=priceInfos;
         window.localStorage.setItem('priceInfo', JSON.stringify(state.priceInfo));
         
      },
      insitiatData(state) {
        let priceInfos={
                totalPrice:0,
                totalDiscount:0,
                totalItem:0,
         }
         state.priceInfo=priceInfos;
         window.localStorage.setItem('priceInfo', JSON.stringify(state.priceInfo));
      },
      storeUserInfo(state,userData)
      {
        state.userInfo=userData;
        window.localStorage.setItem('userInfo', JSON.stringify(userData));  
      },
      logoutFunction(state)
      {
         state.userInfo=null;
        localStorage.clear();
        
      },
      updateCartQuantity(state,item){
        let found = state.cart.find(product => product.productId == item.productId );
        if(found){
            let proQuantity=item.quantity; 
              proQuantity=numeral(proQuantity).format('0.00');
              found.quantity=proQuantity;
        
        }else{
          state.cart.push(item);
        }

        this.commit('saveData');
      }


      


    }
    
  })