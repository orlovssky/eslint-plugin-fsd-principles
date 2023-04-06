import { ESLintUtils } from "@typescript-eslint/utils";

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      onlyRelativeExportPath: "Allowed only relative export path.",
    },
  },
  defaultOptions: [],
  create: ({ report }) => ({
    ExportAllDeclaration: (node) => {
      if (!node.source.value.startsWith("./")) {
        report({
          node,
          messageId: "onlyRelativeExportPath",
        });
      }
    },
    ExportNamedDeclaration: (node) => {
      if (node?.source?.value && !node.source.value.startsWith("./")) {
        report({
          node,
          messageId: "onlyRelativeExportPath",
        });
      }
    },
  }),
});
