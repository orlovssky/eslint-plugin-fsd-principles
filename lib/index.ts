import recommended from "configs/recommended";
import layerIsolation from "rules/layerIsolation";
import sameLayerSliceIsolation from "rules/sameLayerSliceIsolation";

export = {
  rules: {
    "layer-isolation": layerIsolation,
    "same-layer-slice-isolation": sameLayerSliceIsolation,
  },
  configs: {
    recommended,
  },
};
