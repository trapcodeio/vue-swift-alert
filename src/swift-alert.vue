<template>
  <div v-if="h.isVisible && div">
    <slot></slot>
  </div>
  <slot v-else-if="h.isVisible"></slot>
</template>

<script lang="ts" setup>
import {swiftAlert} from "../index";

const props = defineProps({
  id: {type: String, required: true},
  div: {type: Boolean, default: false},
})

const h = swiftAlert(props.id);
</script>
