export default {
    namespaced: true,
    state() {
        return {
            showCart: false
        };
    },
    mutations: {
        showCart(state) {
            if (state.showCart === false) {
                state.showCart = true;
            } else {
                state.showCart = false;
            }
        },
    },
    actions: {
        showCart(context, payload) {
            context.commit('showCart', payload);
        }
    },
    getters: {
        showCart(state) {
            return state.showCart;
        }
    }
};