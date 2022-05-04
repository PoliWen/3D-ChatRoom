<template>
  <Model
    :src="`${role.avator}/role.fbx`"
    toon
    physics="character"
    ref="rolRef"
    :animations="{
      idle: `${role.avator}/Idle.fbx`,
      running: `${role.avator}/Running.fbx`,
      walking: `${role.avator}/walking.fbx`
    }"
    :animation="ani"
  >
    <HTML>
      <h3 class="userName">{{ role.userName }}</h3>
    </HTML>
  </Model>
</template>
<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { Model, HTML } from 'lingo3d-vue'

const ani = ref('idle')
const props = defineProps({
  role: {
    default: null,
    type: Object
  }
})
</script>

<style lang="scss" scoped>
.userName {
  color: #fff;
  left: 0;
  top: 0;
}
</style>
