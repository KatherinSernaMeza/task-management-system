<template>
  <v-date-picker v-model="duedatedVal" :label="label" />
</template>

<script>
export default {
  /**
   * DatePicker component.
   * Atom component to set due date.
   * @component DatePicker
   */
  name: "datepicker",
  props: ["dueDate", "label"],
  data() {
    return {
      // Using a local copy of the prop.
      duedatedVal: this.dueDate,
    };
  },
  watch: {
    duedatedVal(duedatedVal) {
      // Emit an event to notify the parent about the change."
      this.$emit("update:dueDate", duedatedVal);
      console.log(duedatedVal, "duedatedVal");
    },
  },
};
</script>
