import recommended from "./configs/recommended";
import lowerLayerIsolation from "./rules/lowerLayerIsolation";
import publicImport from "./rules/publicImport";
import relativeImport from "./rules/relativeImport";
import sameLayerSliceIsolation from "./rules/sameLayerSliceIsolation";

export = {
  rules: {
    "lower-layer-isolation": lowerLayerIsolation,
    "same-layer-slice-isolation": sameLayerSliceIsolation,
    "relative-import": relativeImport,
    "public-import": publicImport,
  },
  configs: {
    recommended,
  },
};
