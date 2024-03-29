<template>
  <v-row justify="center" align="center">
    <h1>{{ TITLES.HOME }}</h1></v-row
  >
</template>

<script>
import { TITLES } from "../assets/utilities/Constans";
export default {
  /**
   * Main component for Home layout.
   * Here the main structure used in home.
   * @component home
   */
  name: "home",
  data() {
    return {
      TITLES,
    };
  },
};
</script>
