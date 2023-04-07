import { ESLintUtils } from "@typescript-eslint/utils";

import LAYERS from "../constants/LAYERS";
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
        const contextLayer = matchedContextLayer[0] as LAYERS;

        for (const layer of getUpperLayers(contextLayer)) {
          if (node.source.value.includes(`${layer}/`)) {
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
