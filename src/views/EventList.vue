<template>
  <div>
    <h1>Event List for {{ user.user.name }}</h1>
    <EventList v-for="event in event.events" :key="event.id" :event="event" />
    <BaseIcon />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
      |
    </template>
    <router-link :to="{ name: 'event-list', query: { page: page + 1 } }"
      >Next Page</router-link
    >
  </div>
</template>

<script>
import EventList from "@/components/EventList.vue";
import { mapState } from "vuex";
import store from "@/store/store.js";

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1;
  store
    .dispatch("event/fetchEvents", {
      page: currentPage
    })
    .then(() => {
      routeTo.params.page = currentPage;
      next();
    });
}
export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    EventList
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  computed: {
    ...mapState(["event", "user"])
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
