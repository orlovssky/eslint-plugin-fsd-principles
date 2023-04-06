import fs from "fs";
import path from "path";

import { ESLintUtils } from "@typescript-eslint/utils";

import SEGMENTS from "../constants/SEGMENTS";

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      onlySegmentIndex: "Allowed index naming only inside segment.",
    },
  },
  defaultOptions: [],
  create: ({ getFilename, report }) => ({
    Program: (node) => {
      for (const ext of ["ts", "js"]) {
        if (getFilename().endsWith(`index.${ext}`)) {
          for (const dir of fs.readdirSync(path.dirname(getFilename()))) {
            if (SEGMENTS.includes(path.basename(dir))) {
              return;
            }
          }

          report({
            node,
            messageId: "onlySegmentIndex",
          });
        }
      }
    },
  }),
});
