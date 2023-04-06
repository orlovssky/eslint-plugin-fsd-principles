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
      for (const layer of LAYERS) {
        if (node.source.value.startsWith(`${layer}/`)) {
          const pathUntilSrc = getFilename().substring(
            0,
            getFilename().indexOf("src/")
          );

          console.log(pathUntilSrc);
          console.log(node.source.value);
        }
      }
    },
  }),
});
