<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>ClicNet</h1>
      </div>
      <v-spacer></v-spacer>
      <h1>super-json</h1>
    </v-app-bar>
    <v-main> <Editor /> </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Editor from "./components/Editor.vue";

export default Vue.extend({
  name: "App",
  components: { Editor },
  data: () => ({}),
});
</script>
