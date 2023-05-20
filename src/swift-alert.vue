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
  import { swiftAlert } from "../index";

  export default defineComponent({
    props: {
      id: { type: String, required: true },
      div: { type: Boolean, default: false },
    },

    setup({ id }) {
      const h = swiftAlert(id);
      return { isVisible: h.isVisible };
    },
  });
</script>
