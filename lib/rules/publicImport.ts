import { ESLintUtils } from "@typescript-eslint/utils";

import LAYERS from "../constants/LAYERS";

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      noSameLevelLayer: "Using same-level layer is restricted.",
    },
  },
  defaultOptions: [],
  create: ({ getFilename }) => ({
    ImportDeclaration: (node) => {
      const matchedContextLayer = getFilename().match(
        /(?<=.+\/src\/)([^/]+)(?<=\/.+)/
      );

      if (matchedContextLayer) {
        for (const layer of LAYERS) {
          if (node.source.value.startsWith(`${layer}/`)) {
            const pathUntilContextLayer = getFilename().substring(
              0,
              getFilename().indexOf(`${matchedContextLayer[0]}/`)
            );

            console.log(pathUntilContextLayer);
            console.log(node.source.value);
          }
        }
      }
    },
  }),
});
