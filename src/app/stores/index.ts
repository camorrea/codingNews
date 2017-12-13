import { createBrowserHistory } from 'history'

import RouterStore from './Router'
import GridStore from './Grid'

export default history => {
  const routerStore = new RouterStore(history)
  const gridStore = new GridStore()

  return {
    routing: routerStore,
    grid: gridStore
  }
}
