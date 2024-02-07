import recommended from 'configs/recommended.ts'
import indexNaming from 'rules/indexNaming.ts'
import lowerLayerIsolation from 'rules/lowerLayerIsolation.ts'
import publicExport from 'rules/publicExport.ts'
import publicImport from 'rules/publicImport.ts'
import relativeImport from 'rules/relativeImport.ts'
import sameLayerSliceIsolation from 'rules/sameLayerSliceIsolation.ts'

const plugin = {
  rules: {
    'lower-layer-isolation': lowerLayerIsolation,
    'same-layer-slice-isolation': sameLayerSliceIsolation,
    'relative-import': relativeImport,
    'public-import': publicImport,
    'index-naming': indexNaming,
    'public-export': publicExport
  },
  configs: {
    recommended
  }
}

export default plugin
