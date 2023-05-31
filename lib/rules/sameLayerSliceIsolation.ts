import fs from "fs";
import path from "path";

import { ESLintUtils } from "@typescript-eslint/utils";

import SEGMENT from "../constants/SEGMENT";

const segments = Object.values(SEGMENT);

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
      if (node.source.value.startsWith("..")) {
        const filename = getFilename();
        const importPath = path.join(path.dirname(filename), node.source.value);

        if (fs.existsSync(importPath)) {
          for (const segment of segments) {
            const indexOfSegment = importPath.indexOf(`/${segment}/`);

            if (
              indexOfSegment > -1 &&
              !filename.startsWith(importPath.substring(0, indexOfSegment))
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
