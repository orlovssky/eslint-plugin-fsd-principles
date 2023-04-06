import { ESLintUtils } from "@typescript-eslint/utils";

import getUpperLayers from "../utils/getUpperLayers";

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      noUpperLevelLayer: "Using upper-level layer is restricted",
    },
  },
  defaultOptions: [],
  create: ({ getFilename, report }) => ({
    ImportDeclaration: (node) => {
      const matchedContextLayer = getFilename().match(
        /(?<=.+\/src\/)([^/]+)(?<=\/.+)/
      );

      if (matchedContextLayer) {
        for (const layer of getUpperLayers(matchedContextLayer[0])) {
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
