<template>
  <v-card class="mx-auto my-8" elevation="16" max-width="100%">
    <v-card-item>
      <v-card-title> {{ taskTitle }} - {{ taskCompleted }} </v-card-title>
    </v-card-item>
    <v-card-item>
      <v-card-subtitle> {{ SUBTITLES.taskDescription }} </v-card-subtitle>
      <v-card-text>
        {{ taskDescription }}
      </v-card-text>
    </v-card-item>
    <v-card-item>
      <v-card-subtitle> {{ SUBTITLES.taskComments }} </v-card-subtitle>
      <v-card-text>
        {{ taskComments }}
      </v-card-text>
    </v-card-item>
    <v-card-item>
      <div class="d-flex justify-left ga-2">
        <AtomsChip v-for="(tag, index) in taskTags" :key="index">
          {{ tag }}
        </AtomsChip>
      </div>
    </v-card-item>
    <v-card-item>
      <v-card-subtitle> {{ SUBTITLES.taskDueDate }} </v-card-subtitle>
      <v-card-text>
        {{ taskDueDateAt }}
      </v-card-text>
    </v-card-item>
    <v-card-item>
      <v-card-subtitle> {{ SUBTITLES.taskcreated }} </v-card-subtitle>
      <v-card-text>
        {{ taskCreateAt }}
      </v-card-text>
    </v-card-item>

    <v-card-item>
      <v-card-subtitle> {{ SUBTITLES.taskUpdatedAt }} </v-card-subtitle>
      <v-card-text>
        {{ taskUpdated_at }}
      </v-card-text>
    </v-card-item>
  </v-card>
</template>

<script>
import { TITLES, SUBTITLES } from "../../assets/utilities/Constans";
export default {
  /**
   * Molecule component to display task details.
   * @component taskDetailsCard
   */
  name: "taskDetailsCard",
  data() {
    return {
      TITLES,
      SUBTITLES,
    };
  },
  /**
   * Props of the task details card component
   * @typedef {Object} Props
   *
   */
  props: {
    //Set Title taks
    taskTitle: {
      type: String,
      default: "",
    },
    // Set status task completed
    taskCompleted: {
      type: String,
      default: "",
    },
    // Set description of task
    taskDescription: {
      type: String,
      default: "",
    }, //Set comments task
    taskComments: {
      type: String,
      default: "",
    }, //Set tags task
    taskTags: {
      type: Array,
      default: "",
    }, //Set due date task
    taskDueDateAt: {
      type: String,
      default: "",
    }, //Set date created task
    taskCreateAt: {
      type: String,
      default: "",
    }, //Set last updated task
    taskUpdated_at: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
