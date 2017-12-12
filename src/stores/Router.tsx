import { History } from 'history'
import { RouterStore as BaseRouterStore, syncHistoryWithStore } from 'mobx-react-router'

// Constants
export const STORE_ROUTER: string = 'router'

// Store
export class RouterStore extends BaseRouterStore {
  constructor(history?: History) {
    super()
    if (history) {
      this.history = syncHistoryWithStore(history, this)
    }
  }
}
