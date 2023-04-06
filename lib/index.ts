import recommended from "./configs/recommended";
import indexNaming from "./rules/indexNaming";
import lowerLayerIsolation from "./rules/lowerLayerIsolation";
import publicExport from "./rules/publicExport";
import publicImport from "./rules/publicImport";
import relativeImport from "./rules/relativeImport";
import sameLayerSliceIsolation from "./rules/sameLayerSliceIsolation";

export = {
  rules: {
    "lower-layer-isolation": lowerLayerIsolation,
    "same-layer-slice-isolation": sameLayerSliceIsolation,
    "relative-import": relativeImport,
    "public-import": publicImport,
    "index-naming": indexNaming,
    "public-export": publicExport,
  },
  configs: {
    recommended,
  },
};
