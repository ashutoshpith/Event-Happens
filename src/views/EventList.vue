<template>
  <div>
    <h1>Event List</h1>
    <EventList />
    <BaseIcon />
  </div>
</template>

<script>
import EventList from "@/components/EventList.vue";
import axios from "axios";

export default {
  components: {
    EventList
  },
  created() {
    axios
      .get("http://localhost:3000/events") // Does a get request
      .then(response => {
        console.log(response.data); // For now, logs out the response
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
