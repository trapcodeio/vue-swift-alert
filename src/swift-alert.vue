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
import {defineComponent, PropType} from "vue";
import type SwiftAlert from "../src/SwiftAlert";

export default defineComponent({
  props: {
    h: {type: Object as PropType<SwiftAlert>, required: true},
    div: {type: Boolean, default: false}
  },

  setup({h}) {
    return {isVisible: h.isVisible};
  }
});
</script>
