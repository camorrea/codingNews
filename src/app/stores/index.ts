import { createBrowserHistory } from 'history'

import RouterStore from './Router'
import ProvidersStore from './Providers'
import GridStore from './Grid'

export default history => {
  const routerStore = new RouterStore(history)
  const providersStore = new ProvidersStore()
  const gridStore = new GridStore(providersStore)

  return {
    routing: routerStore,
    grid: gridStore,
    providers: providersStore
  }
}
