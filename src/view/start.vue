<script setup lang="ts">
import axios from "axios";
import { onMounted,Ref,ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Button from "../components/Button.vue";
const store = useStore();
const router = useRouter();
const title:Ref<string> = ref("");
const info:Ref<string> = ref("");
axios.get( "/mock/start" ).then( ( res ) =>
{
  let data = res.data;
  // store.commit( 'sendSurveyDatas', res.data )
  title.value = data.title;
  info.value = data.info;
} )
function pushToPage() {
  router.push("/survey/1");
}
</script>
<template>
  <div class="mb-5">
    <h1 class="text-cyan-500 text-3xl font-bold mb-2">{{ title }}</h1>
    <div class="text-lg text-gray-500">
      <div v-html="info"></div>
    </div>
    <div class="w-full flex justify-center">
      <Button
        msg="開始"
        class="w-60"
        @click="pushToPage()"
      ></Button>
    </div>
  </div>
</template>
