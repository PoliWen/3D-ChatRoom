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
import { useThrottleFn } from '@vueuse/core'
import { Model, Keyboard, HTML } from 'lingo3d-vue'
import chatRoomStore from '@/store/chatRoomStore'
import socket from '@/utils/socket'

const chatRoom = chatRoomStore()

const updatePosition = useThrottleFn(() => {
  console.log(456)
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
}, 100)

const rolRef = ref()
const ani = ref('idle')
const handleKeyUp = (key: string) => {
  if (key === 'w' || key === 'r') {
    ani.value = 'idle'
    updatePosition()
  }
}

// 更新状态
const handleKeyDown = (key: string) => {
  if (key === 'w') {
    ani.value = 'walking'
    rolRef.value?.moveForward(-4)
    console.log(123)
    updatePosition()
  }
  if (key === 'r') {
    ani.value = 'running'
    rolRef.value?.moveForward(-10)
    updatePosition()
  }
}

// todo list
// toast
// 节流
// 逻辑优化
// 点击关闭聊天弹窗
// 进度条优化
// todo,办公室漫游，多人会议室，楼层切换
</script>

<style lang="scss" scoped>
.userName {
  color: #fff;
}
</style>
