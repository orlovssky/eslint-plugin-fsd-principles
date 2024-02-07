import fs from 'fs'
import path from 'path'
import { ESLintUtils } from '@typescript-eslint/utils'
import LAYER from 'constants/LAYER.ts'
import fileExtensions from 'static/fileExtensions.js'
import matchLayer from 'utils/matchLayer.ts'

const layers = Object.values(LAYER)

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: 'problem',
    schema: [],
    messages: {
      onlyIndexImport: 'Allowed import only from public index file.'
    }
  },
  defaultOptions: [],
  create: ({ filename, report }) => ({
    ImportDeclaration: (node) => {
      const matchedContextLayer = matchLayer(filename)

      if (matchedContextLayer) {
        for (const layer of layers) {
          if (node.source.value.startsWith(`${layer}/`)) {
            const pathUntilContextLayer = filename.substring(
              0,
              filename.indexOf(`${matchedContextLayer[0]}/`)
            )

            for (const fileExtension of fileExtensions) {
              const indexFilePath = path.resolve(
                pathUntilContextLayer,
                node.source.value,
                `index.${fileExtension}`
              )

              if (fs.existsSync(indexFilePath)) {
                return
              }
            }

            report({
              node,
              messageId: 'onlyIndexImport'
            })
          }
        }
      }
    }
  })
})
