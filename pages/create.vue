<template>
  <v-row>
    <v-col>
      <v-card class="pa-6 mx-lg-auto">
        <h1>{{ TITLES.CREATE }}</h1>
        <OrganismsTaskForm :onSubmit="submitForm" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { TITLES } from "../assets/utilities/Constans";
import { createTask } from "~/services/tasks";

export default {
  /**
   * Main component for task create.
   * Here the main structure and request used in the task create.
   * @component create
   */
  name: "create",
  data() {
    return {
      TITLES,
    };
  },
  methods: {
    // Call the services tasks to fetch create task.
    async submitForm(data) {
      try {
        // Method to post task create
        const res = await createTask(this.$axios, data);
        // Redirect to /taskDetails/id
        this.$router.push({
          path: `/taskDetails/${res.task.id}`,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
