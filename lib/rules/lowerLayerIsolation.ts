import { ESLintUtils } from "@typescript-eslint/utils";

import LAYER from "../constants/LAYER";
import getUpperLayers from "../utils/getUpperLayers";
import matchLayer from "../utils/matchLayer";

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      noUpperLevelLayer: "Using upper-level layer is restricted.",
    },
  },
  defaultOptions: [],
  create: ({ getFilename, report }) => ({
    ImportDeclaration: (node) => {
      const matchedContextLayer = matchLayer(getFilename());

      if (matchedContextLayer) {
        const contextLayer = matchedContextLayer[0] as LAYER;

        for (const layer of getUpperLayers(contextLayer)) {
          if (
            (node.source.value as LAYER) === layer ||
            node.source.value.startsWith(`${layer}/`) ||
            node.source.value.includes(`/${layer}/`)
          ) {
            report({
              node,
              messageId: "noUpperLevelLayer",
            });
          }
        }
      }
    },
  }),
});
