<template>
  <div class="user-info"></div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  deskName: {
    type: Object,
    default: null
  }
})
</script>

<style lang="scss" scoped>
.user-info {
  color: #fff;
  left: 0;
  top: 0;
}
</style>
