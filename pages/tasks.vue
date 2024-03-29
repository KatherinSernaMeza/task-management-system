<template>
  <v-row>
    <v-col>
      <v-card class="pa-6 mx-lg-auto">
        <h1 class="ma-6">{{ TITLES.TASKS }}</h1>
        <nuxt-link class="ml-6" to="/create">
          <v-btn outlined>Create</v-btn>
        </nuxt-link>
        <AtomsTaskList />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { TITLES } from "../assets/utilities/Constans";
export default {
  /**
   * Main component for tasks layout.
   * Here the main structure used in tasks.
   * @component tasks
   */
  name: "tasks",
  data() {
    return {
      TITLES,
    };
  },
};
</script>
