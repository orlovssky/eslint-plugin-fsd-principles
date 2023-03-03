import { ESLintUtils } from "@typescript-eslint/utils";

type TOptions = [string[]];
type TMessageIds = "importOnlyFromPublicApi";

export default ESLintUtils.RuleCreator.withoutDocs<TOptions, TMessageIds>({
  create({ options: [layers], report }) {
    return {
      ImportDeclaration(node) {
        const {
          source: { value },
        } = node;

        for (const layer of layers) {
          if (
            (value.startsWith(layer) ||
              value.startsWith(`../${layer}`) ||
              value.startsWith(`../../${layer}`)) &&
            !value.endsWith("/publicApi")
          ) {
            report({
              node,
              messageId: "importOnlyFromPublicApi",
            });
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
  defaultOptions: [[]],
});
