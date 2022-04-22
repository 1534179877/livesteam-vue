const state = {
    cardList: [],
}
const getters = {
    getCardList:(state) =>{
        return state.cardList
    }
}
const actions = {

}
const mutations = {
    setCardList(state, cardList){
        state.cardList = cardList
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}