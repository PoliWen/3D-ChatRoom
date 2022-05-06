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
import socket from '@/utils/socket'

const chatRoom = chatRoomStore()

const updateState = () => {
  socket.emit('update', {
    x: rolRef.value!.x,
    y: rolRef.value!.y,
    z: rolRef.value!.z,
    rotationX: rolRef.value!.rotationX,
    rotationY: rolRef.value!.rotationY,
    rotationZ: rolRef.value!.rotationZ,
    ani: ani.value,
    userName: chatRoom.chatData.myself.userName,
    avator: chatRoom.chatData.myself.avator
  })
}
const rolRef = ref()
const ani = ref('idle')
const handleKeyUp = (key: string) => {
  if (key === 'w' || key === 'r') {
    ani.value = 'idle'
    updateState()
  }
}

// 更新状态

const handleKeyDown = (key: string) => {
  if (key === 'w') {
    ani.value = 'walking'
    rolRef.value?.moveForward(-4)
    updateState()
  }
  if (key === 'r') {
    ani.value = 'running'
    rolRef.value?.moveForward(-10)
    updateState()
  }
}

// todo list
// toast
// 节流
// 逻辑优化
// 点击关闭聊天弹窗
// 进度条优化
</script>

<style lang="scss" scoped>
.userName {
  color: #fff;
}
</style>
