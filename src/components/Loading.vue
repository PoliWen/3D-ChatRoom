<template>
  <div class="progress">
    <span class="progress-bar-value">{{ `加载中${progress.toFixed(2)}` }}%</span>
    <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  progress: {
    default: 0,
    type: Number
  }
})
</script>
<style lang="scss">
.progress {
  align-self: center;
  width: 400px;
  display: flex;
  flex-direction: column;
  height: 20px;
  line-height: 20px;
  background: #e5e5e5;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.progress-bar {
  width: 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: cornflowerblue;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 20px 20px;
  transition: width 0.6s ease;
  border-radius: 4px;
  animation: progress-bar-ani 2s linear infinite;
}
.progress-bar-value {
  align-self: center;
  font-size: 12px;
  position: absolute;
  font-weight: bold;
  color: white;
  margin-right: 5px;
}
@keyframes progress-bar-ani {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
</style>
