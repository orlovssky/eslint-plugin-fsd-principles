import fs from "fs";
import path from "path";

import { ESLintUtils } from "@typescript-eslint/utils";

import SEGMENTS from "../constants/SEGMENTS";

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      noSameLevelLayer: "Using same-level layer is restricted.",
    },
  },
  defaultOptions: [],
  create: ({ getFilename, report }) => ({
    ImportDeclaration: (node) => {
      if (node.source.value.startsWith(".")) {
        const importPath = path.join(
          path.dirname(getFilename()),
          node.source.value
        );

        if (fs.existsSync(importPath)) {
          for (const segment of SEGMENTS) {
            const indexOfSegment = importPath.indexOf(`/${segment}/`);

            if (
              indexOfSegment > -1 &&
              !getFilename().startsWith(importPath.substring(0, indexOfSegment))
            ) {
              report({
                node,
                messageId: "noSameLevelLayer",
              });
            }
          }
        }
      }
    },
  }),
});
