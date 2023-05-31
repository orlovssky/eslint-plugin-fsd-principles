import fs from "fs";
import path from "path";

import { ESLintUtils } from "@typescript-eslint/utils";

import LAYER from "../constants/LAYER";
import matchLayer from "../utils/matchLayer";

const layers = Object.values(LAYER);

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
      const filename = getFilename();
      const matchedContextLayer = matchLayer(filename);

      if (matchedContextLayer) {
        for (const layer of layers) {
          if (node.source.value.startsWith(`${layer}/`)) {
            const pathUntilContextLayer = filename.substring(
              0,
              filename.indexOf(`${matchedContextLayer[0]}/`)
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
