<template>
  <Model
    :src="`${chatRoom.chatData.myself.avator}/role.fbx`"
    toon
    physics="character"
    ref="roleRef"
    :x="483.29"
    :y="-20.05"
    :z="-327.2"
    :intersectIDs="['desk1', 'desk2', 'desk3', 'desk4', 'desk5']"
    @intersect="handleIntersect"
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
  socket.emit('update', {
    x: roleRef.value!.x,
    y: roleRef.value!.y,
    z: roleRef.value!.z,
    rotationX: roleRef.value!.rotationX,
    rotationY: roleRef.value!.rotationY,
    rotationZ: roleRef.value!.rotationZ,
    ani: ani.value,
    userName: chatRoom.chatData.myself.userName,
    avator: chatRoom.chatData.myself.avator
  })
}, 100)

const roleRef = ref()
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
    roleRef.value?.moveForward(-4)
    console.log(123)
    updatePosition()
  }
  if (key === 'r') {
    ani.value = 'running'
    roleRef.value?.moveForward(-10)
    updatePosition()
  }
}

const handleIntersect = () => {
  console.log('你碰到我了')
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
