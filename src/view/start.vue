<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
// mounted(){
//   console.log(this.$route.params.id);
// }
const store = useStore();
const router = useRouter();
// return {
//   methods,
// };
// store.state.disable.left = true;
function pushToPage() {
  router.push("/page/1");
}
</script>
<template>
  <Card>
    <div class="mb-5">
      <h1 class="text-cyan-500 text-3xl font-bold mb-2">遊客滿意度調查</h1>
      <div class="text-lg text-gray-500">
        歡迎蒞臨蛙蛙國家風景區！<br />
        誠摯邀請您填寫滿意度問卷，<br />
        您的意見是我們進步的動力。
      </div>
      <div class="w-full flex justify-center">
        <Button
          msg="開始"
          class="w-60"
          @click="pushToPage()"
        ></Button>
      </div>
    </div>
  </Card>
</template>
