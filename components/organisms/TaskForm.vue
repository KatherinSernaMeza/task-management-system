<template>
  <p v-if="isLoading">Cargando...</p>
  <v-row v-else class="mb-6" justify="center">
    <MoleculesForm :task="task" :onSubmit="onSubmit" />
  </v-row>
</template>

<script>
import { TITLES } from "../../assets/utilities/Constans";
export default {
  /**
   * Organisms component to display task form.
   * This component is composed of the MoleculesForm component
   * @component create
   */

  /**
   * Props of the task form page component
   * @typedef {Object} Props
   *
   */
  props: {
    task: {
      type: Object,
      default: () => ({
        title: "",
        is_completed: false,
        due_date: null,
        comments: "",
        description: "",
        tags: "",
      }),
    },
    onSubmit: {
      type: Function,
    },
    isLoading: Boolean,
  },
  data() {
    return {
      TITLES,
    };
  },
};
</script>
