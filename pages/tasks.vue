<template>
  <v-row>
    <v-col>
      <h1>{{ TITLES.TASKS }}</h1>
      <AtomsTaskList />
    </v-col>
  </v-row>
</template>

<script>
import { TITLES } from "../assets/utilities/Constans";
export default {
  name: "InspirePage",
  data() {
    return {
      TITLES,
    };
  },
};
</script>
