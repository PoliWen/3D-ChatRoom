import { defineStore } from 'pinia'
import { RoomStore } from '@/types'

export default defineStore('chatRoomStore', {
  state: (): RoomStore => {
    return {
      chatData: {
        count: 0,
        myself: {},
        users: []
      },
      chatInfo: []
    }
  }
})
