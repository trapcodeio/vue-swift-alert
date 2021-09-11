<template>
  <template v-if="isVisible">
    <div v-if="div">
      <slot></slot>
    </div>
    <template v-else>
      <slot></slot>
    </template>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { swiftAlert } from "./SwiftAlert";

export default defineComponent({
  name: "SwiftAlert",

  props: {
    id: { type: String, default: "default" },
    div: { type: Boolean, default: false }
  },

  setup({ id }: { id: string }) {
    const al = swiftAlert(id);
    return { isVisible: al.isVisible };
  }
});
</script>
