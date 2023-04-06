import { ESLintUtils } from "@typescript-eslint/utils";

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
        const matchedContextLayer = matchLayer(getFilename());

        if (matchedContextLayer) {
          for (const layer of getLowerLayers(matchedContextLayer[0])) {
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
