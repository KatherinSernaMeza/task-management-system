<template>
  <v-form @submit.prevent @keyup.enter.prevent>
    <v-row>
      <v-col cols="12">
        <AtomsTextField
          :title="formData.title"
          :label="FORM_TASK_INPUT.title"
          @update:title="updateTitle"
        />
      </v-col>
      <v-col cols="12">
        <AtomsCheckBox
          :completed="formData.is_completed"
          @update:completed="updateCompleted"
          :label="FORM_TASK_INPUT.completed"
        />
      </v-col>
      <v-col cols="12">
        <AtomsDatePicker
          :completed="formData.due_date"
          @update:dueDate="updateDueDate"
          :label="FORM_TASK_INPUT.dueDate"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="formData.due_date"
          :label="FORM_TASK_INPUT.dueDate"
          type="date"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="tagInput"
          :label="FORM_TASK_INPUT.tags"
          @keyup.enter="addTag"
        />
        <v-chip
          v-for="(tag, index) in tagsArray"
          :key="index"
          close
          @click:close="removeTag(index)"
        >
          {{ tag }}
        </v-chip>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="formData.comments"
          :label="FORM_TASK_INPUT.comments"
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="formData.description"
          :label="FORM_TASK_INPUT.description"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-btn @click="onSubmit({ ...formData })" color="primary">Guardar</v-btn>
  </v-form>
</template>

<script>
import { FORM_TASK_INPUT } from "../../assets/utilities/Constans";
export default {
  /**
   * Molecule component to display Form task.
   * @component form
   */

  name: "form",
  props: {
    task: {
      type: Object,
      default: () => ({
        title: "",
        is_completed: false,
        due_date: null,
        comments: "",
        description: "",
        tags: "",
      }),
    },
    onSubmit: {
      type: Function,
    },
  },
  data() {
    return {
      formData: {
        ...this.task,
      },
      tagInput: "", // Input field for adding tags
      tagsArray: this.task.tags.length ? this.task.tags.split(",") : [], // Arreglo para almacenar los tags ingresados
      FORM_TASK_INPUT,
    };
  },
  methods: {
    addTag() {
      //Add a new tag in the task input.
      if (this.tagInput && !this.tagsArray.includes(this.tagInput)) {
        // Agrega la nueva tag a la cadena de tags y agrega coma
        this.tagsArray.push(this.tagInput);
        this.formData.tags = this.tagsArray.join(",");
        this.tagInput = ""; // se resetea el input
      }
    },
    removeTag(index) {
      //Remove the tag.
      const tags = this.tagsArray.filter((tag, i) => i !== index);
      this.tagsArray = tags;
      this.formData.tags = tags.join(",");
    },
    updateTitle(newTitle) {
      // Method handling the event emitted by title.
      this.formData.title = newTitle;
    },
    updateCompleted(val) {
      // Method that handles the event emitted by completed.
      this.formData.is_completed = val;
    },
    updateDueDate(val) {
      // Method that handles the event emitted by due_date.
      this.formData.due_date = val;
    },
  },
};
</script>

<style></style>
