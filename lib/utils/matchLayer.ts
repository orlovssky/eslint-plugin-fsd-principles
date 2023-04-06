const matchLayer = (filename: string) => {
  return filename.match(/(?<=.+\/src\/)([^/]+)(?<=\/.+)/);
};

export default matchLayer;
