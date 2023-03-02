import recommended from "./configs/recommended";
import importOnlyFromPublicApi from "./rules/importOnlyFromPublicApi";
import noRelativePublicApi from "./rules/noRelativePublicApi";

export = {
  rules: {
    "import-only-from-public-api": importOnlyFromPublicApi,
    "no-relative-public-api": noRelativePublicApi,
  },
  configs: { recommended },
};
