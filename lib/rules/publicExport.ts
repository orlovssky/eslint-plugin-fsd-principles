import { ESLintUtils } from "@typescript-eslint/utils";

import isIndex from "../utils/isIndex";

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      onlyRelativePathExport: "Allowed only relative path export.",
    },
  },
  defaultOptions: [],
  create: ({ getFilename, report }) => ({
    ExportAllDeclaration: (node) => {
      if (isIndex(getFilename()) && !node.source.value.startsWith("./")) {
        report({
          node,
          messageId: "onlyRelativePathExport",
        });
      }
    },
    ExportNamedDeclaration: (node) => {
      if (
        isIndex(getFilename()) &&
        node?.source?.value &&
        !node.source.value.startsWith("./")
      ) {
        report({
          node,
          messageId: "onlyRelativePathExport",
        });
      }
    },
  }),
});
