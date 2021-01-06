export default {
    namespaced: true,
    state() {
        return {
            showModal: false,
            modalAmount: 1,
            timeout: "",
            mousestop: ""
        };
    },
    mutations: {
        checkoutModal: function(state) {
            state.showModal = true;
        },
        hideModal: function(state) {
            //hide modal and empty modal data
            state.showModal = false;
        },
        quantityChangeModal: function(state, payload) {
            if (payload.direction === "incriment") {
                state.modalAmount++;
            } else {
                state.modalAmount--;
                if (state.modalAmount <= 0) {
                    state.modalAmount = 1;
                }
            }
        },
    },
    actions: {
        checkoutModal(context, payload) {
            context.commit('checkoutModal', payload);
        },
        hideModal(context, payload) {
            context.commit('hideModal', payload);
        },
        quantityChangeModal(context, payload) {
            context.commit('quantityChangeModal', payload);
        }
    },
    getters: {
        showModal(state) {
            return state.showModal;
        },
        modalData(state) {
            return state.modalData;
        },
        modalAmount(state) {
            return state.modalAmount;
        },
        timeout(state) {
            return state.timeout;
        },
        mousestop(state) {
            return state.mousestop;
        }
    }
};