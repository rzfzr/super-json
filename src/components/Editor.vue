<template>
  <v-container>
    <div v-for="field in fields" :key="field.name">
      <v-textarea :label="field.name" counter no-resize :rows="field.rows" v-model="field.value"></v-textarea>
    </div>

    <v-row>
      <v-col>
        <h2 id="export" draggable="true" @dragstart="inject">Export</h2>
      </v-col>
      <v-col>
        <h2 id="import" @drop="dropJson" @dragenter.prevent @dragover.prevent>Import</h2>
      </v-col>
    </v-row>
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
        { name: "title", rows: 2, value: "" },
        { name: "tags", rows: 4, value: "" },
        { name: "description", rows: 5, value: "" },
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
    inject: async function (event: any) {
      event.preventDefault();
      if (!fs.existsSync(this.$dir)) {
        fs.mkdirSync(this.$dir);
      }
      let filePath = `${this.$dir}\super.json`;
      fs.writeFileSync(filePath, JSON.stringify(this.fields), "utf-8");
      fs.writeFileSync(`${this.$dir}\\${this.getCustomTime()}.json`, JSON.stringify(this.fields));
      window.ipcRenderer.send("ondragstart", filePath);
      console.log(filePath);
    },
    dropJson: function (evt: { dataTransfer: { files: any } }) {
      let file = evt.dataTransfer.files[0];
      let content = JSON.parse(fs.readFileSync(file.path));
      content.forEach((element: { name: string; value: string }) => {
        this.fields.forEach((field) => {
          if (field.name == element.name) {
            field.value = element.value;
          }
        });
      });
    },
  },
});
</script>