<template>
  <Model
    :src="`${chatRoom.chatData.myself.avator}/role.fbx`"
    toon
    physics="character"
    ref="rolRef"
    :animations="{
      idle: `${chatRoom.chatData.myself.avator}/Idle.fbx`,
      running: `${chatRoom.chatData.myself.avator}/Running.fbx`,
      walking: `${chatRoom.chatData.myself.avator}/walking.fbx`
    }"
    :animation="ani"
  >
    <HTML>
      <h3 class="userName">{{ chatRoom.chatData.myself.userName }}</h3>
    </HTML>
  </Model>
  <Keyboard @key-up="handleKeyUp" @key-down="handleKeyDown" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Model, Keyboard, HTML } from 'lingo3d-vue'
import chatRoomStore from '@/store/chatRoom'

const chatRoom = chatRoomStore()

const rolRef = ref()
const ani = ref('idle')
const handleKeyUp = (key: string) => {
  if (key === 'w' || key === 's') {
    ani.value = 'idle'
  }
}

const handleKeyDown = (key: string) => {
  if (key === 'w') {
    ani.value = 'walking'
    rolRef.value?.moveForward(-4)
  }
  if (key === 'r') {
    ani.value = 'running'
    rolRef.value?.moveForward(-10)
  }
}
</script>

<style lang="scss" scoped>
.userName {
  color: #fff;
}
</style>
