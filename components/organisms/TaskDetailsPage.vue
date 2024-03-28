<template>
  <v-container>
    <h1>{{ TITLES.TASK }}</h1>
    <p v-if="isLoading">Cargando...</p>
    <p v-else-if="error">Error al cargar los datos: {{ error }}</p>
    <v-row v-else class="mb-6" justify="center">
      <v-col xxl="6" xl="6" lg="8" md="12" sm="12" xs="12" cols="12">
        <MoleculesTaskDetailsCard
          :taskTitle="taskTitle"
          :taskCompleted="taskCompleted"
          :taskDescription="taskDescription"
          :taskComments="taskComments"
          :taskTags="taskTags"
          :taskDueDateAt="taskDueDateAt"
          :taskCreateAt="taskCreateAt"
          :taskUpdated_at="taskUpdated_at"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { TITLES, SUBTITLES } from "../../assets/utilities/Constans";
export default {
  /**
   * Organisms component to display task details.
   * This component is composed of the MoleculesTaskDetailsCard component
   * @component TaskDetailsPage
   */
  name: "TaskDetailsPage",
  data() {
    return {
      TITLES,
      SUBTITLES,
      textChip: ["Peliculas", "casos reales", "terror"],
    };
  },
  /**
   * Props of the task details page component
   * @typedef {Object} Props
   *
   */
  props: {
    //Set loading status before gets task data.
    isLoading: {
      type: Boolean,
      default: true,
    },
    //Set if data task has error after load.
    error: {
      type: String,
      default: null,
    },
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
