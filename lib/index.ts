import recommended from "./configs/recommended";
import lowerLayerIsolation from "./rules/lowerLayerIsolation";
import relativeImport from "./rules/relativeImport";
import sameLayerSliceIsolation from "./rules/sameLayerSliceIsolation";

export = {
  rules: {
    "lower-layer-isolation": lowerLayerIsolation,
    "same-layer-slice-isolation": sameLayerSliceIsolation,
    "relative-import": relativeImport,
  },
  configs: {
    recommended,
  },
};
