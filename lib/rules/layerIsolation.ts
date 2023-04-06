import { ESLintUtils } from "@typescript-eslint/utils";

type TOptions = unknown[];
type TMessageIds = "noRelativePublicApi";

export default ESLintUtils.RuleCreator.withoutDocs<TOptions, TMessageIds>({
  meta: {
    type: "problem",
    schema: [],
    messages: {
      noRelativePublicApi: "Import relative public is restricted",
    },
  },
  defaultOptions: [],
  create(context) {
    const regex = /.+\/src\//;
    const filename = context.getFilename();
    const some = filename.replace(regex, "");
    console.log(some);

    return {
      ImportDeclaration(node) {
        if (node.source.value.startsWith("../")) {
          context.report({
            node,
            messageId: "noRelativePublicApi",
          });
        }
      },
    };
  },
});
