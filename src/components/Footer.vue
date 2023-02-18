<script setup lang="ts">
import { watch, ref, computed } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { usePushRoute } from "../composables/usePushRoute";
const { pushRoute, getPageId } = usePushRoute();
const store = useStore();
const route = useRoute();
function pushPage(num: number) {
  // usePushRoute( router.currentRoute.value.path, num, false );
  pushRoute(num);
}
const survey_length = ref(store.state.survey_length);
watch([route.path, survey_length], ([path, survey_length]) => {
  changeArrowDisable(path);
});
function changeArrowDisable(path: string) {
  let isEnd = false;
  isEnd = path.includes("end") ? true : false;
  let nowId = getPageId();
  store.state.disable.left = nowId <= 0 || isEnd ? true : false;
  store.state.disable.right = nowId > survey_length.value ? true : false;
}
</script>

<template>
  <footer
    class="w-full bg-white h-30 px-5 shadow-2xl shadow-black flex justify-center bottom-0 fixed"
  >
    <div class="flex justify-between max-w-full w-192 m-3">
      <div class="flex w-3/4 items-center">
        <div class="w-full bg-gray-200 h-5 rounded-md overflow-hidden relative">
          <div
            class="bg-cyan-500 h-full duration-500"
            :style="'width: ' + store.state.progress + '%;'"
          ></div>
        </div>
        <div class="mx-2">{{ store.state.progress }}%</div>
      </div>
      <div class="flex">
        <div
          class="bg-zinc-200 w-10 h-10 rounded-md m-1 p-2 cursor-pointer"
          @click="pushPage(-1)"
          :class="{ 'opacity-40': store.state.disable.left }"
        >
          <ChevronLeftIcon class="text-cyan-500" />
        </div>
        <div
          class="bg-zinc-200 w-10 h-10 rounded-md m-1 p-2 cursor-pointer"
          @click="pushPage(1)"
          :class="{ 'opacity-40': store.state.disable.right }"
        >
          <ChevronRightIcon class="text-cyan-500" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
