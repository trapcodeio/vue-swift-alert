<template>
  <div v-if="h.isVisible && div" :key="'vsa_'+id">
    <slot></slot>
  </div>
  <slot v-else-if="h.isVisible" :key="'vsa_'+id"></slot>
</template>

<script lang="ts" setup>
import {swiftAlert} from "../index";

const props = defineProps({
  id: {type: String, required: true},
  div: {type: Boolean, default: false},
})



const h = swiftAlert(props.id);
</script>
