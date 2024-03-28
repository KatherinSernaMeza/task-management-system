<template>
  <v-container>
    <v-list>
      <nuxt-link
        tag="v-list-item"
        v-for="task in tasks"
        :key="task.id"
        :to="'/task/' + task.id"
      >
        <v-list-item-content>
          <v-list-item-subtitle>
            {{ LIST_TASK.ID }} {{ task.id }}</v-list-item-subtitle
          >
          <v-list-item-title
            >Title: {{ LIST_TASK.TITLE }} {{ task.title }}</v-list-item-title
          >
          <v-list-item-subtitle>
            {{ LIST_TASK.COMPLETED }}
            {{ task.is_completed ? "Sí" : "No" }}</v-list-item-subtitle
          >
          <v-list-item-subtitle
            >{{ LIST_TASK.DUE_DATE }} {{ task.due_date }}</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action
          style="display: flex; flex-direction: row; align-items: center"
        >
          <v-btn icon @click.stop="editTask(task)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click.stop="deleteTask(task)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </nuxt-link>
    </v-list>
  </v-container>
</template>

<script>
import { getTasks } from "~/services/tasks";
import { LIST_TASK } from "../../assets/utilities/Constans";
// Component to display list of tasks
export default {
  data() {
    return {
      tasks: [],
      dialog: false,
      selectedTask: {},
      LIST_TASK,
    };
  },
  methods: {
    openTaskDetails(task) {
      this.selectedTask = task;
      this.dialog = true;
    },
    editTask(task) {
      // Logic for editing the task
      console.log("Edit task:", task);
    },
    deleteTask(task) {
      // Logic for deleting the task
      console.log("Delete task:", task);
    },
    async getTasks() {
      // Method to get list of tasks
      this.tasks = await getTasks(this.$axios);
    },
  },
  async mounted() {
    try {
      await this.getTasks();
    } catch (error) {
      // Handling the error if the request fails
      console.error("Error while fetching tasks in the component:", error);
    }
  },
};
</script>
