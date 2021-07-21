<template>
  <v-container>
    <div v-for="field in fields" :key="field.name">
      <v-textarea :label="field.name" counter no-resize :rows="field.rows" v-model="field.value"></v-textarea>
    </div>

    <h2 draggable="true" @dragstart="inject">Export</h2>
  </v-container>
</template>

<script lang="ts">
// const fs = require("fs-extra");
// const path = require("path");
/* eslint-disable */
declare const window: any;
const { ipcRenderer } = require("electron");
window.ipcRenderer = ipcRenderer;
import Vue from "vue";
export default Vue.extend({
  name: "Editor",
  data: function () {
    return {
      fields: [
        { name: "title", rows: 3, value: "" },
        { name: "tags", rows: 5, value: "" },
        { name: "description", rows: 10, value: "" },
      ],
    };
  },
  methods: {
    inject: function (event: any) {
      console.log("moving ", event.target);
      console.log("event ", event);
      event.preventDefault();
      window.ipcRenderer.send("ondragstart", event.target.id);
    },
  },
});
</script>