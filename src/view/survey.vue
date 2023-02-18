<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Button from "../components/Button.vue";
import {
  onMounted,
  watch,
  defineAsyncComponent,
  ref,
} from "vue";
import axios from "axios";
import { usePushRoute } from "../composables/usePushRoute";
const { pushRoute, getPageId } = usePushRoute();
const store = useStore();
const router = useRouter();
const route = useRoute();
const survey = ref([
  {
    title: "滿意度調查",
    blocks: [
      {
        id: 1,
        component: "FormFivestar",
        text: "您覺得環境整潔度如何?",
        order: 0,
        required: true,
        options: [],
        value: "0",
        hide: false,
        completed: false,
        verified: false,
        childrens: [],
      },
    ],
  },
]);
const getFormComponent = (componentName: string) => {
  return defineAsyncComponent(
    () => import(`../components/${componentName}.vue`)
  );
};
onMounted(() => {
  let nowPath = router.currentRoute.value.params.id;
  store.state.pageNum = parseInt(nowPath.toString());
});
watch(
  () => route.path,
  (path) => {
    if (!router.currentRoute.value.params.id) return;
    let nowPath = router.currentRoute.value.params.id;
    store.state.pageNum = parseInt(nowPath.toString());
  }
);
axios.get("/mock/survey").then((res) => {
  let data = res.data;
  survey.value = data;
  store.state.survey_length = survey.value.length;
});

const _toggleChildren = (childrens: Array<any>) => {
  if (childrens.length === 0) return;
  let childrenIds: number[] = childrens.map((children) => children.id);
  let childrenHides: boolean[] = childrens.map((children) => children.hide);
  survey.value.forEach((survey_data) => {
    survey_data.blocks.forEach((block) => {
      let nowIdIndex = childrenIds.findIndex((id) => id === block.id);
      if (nowIdIndex >= 0) {
        block.hide = childrenHides[nowIdIndex];
      }
    });
  });
};
const _countProgress = () => {
  let blocks = survey.value.map((page: { blocks: any }) => page.blocks);
  let flatBlocks = [].concat.apply([], blocks);
  let total = flatBlocks.filter((page) => page["hide"] === false).length;
  let completed = flatBlocks.filter(
    (page) => page["hide"] === false && page["verified"] === true
  ).length;
  store.state.progress = ((completed / total) * 100).toFixed(1);
};
</script>
<template>
  <div
    v-for="(page, page_index) in survey"
    v-show="store.state.pageNum == page_index + 1"
  >
    <form class="mb-5">
      <h2
        class="text-3xl font-bold before:block before:absolute before:w-2 before:h-10 before:left-0 before:bg-cyan-500"
      >
        {{ page.title }}
      </h2>
      <div
        v-for="(block, block_index) in page.blocks"
        class="my-4 question"
        :key="block_index"
      >
        <component
          :is="getFormComponent(block.component)"
          :block="block"
          :index="block_index"
          @toggleChildren="_toggleChildren"
          @countProgress="_countProgress"
        >
        </component>
      </div>
    </form>
  </div>
  <div class="w-full flex justify-center">
    <Button
      msg="下一頁"
      class=""
      @click="pushRoute(1)"
      v-show="store.state.pageNum < survey.length"
    ></Button>
    <Button
      msg="送出"
      class="w-60"
      @click="pushRoute(1)"
      v-show="store.state.pageNum >= survey.length"
    ></Button>
  </div>
</template>
