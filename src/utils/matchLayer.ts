import { firstDirAfterSrc } from 'static/regex.ts'

export default (filename: string) => {
  return filename.match(firstDirAfterSrc)
}
