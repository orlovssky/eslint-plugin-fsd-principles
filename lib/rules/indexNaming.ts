import fs from "fs";
import { dirname, basename as getBasename } from "path";

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
      const filename = getFilename();

      if (isIndex(filename)) {
        for (const dir of fs.readdirSync(dirname(filename))) {
          const basename = getBasename(dir) as SEGMENTS;

          if (Object.values(SEGMENTS).includes(basename)) {
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
