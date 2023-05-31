import fs from "fs";
import { dirname, basename as getBasename } from "path";

import { ESLintUtils } from "@typescript-eslint/utils";

import SEGMENT from "../constants/SEGMENT";
import isIndexFile from "../utils/isIndexFile";

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

      if (isIndexFile(filename)) {
        for (const dir of fs.readdirSync(dirname(filename))) {
          const basename = getBasename(dir) as SEGMENT;

          if (Object.values(SEGMENT).includes(basename)) {
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
