import avator6 from '@/assets/images/tx06.jpg'
import avator7 from '@/assets/images/tx07.jpg'
import avator2 from '@/assets/images/tx02.jpg'

interface Avator {
  name: string
  src: string
}

// eslint-disable-next-line import/prefer-default-export
export const avatorConfig: Avator[] = [
  {
    name: 'boy',
    src: avator6
  },
  {
    name: 'girl',
    src: avator7
  },
  {
    name: 'girl2',
    src: avator2
  }
]
