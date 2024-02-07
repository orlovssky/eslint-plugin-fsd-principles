import { basename } from 'path'
import fileExtensions from 'static/fileExtensions.ts'

const isIndexFile = (filename: string) => {
  return fileExtensions.some(
    (fileExtension) => `index.${fileExtension}` === basename(filename)
  )
}

export default isIndexFile
