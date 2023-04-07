import fs from "fs";
import { dirname, basename } from "path";

import { ESLintUtils } from "@typescript-eslint/utils";

import SEGMENTS from "../constants/SEGMENTS";
import isIndex from "../utils/isIndex";

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      onlySegmentIndex: "Index-naming allowed only inside segment.",
    },
  },
  defaultOptions: [],
  create: ({ getFilename, report }) => ({
    Program: (node) => {
      if (isIndex(getFilename())) {
        for (const dir of fs.readdirSync(dirname(getFilename()))) {
          if (Object.values(SEGMENTS).includes(basename(dir) as SEGMENTS)) {
            return;
          }
        }

        report({
          node,
          messageId: "onlySegmentIndex",
        });
      }
    },
  }),
});
