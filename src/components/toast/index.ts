import { createVNode, nextTick, render } from 'vue'
import ToastC from './Toast.vue'

interface ToastConfig {
  message: string
  delay: number | string
}

export default function Toast({ message, delay = 2000 }: ToastConfig) {
  const vm = createVNode(ToastC, { message, delay })
  const container = document.createElement('div')
  render(vm, container)
  document.body.append(container)
  nextTick(() => {
    // vm.component.ctx.open()
    console.log(vm.component.ctx.close())
    setTimeout(() => {
      // vm.component.ctx.close()
      setTimeout(() => {
        document.body.removeChild(container)
      }, 300)
    }, delay)
  })
  return vm
}
