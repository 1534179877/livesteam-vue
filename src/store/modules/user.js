const state = {
    userName:'testuser',
};

const getters = {
    getUserinfo:(state) => {
        return state.userName;
}
}
const actions = {

}

const mutations = {
    setUserInfo(state,userName){ //设置 用户信息
        state.userName = userName;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}