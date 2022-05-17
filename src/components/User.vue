<template>
  <Model
    :src="`${role.avator}/role.fbx`"
    toon
    physics="character"
    ref="rolRef"
    :x="role.x"
    :y="role.y"
    :z="role.z"
    :rotationX="role.rotationX"
    :rotationY="role.rotationY"
    :rotationZ="role.rotationZ"
    :animation="role.ani || 'idle'"
    :animations="{
      idle: `${role.avator}/Idle.fbx`,
      running: `${role.avator}/Running.fbx`,
      walking: `${role.avator}/walking.fbx`
    }"
  >
    <HTML>
      <h3 class="userName">{{ role.userName }}</h3>
    </HTML>
  </Model>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { Model, HTML } from 'lingo3d-vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  role: {
    type: Object,
    default: null
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
