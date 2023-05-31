const isIndexFile = (filename: string) => {
  for (const ext of ["ts", "js"]) {
    if (filename.endsWith(`index.${ext}`)) {
      return true;
    }
  }

  return false;
};

export default isIndexFile;
