export const state = () => ({
  username: ""
});

export const actions = {
  nuxtServerInit({ commit }, context) {
    if (context.req.session) {
      commit("set_name", context.req.session.username);
    }
  } //服务端默认调用此方法
};

export const mutations = {
  set_name(state, username) {
    state.username = username;
  }
};

export const getter = {};
