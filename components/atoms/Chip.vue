<template>
  <v-chip :color="color">
    <!-- Utiliza una ranura (slot) para contenido adicional -->
    <slot />
    <template v-if="hasIcon">
      <v-icon>{{ icon }}</v-icon>
    </template>
  </v-chip>
</template>

<script>
export default {
  /**
   * Chip component.
   * Atom component to reuse chip component.
   * @component MyComponent
   */
  data() {
    return {
      hasIcon: false,
    };
  },
  /**
   * Props of the Chip component
   * @typedef {Object} Props
   *
   */
  props: {
    color: {
      type: String,
      default: "primary",
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
