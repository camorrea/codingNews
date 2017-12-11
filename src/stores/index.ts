import { createBrowserHistory } from 'history'

import { RouterStore, STORE_ROUTER } from './Router'

export default history => {
  const routerStore = new RouterStore(history)

  return {
    [STORE_ROUTER]: routerStore
  }
}
