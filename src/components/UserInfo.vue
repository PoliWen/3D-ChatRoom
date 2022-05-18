<template>
  <div class="user-info-wrap">
    <div class="user-avator">
      <img :src="`http://eagle.addcn.com/media/avatar/${userInfo.jobNumber}.jpg`" alt="" />
    </div>
    <div class="user-info">
      <p><span>姓名：</span>{{ userInfo.name }} ({{ userInfo.jobNumber }})</p>
      <p><span>部门：</span>{{ userInfo.department }}</p>
      <p><span>职位：</span>{{ userInfo.position }}</p>
      <p><span>家乡：</span>{{ userInfo.hometown }}</p>
      <p class="jobDescription"><span>工作内容：</span>{{ userInfo.jobDescription }}</p>
      <p class="'hobby"><span>兴趣爱好：</span>{{ userInfo.hobby }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  userInfo: {
    type: Object,
    default: null
  }
})
</script>

<style lang="scss" scoped>
.user-info-wrap {
  position: fixed;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  color: #fff;
  left: 0;
  top: 0;
  width: 620px;
  min-height: 350px;
  border-bottom-right-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 2px 2px 10px;
  display: flex;
  .user-avator {
    flex: 1;
    padding: 15px;
  }
  .user-info {
    padding: 15px;
    p {
      font-size: 14px;
      color: #999;
      margin-bottom: 10px;
      span {
        font-weight: bold;
        color: #4859b5;
      }
      &.hobby {
        span {
          display: block;
        }
      }
    }
  }
}
</style>
