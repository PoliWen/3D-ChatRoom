<template>
  <div class="user-info-wrap">
    <div class="user-avator">
      <img :src="`http://eagle.addcn.com/media/avatar/${deskName.jobNumber}.jpg`" alt="" />
    </div>
    <div class="user-info">
      <p><span>姓名：</span>{{ deskName.name }} ({{ deskName.jobNumber }})</p>
      <p><span>部门：</span>{{ deskName.department }}</p>
      <p><span>职位：</span>{{ deskName.position }}</p>
      <p><span>家乡：</span>{{ deskName.hometown }}</p>
      <p><span>工作内容：</span>{{ deskName.jobDescription }}</p>
      <p><span>兴趣爱好：</span>{{ deskName.hobby }}</p>
    </div>
  </div>
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
