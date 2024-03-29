<template>
  <v-navigation-drawer
    v-model="localDrawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <AtomsNavList :items="items" />
  </v-navigation-drawer>
</template>

<script>
export default {
  /**
   * Molecule component navigation composed to AtomsNavList.
   * @component NavigationDrawer
   */
  name: "NavigationDrawer",
  data() {
    return {
      localDrawer: Boolean,
    };
  },

  /**
   * Props of the NavigationDrawer form page component
   * @typedef {Object} Props
   *
   */
  props: {
    items: Array,
    drawer: Boolean,
    miniVariant: Boolean,
    clipped: Boolean,
  },
  created() {
    this.localDrawer = this.drawer;
  },
  watch: {
    drawer: function (newVal) {
      this.localDrawer = newVal;
    },
  },
};
</script>

<style></style>
