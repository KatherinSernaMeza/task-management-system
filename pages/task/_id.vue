<template>
  <v-container>
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
          <h1 class="mx-lg-auto">{{ TITLES.EDIT_TASK }}</h1>
          <OrganismsTaskForm
            :isLoading="isLoading"
            :task="task"
            :onSubmit="submitForm"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { TITLES } from "../../assets/utilities/Constans";
import { getTaskDetails, updateTask } from "~/services/tasks";

export default {
  /**
   * Main component for edit task.
   * Here the main logic and data used in the edit task are defined.
   * @component MyComponent
   */
  data() {
    return {
      TITLES,
      task: null,
    };
  },
  methods: {
    async getTaskDetails(id) {
      // Method to get task details
      this.task = (await getTaskDetails(this.$axios, id))[0];
    },
    // Method to update task details
    async submitForm(data) {
      try {
        const res = await updateTask(this.$axios, data);
        // Redirect to /taskDetails/id
        this.$router.push({
          path: `/taskDetails/${res.task.id}`,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  async mounted() {
    const taskId = this.$route.params.id;
    try {
      // Call the method to fetch task details when the component is mounted
      if (taskId) {
        await this.getTaskDetails(taskId);
      }
    } catch (error) {
      // Handling the error if the request fails
      console.error("Error while fetching tasks in the component:", error);
    }
  },
  computed: {
    //Validate and return if task exist
    isLoading() {
      return this.task === null;
    },
  },
};
</script>

<style></style>
