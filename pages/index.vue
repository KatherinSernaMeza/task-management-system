<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-center justify-center text-center>
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
          <h1 class="mt-12">{{ TITLES.HOME }}</h1>
          <h2 class="font-weight-regular subtitle">{{ SUBTITLES.home }}</h2>
          <div class="background-image"></div>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import { TITLES, SUBTITLES } from "../assets/utilities/Constans";
import home from "../assets/styles/atoms/home.css";
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
      SUBTITLES,
    };
  },
};
</script>
