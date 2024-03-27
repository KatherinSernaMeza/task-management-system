<template>
  <v-navigation-drawer
    v-model="localDrawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <List :items="items" />
  </v-navigation-drawer>
</template>

<script>
import List from "../atoms/List.vue";
export default {
  components: { List },
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
