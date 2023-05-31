import { ESLintUtils } from "@typescript-eslint/utils";

import LAYER from "../constants/LAYER";
import getLowerLayers from "../utils/getLowerLayers";
import matchLayer from "../utils/matchLayer";

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      noRelativeImport:
        "Using relative import for different layer is restricted.",
    },
  },
  defaultOptions: [],
  create: ({ getFilename, report }) => ({
    ImportDeclaration: (node) => {
      if (node.source.value.startsWith("..")) {
        const filename = getFilename();
        const matchedContextLayer = matchLayer(filename);

        if (matchedContextLayer) {
          const contextLayer = matchedContextLayer[0] as LAYER;

          for (const layer of getLowerLayers(contextLayer)) {
            if (node.source.value.includes(`${layer}/`)) {
              report({
                node,
                messageId: "noRelativeImport",
              });
            }
          }
        }
      }
    },
  }),
});
