import { ESLintUtils } from '@typescript-eslint/utils'
import isIndexFile from 'utils/isIndexFile.ts'

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: 'problem',
    schema: [],
    messages: {
      onlyRelativePathExport: 'Allowed only relative path export.'
    }
  },
  defaultOptions: [],
  create: ({ filename, report }) => ({
    ExportAllDeclaration: (node) => {
      if (isIndexFile(filename) && !node.source.value.startsWith('./')) {
        report({
          node,
          messageId: 'onlyRelativePathExport'
        })
      }
    },
    ExportNamedDeclaration: (node) => {
      if (
        isIndexFile(filename) &&
        node?.source?.value &&
        !node.source.value.startsWith('./')
      ) {
        report({
          node,
          messageId: 'onlyRelativePathExport'
        })
      }
    }
  })
})
