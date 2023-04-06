import fs from "fs";
import path from "path";

import { ESLintUtils } from "@typescript-eslint/utils";

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
    Program: (node) => {
      for (const ext of ["ts", "js"]) {
        if (getFilename().endsWith(`index.${ext}`)) {
          for (const dir of fs.readdirSync(path.dirname(getFilename()))) {
            console.log(dir);
          }
        }
      }
    },
  }),
});
