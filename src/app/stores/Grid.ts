import { observable, computed, action } from 'mobx'

import ProvidersStore, { ProviderStore } from './Providers'

// Models
export class SourceModel {
  @observable public targetArea: string
  @observable public provider: ProviderStore
  @observable public active: boolean

  constructor(targetArea: string, provider: ProviderStore) {
    this.targetArea = targetArea
    this.provider = provider
    this.active = true
  }
}

// Store
export default class GridStore {
  constructor(providers: ProvidersStore) {
    this.sources = [
      new SourceModel('source1', providers.list[0]),
      new SourceModel('source2', providers.list[1]),
      new SourceModel('source3', providers.list[2]),
      new SourceModel('source4', providers.list[3]),
      new SourceModel('source5', providers.list[4])
    ]
    this.template = [
      'source1 source1 source2 source2',
      'source1 source1 source2 source2',
      'source1 source1 source2 source2',
      'source3 source3 source5 source5',
      'source3 source3 source5 source5',
      'source4 source4 source5 source5',
      'source4 source4 source5 source5',
      'source4 source4 source5 source5'
    ]
  }

  @observable public sources: Array<SourceModel>
  @observable public template: Array<string>

  @computed
  get activeSources(): Array<SourceModel> {
    return this.sources.filter(source => source.active)
  }

  @action
  switchAreas = () => {
    const tempArea = this.sources[0].targetArea
    this.sources[0].targetArea = this.sources[1].targetArea
    this.sources[1].targetArea = tempArea
  }

  @action
  updateTemplate = () => {
    this.sources[1].active = false
    this.sources[2].active = false

    this.template = [
      'source1 source1 source5 source5',
      'source1 source1 source5 source5',
      'source1 source1 source5 source5',
      'source1 source1 source5 source5',
      'source4 source4 source5 source5',
      'source4 source4 source5 source5',
      'source4 source4 source5 source5',
      'source4 source4 source5 source5'
    ]
  }
}
