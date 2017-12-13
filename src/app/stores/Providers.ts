import { observable, computed, action } from 'mobx'

interface config {
  name: string
}

export class ProviderStore {
  @observable public config: config
  @observable public data: Array<any>

  constructor(config: config, data: Array<any> = []) {
    this.config = config
    this.data = data
  }

  @action
  fetchData() {
    setTimeout(() => {
      this.data.push('foo')
      this.data.push('bar')
    }, 2000)
  }
}

export default class ProvidersStore {
  constructor() {
    this.list = [
      new ProviderStore({ name: 'EchoJs' }),
      new ProviderStore({ name: 'HumanCoders' }),
      new ProviderStore({ name: 'Twitter' }),
      new ProviderStore({ name: 'FakeProvider' }),
      new ProviderStore({ name: 'AnotherFakeProvider' })
    ]
  }

  @observable public list: Array<ProviderStore>
}
