"use strict";
exports.__esModule = true;
var utils_1 = require("@typescript-eslint/utils");
exports["default"] = utils_1.ESLintUtils.RuleCreator.withoutDocs({
    create: function (_a) {
        var options = _a.options, report = _a.report;
        return {
            ImportDeclaration: function (node) {
                var value = node.source.value;
                for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                    var option = options_1[_i];
                    if ((value.startsWith(option) ||
                        value.startsWith("../".concat(option)) ||
                        value.startsWith("../../".concat(option))) &&
                        !value.endsWith("/publicApi")) {
                        report({
                            node: node,
                            messageId: "importOnlyFromPublicApi"
                        });
                    }
                }
            }
        };
    },
    meta: {
        type: "problem",
        schema: [
            {
                type: "array",
                items: { type: "string" }
            },
        ],
        messages: {
            importOnlyFromPublicApi: "Allowed import only from publicApi file"
        }
    },
    defaultOptions: []
});
