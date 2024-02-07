import fs from 'fs'
import { dirname, basename as getBasename } from 'path'
import { ESLintUtils } from '@typescript-eslint/utils'
import SEGMENT from 'constants/SEGMENT.ts'
import fileExtensions from 'static/fileExtensions.ts'
import { Segment } from 'typings/segment.ts'
import isIndexFile from 'utils/isIndexFile.ts'

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: 'problem',
    schema: [],
    messages: {
      onlySegmentIndex: 'Index-naming allowed only inside segment.'
    }
  },

  defaultOptions: [],
  create: ({ filename, report }) => ({
    Program: (node) => {
      if (isIndexFile(filename)) {
        const sharedSegment = getSharedSegment(filename)

        if (sharedSegment) {
          for (const fileExtension of fileExtensions) {
            const indexFilePath = `src/shared/${sharedSegment}/index.${fileExtension}`

            if (filename.endsWith(indexFilePath)) {
              return
            }
          }
        }

        for (const dir of fs.readdirSync(dirname(filename))) {
          const basename = getBasename(dir) as Segment

          if (Object.values(SEGMENT).includes(basename)) {
            return
          }
        }

        report({
          node,
          messageId: 'onlySegmentIndex'
        })
      }
    }
  })
})
