<template>
  <v-text-field
    v-model="tituloLocal"
    :rules="nameRules"
    :label="label"
    required
  ></v-text-field>
</template>

<script>
export default {
  /**
   * TextField component.
   * Atom component to reuse TextField component.
   * @component textfield
   */
  name: "textfield",
  props: ["title", "label"],
  data() {
    return {
      // Using a local copy of the prop.
      tituloLocal: this.title,
      nameRules: [
        (value) => {
          if (value) return true;

          return "Name is required.";
        },
      ],
    };
  },
  watch: {
    tituloLocal(tituloLocal) {
      // Emit an event to notify the parent about the change."
      this.$emit("update:title", tituloLocal);
      console.log(tituloLocal, "tituloLocal");
    },
  },
};
</script>
