<template>
  <v-container>
    <v-list>
      <nuxt-link
        class="ma-2"
        tag="v-list-item"
        v-for="task in tasks"
        :key="task.id"
        :to="'/taskDetails/' + task.id"
      >
        <v-list-item-content>
          <v-list-item-subtitle>
            {{ LIST_TASK.ID }} {{ task.id }}</v-list-item-subtitle
          >
          <v-list-item-title>
            {{ LIST_TASK.TITLE }} {{ task.title }}</v-list-item-title
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
          <nuxt-link :to="'/task/' + task.id">
            <v-btn icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </nuxt-link>

          <v-btn icon @click.stop="deleteTaskById(task.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </nuxt-link>
    </v-list>
  </v-container>
</template>

<script>
import { getTasks, deleteTask } from "~/services/tasks";
import { LIST_TASK } from "../../assets/utilities/Constans";
export default {
  /**
   * TaskList component.
   * Atom component  to display list of tasks.
   * @component TaskList
   */
  name: "taskList",
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
    async deleteTaskById(id) {
      // Logic for deleting the task
      const res = await deleteTask(this.$axios, id);
      await this.getTasks();
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
