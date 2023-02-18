<script setup lang="ts">
import { ref, Ref, reactive, computed } from "vue";
import { useChangeValue } from "../composables/changeValue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";
const blockProps = defineProps<{
  block: {
    id: string;
    element: string;
    type: string;
    text: string;
    hide: boolean;
    options: [
      {
        id: string;
        element: string;
        text: string;
        value: string;
        childrens: Array<any>;
      }
    ];
    value: string;
    required: boolean;
    completed: boolean;
    verified: boolean;
    childrens: Array<any>;
  };
  index: number;
  hide: boolean;
}>();
const vuelidateState = reactive({
  selectValue: blockProps.block.value,
});
const rules = computed(() => {
  return {
    selectValue: {
      required: helpers.withMessage("請選擇", required),
    },
  };
});
const v$ = useVuelidate(rules, vuelidateState, { $lazy: true });

const emit = defineEmits(["toggleChildren", "countProgress"]);
function changeForm(block: any) {
  v$.value.$validate();
  block.verified = v$.value.$error ? false : true;
  emit("toggleChildren", block.childrens);
  emit("countProgress");
}
</script>
<template>
  <div :class="{ 'form-hide need-toggle-hide': block.hide }">
    <h5 class="text-xl font-bold mb-3">
      {{ block.text }}
      <span class="text-red-500" v-if="block.required">*</span>
    </h5>
    <div class="flex">
      <select
        class="text-lg text-gray-500 w-full border-[1px] border-solid border-cyan-500 p-2 px-3 pr-8 rounded focus:outline-none focus:shadow-no-offset focus:shadow-cyan-500/50 select"
        v-model="vuelidateState.selectValue"
        @change="changeForm(block)"
      >
        <option value="">請選擇</option>
        <option v-for="option in block.options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
    <div v-if="v$.selectValue.$error" class="m-1 text-red-500">
      {{ v$.selectValue.$errors[0].$message }}
    </div>
  </div>
</template>
<style scope>
.select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
  background-position: right 0.75rem center;
}
</style>
