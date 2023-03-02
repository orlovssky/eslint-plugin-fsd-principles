"use strict";
exports.__esModule = true;
var utils_1 = require("@typescript-eslint/utils");
exports["default"] = utils_1.ESLintUtils.RuleCreator.withoutDocs({
    create: function (_a) {
        var report = _a.report;
        return {
            ImportDeclaration: function (node) {
                var value = node.source.value;
                if (value.startsWith("../") && value.endsWith("/publicApi")) {
                    report({
                        node: node,
                        messageId: "noRelativePublicApi"
                    });
                }
            }
        };
    },
    meta: {
        type: "problem",
        schema: [],
        messages: {
            noRelativePublicApi: "Import relative publicApi is restricted"
        }
    },
    defaultOptions: []
});
