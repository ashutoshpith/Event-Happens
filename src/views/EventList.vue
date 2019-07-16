<template>
  <div>
    <h1>Event List</h1>
    <EventList v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>

<script>
import EventList from "@/components/EventList.vue";
import EventService from "@/services/EventService.js";

export default {
  components: {
    EventList
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response); // Logs out the error
      });
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
