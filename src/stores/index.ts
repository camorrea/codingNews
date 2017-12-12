import { createBrowserHistory } from 'history'

import { RouterStore, STORE_ROUTER } from './Router'
import { GridStore, STORE_GRID } from './Grid'

export default history => {
  const routerStore = new RouterStore(history)
  const gridStore = new GridStore()

  return {
    [STORE_ROUTER]: routerStore,
    [STORE_GRID]: gridStore
  }
}
