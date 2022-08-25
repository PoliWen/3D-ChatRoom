<template>
  <div class="user-info-wrap">
    <div class="user-avator">
      <img :src="`http://baidu.com/media/avatar/${userInfo.jobNumber}.jpg`" alt="" />
    </div>
    <div class="user-info">
      <p>
        <span>姓<em></em>名：</span>{{ userInfo.name }} ({{ userInfo.jobNumber }})
      </p>
      <p>
        <span>部<em></em>门：</span>{{ userInfo.department }}
      </p>
      <p>
        <span>职<em></em>位：</span>{{ userInfo.position }}
      </p>
      <p>
        <span>家<em></em>乡：</span>{{ userInfo.hometown }}
      </p>
      <p class="jobDescription"><span>工作内容：</span>{{ userInfo.jobDescription }}</p>
      <p class="hobby"><span>兴趣爱好：</span>{{ userInfo.hobby }}</p>
    </div>
    <span class="close" @click="close">X</span>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  userInfo: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])
const close = () => {
  emit('close')
}
</script>

<style lang="scss" scoped>
.user-info-wrap {
  position: fixed;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  color: #fff;
  left: 50%;
  top: 50%;
  background: #fff;
  width: 620px;
  min-height: 350px;
  border-radius: 4px;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgb(0 0 0 / 20%) 2px 2px 10px;
  display: flex;
  .user-avator {
    padding: 15px;
    display: flex;
    align-items: flex-end;
    width: 280px;
    img {
      width: 265px;
    }
  }
  .user-info {
    padding: 15px;
    p {
      font-size: 14px;
      color: #333;
      margin-bottom: 10px;
      display: flex;
      line-height: 22px;
      span {
        font-weight: bold;
        color: #4859b5;
        width: 70px;
        white-space: nowrap;
        text-align: justify;
        em {
          margin: 0 13px;
        }
      }
    }
  }
  .close {
    position: absolute;
    right: 15px;
    top: 15px;
    color: #ddd;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
