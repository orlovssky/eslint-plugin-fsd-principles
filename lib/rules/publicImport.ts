import fs from "fs";
import path from "path";

import { ESLintUtils } from "@typescript-eslint/utils";

import LAYERS from "../constants/LAYERS";
import matchLayer from "../utils/matchLayer";

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      onlyIndexImport: "Allowed import only from public index file.",
    },
  },
  defaultOptions: [],
  create: ({ getFilename, report }) => ({
    ImportDeclaration: (node) => {
      const matchedContextLayer = matchLayer(getFilename());

      if (matchedContextLayer) {
        for (const layer of LAYERS) {
          if (node.source.value.startsWith(`${layer}/`)) {
            const pathUntilContextLayer = getFilename().substring(
              0,
              getFilename().indexOf(`${matchedContextLayer[0]}/`)
            );

            for (const ext of ["ts", "js"]) {
              const indexPath = path.resolve(
                pathUntilContextLayer,
                node.source.value,
                `index.${ext}`
              );

              if (fs.existsSync(indexPath)) {
                return;
              }
            }

            report({
              node,
              messageId: "onlyIndexImport",
            });
          }
        }
      }
    },
  }),
});
