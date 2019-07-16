import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: "i123",
      name: "ashutosh"
    },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
      { id: 3, text: "...", done: true },
      { id: 4, text: "...", done: false }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length;
    },
    getEventById: state => id => {
      return state.todos.find(event => event.id === id);
    }
  }
});
