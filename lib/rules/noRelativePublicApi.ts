import { ESLintUtils } from "@typescript-eslint/utils";

type TOptions = unknown[];
type TMessageIds = "noRelativePublicApi";

export default ESLintUtils.RuleCreator.withoutDocs<TOptions, TMessageIds>({
  create({ report }) {
    return {
      ImportDeclaration(node) {
        const {
          source: { value },
        } = node;

        if (value.startsWith("../") && value.endsWith("/publicApi")) {
          report({
            node,
            messageId: "noRelativePublicApi",
          });
        }
      },
    };
  },
  meta: {
    type: "problem",
    schema: [],
    messages: {
      noRelativePublicApi: "Import relative publicApi is restricted",
    },
  },
  defaultOptions: [],
});
