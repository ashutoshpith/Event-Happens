<template>
  <div>
    {{ user.name }} {{ user.id }}
    <ul>
      <li v-for="cat in categories" :key="cat">
        {{ cat }}
      </li>
    </ul>
    {{ getEventById(2) }}
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["user", "categories"]),
    ...mapGetters(["getEventById"])
  }
};
</script>

<style lang="scss" scoped></style>
