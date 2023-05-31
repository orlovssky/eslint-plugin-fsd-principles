const firstDirAfterSrcRegExp = /(?<=.+\/src\/)([^/]+)(?<=\/.+)/;

const matchLayer = (filename: string) => {
  return filename.match(firstDirAfterSrcRegExp);
};

export default matchLayer;
