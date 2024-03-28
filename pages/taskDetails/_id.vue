<template>
  <v-container>
    <OrganismsTaskDetailsPage
      :isLoading="isLoading"
      :error="error"
      :taskTitle="taskTitle"
      :taskCompleted="taskCompleted"
      :taskDescription="taskDescription"
      :taskComments="taskComments"
      :taskTags="taskTags"
      :taskDueDateAt="taskDueDateAt"
      :taskCreateAt="taskCreateAt"
      :taskUpdated_at="taskUpdated_at"
    />
  </v-container>
</template>

<script>
import { getTaskDetails } from "~/services/tasks";
import { TITLES, SUBTITLES } from "../../assets/utilities/Constans";

export default {
  /**
   * Main component for task detail.
   * Here the main logic and data used in the task detail are defined.
   * @component MyComponent
   */
  name: "taskDetails",
  data() {
    return {
      task: [{ id: "", title: "" }],
      error: null,
      TITLES,
      SUBTITLES,
      textChip: ["Peliculas", "casos reales", "terror"],
      color: ["default", "primary", "secondary", "red", "green"],
    };
  },
  // Call the services tasks to fetch task details.
  methods: {
    async getTaskDetails(id) {
      // Method to get task details
      this.task = await getTaskDetails(this.$axios, id);
    },
  },

  computed: {
    //Validate and return if task exist
    isLoading() {
      return (
        this.task === null && Array.isArray(this.task) && this.error === null
      );
    },
    //Validate if task title exist
    isTaskTitle() {
      let taskTitle = this.task;
      if (
        taskTitle &&
        Array.isArray(taskTitle) &&
        taskTitle.length > 0 &&
        typeof taskTitle !== "undefined" &&
        taskTitle[0].title
      ) {
        return true;
      } else {
        return false;
      }
    },
    //Return task title value
    taskTitle() {
      return this.isTaskTitle ? this.task[0].title : "";
    },
    //Validate if completed task exist
    isCompletedTask() {
      let taskCompleted = this.task[0].is_completed;
      return taskCompleted && typeof taskCompleted !== "undefined"
        ? true
        : false;
    },
    //Return task completed value
    taskCompleted() {
      return this.isCompletedTask ? "Completado" : "Por completar";
    },
    //Validate if task description exist
    isDescriptionTask() {
      let taskDescription = this.task[0].description;
      return taskDescription && typeof taskDescription !== "undefined"
        ? true
        : false;
    },
    //Return task description value
    taskDescription() {
      return this.isDescriptionTask
        ? this.task[0].description
        : "... It's not description";
    },
    //Validate if task description exist
    isCommentTask() {
      let taskDescription = this.task[0].description;
      return taskDescription && typeof taskDescription !== "undefined"
        ? true
        : false;
    },
    //Return task comments value
    taskComments() {
      return this.isCommentTask
        ? this.task[0].comments
        : "... It's not comments";
    },
    //Validate if task tags exist
    isTagsTask() {
      let taskTags = this.task[0].tags;
      return taskTags && typeof taskTags !== "undefined" ? true : false;
    },
    //Return task due date At value
    taskTags() {
      return this.isTagsTask ? this.task[0].tags.split(",") : [];
    },
    //Validate if is due date At task exist
    isDueDateAtTask() {
      let taskDueDate = this.task[0].due_date;
      return taskDueDate && typeof taskDueDate !== "undefined" ? true : false;
    },
    //Return task due date At value
    taskDueDateAt() {
      return this.isDueDateAtTask ? this.task[0].due_date : "";
    },
    //Validate if created at task exist
    isCreatedAtTask() {
      let taskCreated_at = this.task[0].created_at;
      return taskCreated_at && typeof taskCreated_at !== "undefined"
        ? true
        : false;
    },
    //Return task create at value
    taskCreateAt() {
      return this.isCreatedAtTask ? this.task[0].created_at : "";
    },
    //Validate if update at task exist
    isUpdatedAtTask() {
      let taskCreated_at = this.task[0].created_at;
      return taskCreated_at && typeof taskCreated_at !== "undefined"
        ? true
        : false;
    },
    //Return task updated value
    taskUpdated_at() {
      return this.isUpdatedAtTask ? this.task[0].updated_at : "";
    },
  },
  /**
   * Initializes the component data.
   * @method initializeData
   */
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
};
</script>
