<template>
  <v-row justify="center" align="center">
    <h1>{{ TITLES.HOME }}</h1></v-row
  >
</template>

<script>
import { TITLES } from "../assets/utilities/Constans";
export default {
  name: "IndexPage",
  data() {
    return {
      TITLES,
    };
  },
};
</script>
