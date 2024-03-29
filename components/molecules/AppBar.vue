<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <v-app-bar-nav-icon @click.stop="handleDrawer" />
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  /**
   * Molecule component AppBar.
   * @component AppBar
   */
  name: "AppBar",
  props: {
    title: String,
    drawer: Boolean,
    clipped: Boolean,
  },
  data() {
    return {
      localDrawer: Boolean,
    };
  },
  created() {
    this.localDrawer = this.drawer;
  },
  methods: {
    //Handle open/close nav
    handleDrawer() {
      this.localDrawer = !this.localDrawer;
      this.$emit("drawer-emit", this.localDrawer);
    },
  },
};
</script>

<style></style>
