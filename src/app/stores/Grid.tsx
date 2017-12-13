import { observable, computed, action } from 'mobx'

import EchoJS from '../components/Source/subs/EchoJS'
import HumanCoders from '../components/Source/subs/HumanCoders'

// Models
class SourceModel {
  @observable public targetArea: string
  @observable public component: React.ComponentClass<any> | React.SFC<any> | string
  @observable public active: boolean

  constructor(targetArea: string, component: React.ComponentClass<any> | React.SFC<any> | string) {
    this.targetArea = targetArea
    this.component = component
    this.active = true
  }
}

// Store
export default class GridStore {
  constructor() {
    this.sources = [
      new SourceModel('source1', EchoJS),
      new SourceModel('source2', HumanCoders),
      new SourceModel('source3', EchoJS),
      new SourceModel('source4', HumanCoders),
      new SourceModel('source5', EchoJS)
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
