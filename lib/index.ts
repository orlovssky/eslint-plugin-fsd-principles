import recommended from "./configs/recommended";
import lowerLayerIsolation from "./rules/lowerLayerIsolation";
import sameLayerSliceIsolation from "./rules/sameLayerSliceIsolation";

export = {
  rules: {
    "lower-layer-isolation": lowerLayerIsolation,
    "same-layer-slice-isolation": sameLayerSliceIsolation,
  },
  configs: {
    recommended,
  },
};
