import { basename as getBasename } from "path";

const fileExtensions = ["js", "ts"];

const isIndexFile = (filename: string) => {
  return fileExtensions.some(
    (fileExtension) => `index.${fileExtension}` === getBasename(filename)
  );
};

export default isIndexFile;
