import { ESLintUtils } from "@typescript-eslint/utils";

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      onlyRelativePathExport: "Allowed only relative path export.",
    },
  },
  defaultOptions: [],
  create: ({ report }) => ({
    ExportAllDeclaration: (node) => {
      if (!node.source.value.startsWith("./")) {
        report({
          node,
          messageId: "onlyRelativePathExport",
        });
      }
    },
    ExportNamedDeclaration: (node) => {
      if (node?.source?.value && !node.source.value.startsWith("./")) {
        report({
          node,
          messageId: "onlyRelativePathExport",
        });
      }
    },
  }),
});
