<template>
  <div>
    <v-checkbox v-model="completedVal" :label="label" />
  </div>
</template>

<script>
export default {
  /**
   * CheckBox component.
   * Atom component to set completed.
   * @component DatePicker
   */
  props: ["completed", "label"],
  data() {
    return {
      // Using a local copy of the prop.
      completedVal: this.completed,
    };
  },
  watch: {
    completedVal(completedVal) {
      // Emit an event to notify the parent about the change."
      this.$emit("update:completed", completedVal);
    },
  },
};
</script>
