<template>
  <div>
    <h1>Event List</h1>
    <EventList v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
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
    this.$store.dispatch("fetchEvents");
  },
  computed: mapState(["events"])
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
