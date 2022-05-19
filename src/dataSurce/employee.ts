interface employeeInfo {
  deskName: string
  name: string
  department: string
  position: string
  jobNumber: number
  hometown: string
  jobDescription: string
  hobby: string
}

// eslint-disable-next-line import/prefer-default-export
export const employeeConfig: employeeInfo[] = [
  {
    deskName: 'desk1',
    name: '蒙沙',
    department: '台湾房屋交易事业部',
    position: '部门经理',
    jobNumber: 10148,
    hometown: '湖北',
    jobDescription: '综合管家',
    hobby: '吃瓜娱乐圈，最爱悬疑剧'
  },
  {
    deskName: 'desk5',
    name: '贺雨晴',
    department: '台湾房屋交易事业部',
    position: '活动运营',
    jobNumber: 10902,
    hometown: '湖南',
    jobDescription: '新建案活动运营',
    hobby: '喜欢vlog剪辑、摄影、美食、旅游'
  },
  {
    deskName: 'desk71',
    name: '文孝礼',
    department: '台湾房屋交易事业部',
    position: '前端开发工程师',
    jobNumber: 10800,
    hometown: '湖南衡阳',
    jobDescription: '前端切图仔',
    hobby:
      '兴趣：阅读，各种运动（游泳，篮球，跑步...）,陶笛入门学习中，偶偶玩王者（青铜），戴着耳机压马路'
  }
]
