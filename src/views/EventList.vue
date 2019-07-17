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

export default {
  components: {
    EventList
  },
  created() {
    this.$store.dispatch("event/fetchEvents", {
      perPage: 3,
      page: this.page
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(["event", "user"])
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
