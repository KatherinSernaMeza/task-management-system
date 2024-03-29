<template>
  <v-app dark>
    <MoleculesNavigationDrawer
      :drawer="drawer"
      :miniVariant="miniVariant"
      :clipped="clipped"
      :items="items"
    />
    <MoleculesAppBar @drawer-emit="handleDrawer" />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <MoleculesFooter />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Tasks",
          to: "/tasks",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Task management system",
    };
  },
  methods: {
    handleDrawer(val) {
      this.drawer = val;
    },
  },
};
</script>
