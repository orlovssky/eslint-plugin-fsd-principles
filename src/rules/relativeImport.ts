import { ESLintUtils } from '@typescript-eslint/utils'
import { Layer } from 'typings/layer.ts'
import getLowerLayers from 'utils/getLowerLayers.ts'
import matchLayer from 'utils/matchLayer.ts'

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: 'problem',
    schema: [],
    messages: {
      noRelativeImport:
        'Using relative import for different layer is restricted.'
    }
  },
  defaultOptions: [],
  create: ({ filename, report }) => ({
    ImportDeclaration: (node) => {
      if (node.source.value.startsWith('..')) {
        const matchedContextLayer = matchLayer(filename)

        if (matchedContextLayer) {
          const contextLayer = matchedContextLayer[0] as Layer

          for (const layer of getLowerLayers(contextLayer)) {
            if (node.source.value.includes(`${layer}/`)) {
              report({
                node,
                messageId: 'noRelativeImport'
              })
            }
          }
        }
      }
    }
  })
})
