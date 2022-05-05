<template>
  <div class="toast">
    <transition name="toast">
      <div class="toast-inner" v-show="visible">
        <div class="toast-message">
          {{ message }}
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref, expose } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  delay: {
    type: [String, Number],
    default: 2000
  }
})

const visible = ref(false)

const close = () => {
  visible.value = false
}

let timer = null
const open = () => {
  visible.value = true
  clearInterval(timer)
  timer = setTimeout(() => {
    close()
  }, props.delay as number)
}

expose({
  open,
  close
})
</script>
<style lang="scss">
.toast {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  &-inner {
    position: relative;
    top: -40%;
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 18px;
    color: #fff;
    background: rgba(0, 0, 0, 0.7);
  }
  &-enter-active,
  &-leave-active {
    transition: all 0.3s;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
