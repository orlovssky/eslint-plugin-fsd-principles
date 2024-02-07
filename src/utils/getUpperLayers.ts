import layers from 'static/layers.ts'
import { Layer } from 'typings/layer.ts'

export default (layer: Layer) => {
  if (layers.includes(layer)) {
    return layers.slice(0, layers.indexOf(layer))
  } else {
    return []
  }
}
