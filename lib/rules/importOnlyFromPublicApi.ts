import { ESLintUtils } from "@typescript-eslint/utils";

type TOptions = string[];
type TMessageIds = "importOnlyFromPublicApi";

export default ESLintUtils.RuleCreator.withoutDocs<TOptions, TMessageIds>({
  create({ options, report }) {
    return {
      ImportDeclaration(node) {
        const {
          source: { value },
        } = node;

        for (const option of options) {
          if (
            value.startsWith(option) ||
            value.startsWith(`../${option}`) ||
            value.startsWith(`../../${option}`)
          ) {
            if (!value.endsWith("/publicApi")) {
              report({
                node,
                messageId: "importOnlyFromPublicApi",
              });
            }
          }
        }
      },
    };
  },
  meta: {
    type: "problem",
    schema: [
      {
        type: "array",
        items: { type: "string" },
      },
    ],
    messages: {
      importOnlyFromPublicApi: "Allowed import only from publicApi file",
    },
  },
  defaultOptions: [],
});
