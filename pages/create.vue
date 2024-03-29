<template>
  <v-row>
    <v-col
      class="pa-6 mx-lg-auto"
      xxl="6"
      xl="6"
      lg="8"
      md="12"
      sm="12"
      xs="12"
      cols="12"
    >
      <div class="primary">..</div>
      <v-card class="pl-12 pr-12 pt-6 pb-6">
        <h1 class="mx-lg-auto">{{ TITLES.CREATE }}</h1>
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
