export interface RoleItem {
  userName: string
  avator: string
  x?: string
  y?: string
  z?: string
  rotationX?: string
  rotationY?: string
  rotationZ?: string
  ani?: string
}

export interface ChatInfo {
  systemMsg?: string
  myMsg?: {
    avator: string
    msg: string
    img?: string
  }
  otherMsg?: {
    avator: string
    msg: string
    img?: string
  }
}

export interface RoomStore {
  chatData: {
    count: number
    myself: RoleItem
    users: RoleItem[]
  }
  chatInfo: ChatInfo[]
}
