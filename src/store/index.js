import { createStore } from 'vuex'

import productModule from './modules/product.js';
import cartModule from './modules/cart.js';
import CheckoutModule from './modules/checkout.js';
export default createStore({
    state() {

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },
    modules: {
        prod: productModule,
        cart: cartModule,
        check: CheckoutModule
    }
})