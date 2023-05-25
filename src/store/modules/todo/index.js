export default {
  namespaced: true,
  state: () => ({
    todos: [],
  }),
  getters: {
    todos: state => {
      return state.todos;
    },
  },
  mutations: {
    CREATE(state, todo) {
      state.todos.push(todo);
    },
    UPDATE(state, id, todo) {
      state.todos = state.todos.map(d => (d.id === id ? { ...d, ...todo } : d));
    },
    DELETE(state, id) {
      state.todos = state.todos.filter(d => d.id !== id);
    },
  },
  actions: {
    create({ commit }, todo) {
      commit('CREATE', todo);
    },
    update({ commit }, id, todo) {
      commit('UPDATE', id, todo);
    },
    delete({ commit }, id) {
      commit('DELETE', id);
    },
  },
};
