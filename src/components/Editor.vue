<template>
  <v-container>
    <div v-for="field in fields" :key="field.name">
      <v-textarea :label="field.name" counter no-resize :rows="field.rows" v-model="field.value"></v-textarea>
    </div>

    <h2 id="export" draggable="true" @dragstart="inject">Export</h2>
  </v-container>
</template>

<script lang="ts">
// const fs = require("fs-extra");
// const path = require("path");
/* eslint-disable */

declare const window: any;
const { ipcRenderer } = require("electron");
const fs = require("fs-extra");
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
    getCustomTime() {
      const date = new Date();
      return (
        date.getUTCFullYear().toString() +
        (date.getUTCMonth() + 1).toString() +
        date.getUTCDate().toString() +
        date.getUTCHours().toString() +
        date.getUTCMinutes().toString() +
        date.getUTCSeconds().toString()
      );
    },
    inject: function (event: any) {
      event.preventDefault();

      if (!fs.existsSync(this.$dir)) {
        fs.mkdirSync(this.$dir);
      }
      let filePath = `${this.$dir}\\${this.getCustomTime()}.json`;
      try {
        fs.writeFileSync(filePath, JSON.stringify(this.fields), "utf-8");
      } catch (e) {
        alert("Failed to save the file !");
      }
      window.ipcRenderer.send("ondragstart", filePath);
    },
  },
});
</script>