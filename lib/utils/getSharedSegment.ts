import SEGMENT from "../constants/SEGMENT";

const segments = Object.values(SEGMENT);
const firstDirAfterSrcSharedRegExp = /(?<=.+\/src\/shared\/)([^/]+)(?<=\/.+)/;

const getSharedSegment = (filename: string) => {
  const matchedSharedDir = filename.match(firstDirAfterSrcSharedRegExp);

  if (matchedSharedDir) {
    const dir = matchedSharedDir[0] as SEGMENT;

    if (segments.includes(dir)) {
      return dir;
    }
  }

  return "";
};

export default getSharedSegment;
