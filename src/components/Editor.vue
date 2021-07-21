<template>
  <v-container>
    <div v-for="field in fields" :key="field.name">
      <v-textarea :label="field.name" counter no-resize :rows="field.rows"></v-textarea>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: function () {
    return {
      fields: [
        { name: "title", rows: 3, value: "" },
        { name: "tags", rows: 5, value: "" },
        { name: "description", rows: 10, value: "" },
      ],
    };
  },
});
</script>