import mitt from 'mitt'

type Events = {
  sendOpenSideBar: boolean
  sendMsg: string
  sendNum: number
}

const bus = mitt<Events>()
export default bus