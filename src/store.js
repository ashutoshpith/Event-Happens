import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

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
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then(response => {
          commit("SET_EVENTS", response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response); // Logs out the error
        });
    }
  },
  getters: {
    getEventById: state => id => {
      return state.todos.find(event => event.id === id);
    }
  }
});
