import * as console from "console";

import { ESLintUtils } from "@typescript-eslint/utils";
import { getUpperLayers } from "utils/layers";

const layerInPathRegExp = /(?<=.+\/src\/)([^/]+)(?<=\/.+)/;

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      noUpperLevelDirectory: "Using upper-level directory is restricted",
    },
  },
  defaultOptions: [],
  create({ getFilename, report }) {
    const matchedLayer = getFilename().match(layerInPathRegExp);

    if (matchedLayer) {
      const upperLayers = getUpperLayers(matchedLayer[0]);

      console.log(upperLayers);
    }

    return {
      ImportDeclaration(node) {
        if (node.source.value.startsWith("../")) {
          report({
            node,
            messageId: "noUpperLevelDirectory",
          });
        }
      },
    };
  },
});
