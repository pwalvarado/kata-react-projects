<template>
  <div id="app">
    <div v-for="element in images" :key="element">
      <img :src="element" alt="A nice Shibe dog" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { API } from "aws-amplify";

interface ApiReturn {
  data: string[];
}

export default Vue.extend({
  name: "app",
  data() {
    return {
      images: [""]
    };
  },
  async mounted() {
    const { data }: ApiReturn = await API.post("shibaapi", "/pictures", {
      body: { number: 10 }
    });
    console.log("shibaData:", data);
    this.images = data;
  }
});
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  max-width: 1000px;
  margin: auto;
  img {
    height: auto;
    width: 100%;
  }
}
</style>
