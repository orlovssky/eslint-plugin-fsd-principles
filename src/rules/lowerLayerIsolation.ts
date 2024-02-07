import { ESLintUtils } from '@typescript-eslint/utils'
import { Layer } from 'typings/layer.ts'
import getUpperLayers from 'utils/getUpperLayers.ts'
import matchLayer from 'utils/matchLayer.ts'

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: 'problem',
    schema: [],
    messages: {
      noUpperLevelLayer: 'Using upper-level layer is restricted.'
    }
  },
  defaultOptions: [],
  create: ({ filename, report }) => ({
    ImportDeclaration: (node) => {
      const matchedContextLayer = matchLayer(filename)

      if (matchedContextLayer) {
        const contextLayer = matchedContextLayer[0] as Layer

        for (const layer of getUpperLayers(contextLayer)) {
          const value = node.source.value as Layer

          if (
            value === layer ||
            value.startsWith(`${layer}/`) ||
            value.includes(`/${layer}/`)
          ) {
            report({
              node,
              messageId: 'noUpperLevelLayer'
            })
          }
        }
      }
    }
  })
})
