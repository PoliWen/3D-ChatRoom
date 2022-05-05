<template>
  <Loading v-if="progress !== 100" :progress="progress" />
  <Login v-if="!isLogin && progress === 100" @submit="joinChat" />
  <div v-if="progress === 100 && isLogin">
    <World>
      <Model src="sceren.glb" :scale="6" physics="map" />
      <ThirdPersonCamera active mouseControl>
        <Role />
      </ThirdPersonCamera>

      <div v-for="(item, index) in chatRoom.chatData.users" :key="index">
        {{ item }}
        {{ chatRoom.chatData.myself.userName }}
        <User :role="item" v-if="item.userName !== chatRoom.chatData.myself.userName" />
      </div>

      <Skybox texture="building.gbl" />
    </World>

    <Keyboard @key-down="handleKeyDown" />
    <div class="help">
      <p>W(走),R(跑)</p>
      <p>T打开聊天窗口</p>
    </div>
  </div>
  <Toast delay="3000" ref="toastRef" :message="toastMsg" />
  <ChatRoomCon ref="chatRoomRef" v-if="chatRoomVisible" />
</template>
<script setup lang="ts">
import { World, Model, usePreload, Skybox, ThirdPersonCamera, Keyboard } from 'lingo3d-vue'
import { ref } from 'vue'
import Loading from '@/components/Loading.vue'
import Login from '@/components/Login.vue'
import ChatRoomCon from '@/components/ChatRoom.vue'
import Role from '@/components/Role.vue'
import User from '@/components/User.vue'
import Toast from '@/components/toast/Toast.vue'
import socket from '@/utils/socket'
import chatRoomStore from '@/store/chatRoom'

const progress = usePreload(
  [
    'sceren.glb',
    'boy/Role.fbx',
    'boy/Idle.fbx',
    'boy/Running.fbx',
    'boy/walking.fbx',
    'girl/Role.fbx',
    'girl/Idle.fbx',
    'girl/Running.fbx',
    'girl/walking.fbx',
    'girl2/Role.fbx',
    'girl2/Idle.fbx',
    'girl2/Running.fbx',
    'girl2/walking.fbx'
  ],
  '55.4mb'
)

const chatRoom = chatRoomStore()
const chatRoomRef = ref()

const isLogin = ref(false)
const joinChat = (user: any) => {
  socket.emit('login', {
    userName: user.userName,
    avator: user.avator
  })
}

socket.on('loginError', (data: any) => {
  alert(data.msg)
})

const toastRef = ref()
const toastMsg = ref()
socket.on('loginSuccess', (myself: any) => {
  isLogin.value = true
  chatRoom.chatData.myself = myself
  toastRef.value.open()
  toastMsg.value = `${myself.userName}加入`
})

// 保存聊天信息
socket.on('addUser', (msg: string) => {
  chatRoom.chatInfo.push({ systemMsg: msg })
  if (chatRoomRef.value) {
    chatRoomRef.value.scrollToBootm()
  }
})

// 保存聊天信息
socket.on('userList', (users: any) => {
  chatRoom.chatData.users = users
  chatRoom.chatData.count = users.length
})

// 退出聊天室
socket.on('delUser', (user: any) => {
  chatRoom.chatInfo.push({ systemMsg: `${user.userName}离开了聊天室` })
  toastRef.value.open()
  toastMsg.value = `${user.userName}离开了`
  if (chatRoomRef.value) {
    chatRoomRef.value.scrollToBootm()
  }
})

// 发送消息
socket.on('recieveMsg', (data: any) => {
  const { myself } = chatRoom.chatData
  if (myself.userName === data.userName) {
    chatRoom.chatInfo.push({ myMsg: data })
  } else {
    chatRoom.chatInfo.push({ otherMsg: data })
  }

  if (chatRoomRef.value) {
    chatRoomRef.value.scrollToBootm()
  }
})

socket.on('update', (users: any) => {
  chatRoom.chatData.users = users
  console.log(chatRoom.chatData.users, users)
})

const chatRoomVisible = ref(false)

const handleKeyDown = (key: string) => {
  if (key === 't') {
    chatRoomVisible.value = !chatRoomVisible.value
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}
input,
button,
select,
textarea {
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;
  text-align: left;
}

.help {
  position: fixed;
  left: 0;
  top: 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: left;
}
body {
  background: #4493cb;
}
</style>
