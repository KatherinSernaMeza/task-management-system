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
  props: {
    items: Array,
    drawer: Boolean,
    miniVariant: Boolean,
    clipped: Boolean,
  },
  data() {
    return {
      localDrawer: Boolean,
    };
  },
  created() {
    this.localDrawer = this.drawer;
    console.log(this.localDrawer);
  },
  watch: {
    drawer: function (newVal) {
      this.localDrawer = newVal;
    },
  },
};
</script>

<style></style>
