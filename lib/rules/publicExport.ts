import { ESLintUtils } from "@typescript-eslint/utils";

import isIndexFile from "../utils/isIndexFile";

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
      const filename = getFilename();

      if (isIndexFile(filename) && !node.source.value.startsWith("./")) {
        report({
          node,
          messageId: "onlyRelativePathExport",
        });
      }
    },
    ExportNamedDeclaration: (node) => {
      const filename = getFilename();

      if (
        isIndexFile(filename) &&
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
