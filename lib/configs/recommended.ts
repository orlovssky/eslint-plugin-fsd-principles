const MESSAGES = {
  MORE_THAN_2_PARENT_DIRS:
    "Using more than 2 parent directories is restricted.",
  SAME_LEVEL: "Using same level directory is restricted.",
  UPPER_LEVEL: "Using upper level directory is restricted.",
};

export default {
  plugins: ["fsd-principles", "import"],
  rules: {
    "fsd-principles/no-relative-public-api": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [["builtin"], ["external"], ["parent", "sibling", "index"]],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["src/shared/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["*/../../**"],
                message: MESSAGES.MORE_THAN_2_PARENT_DIRS,
              },
              {
                group: ["**/shared/**"],
                message: MESSAGES.SAME_LEVEL,
              },
              {
                group: [
                  "**/entities/**",
                  "**/features/**",
                  "**/widgets/**",
                  "**/pages/**",
                  "**/processes/**",
                  "**/app/**",
                ],
                message: MESSAGES.UPPER_LEVEL,
              },
            ],
          },
        ],
      },
    },
    {
      files: ["src/entities/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["*/../../**"],
                message: MESSAGES.MORE_THAN_2_PARENT_DIRS,
              },
              {
                group: ["**/entities/**"],
                message: MESSAGES.SAME_LEVEL,
              },
              {
                group: [
                  "**/features/**",
                  "**/widgets/**",
                  "**/pages/**",
                  "**/processes/**",
                  "**/app/**",
                ],
                message: MESSAGES.UPPER_LEVEL,
              },
            ],
          },
        ],
        "fsd-principles/import-only-from-public-api": ["error", ["shared"]],
      },
    },
    {
      files: ["src/features/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["*/../../**"],
                message: MESSAGES.MORE_THAN_2_PARENT_DIRS,
              },
              {
                group: ["**/features/**"],
                message: MESSAGES.SAME_LEVEL,
              },
              {
                group: [
                  "**/widgets/**",
                  "**/pages/**",
                  "**/processes/**",
                  "**/app/**",
                ],
                message: MESSAGES.UPPER_LEVEL,
              },
            ],
          },
        ],
        "fsd-principles/import-only-from-public-api": [
          "error",
          ["shared", "entities"],
        ],
      },
    },
    {
      files: ["src/widgets/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["*/../../**"],
                message: MESSAGES.MORE_THAN_2_PARENT_DIRS,
              },
              {
                group: ["**/widgets/**"],
                message: MESSAGES.SAME_LEVEL,
              },
              {
                group: ["**/pages/**", "**/processes/**", "**/app/**"],
                message: MESSAGES.UPPER_LEVEL,
              },
            ],
          },
        ],
        "fsd-principles/import-only-from-public-api": [
          "error",
          ["shared", "entities", "features"],
        ],
      },
    },
    {
      files: ["src/pages/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["*/../../**"],
                message: MESSAGES.MORE_THAN_2_PARENT_DIRS,
              },
              {
                group: ["**/pages/**"],
                message: MESSAGES.SAME_LEVEL,
              },
              {
                group: ["**/processes/**", "**/app/**"],
                message: MESSAGES.UPPER_LEVEL,
              },
            ],
          },
        ],
        "fsd-principles/import-only-from-public-api": [
          "error",
          ["shared", "entities", "features", "widgets"],
        ],
      },
    },
    {
      files: ["src/processes/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["*/../../**"],
                message: MESSAGES.MORE_THAN_2_PARENT_DIRS,
              },
              {
                group: ["**/processes/**"],
                message: MESSAGES.SAME_LEVEL,
              },
              {
                group: ["**/app/**"],
                message: MESSAGES.UPPER_LEVEL,
              },
            ],
          },
        ],
        "fsd-principles/import-only-from-public-api": [
          "error",
          ["shared", "entities", "features", "widgets", "pages"],
        ],
      },
    },
    {
      files: ["src/app/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["*/../../**"],
                message: MESSAGES.MORE_THAN_2_PARENT_DIRS,
              },
              {
                group: ["**/app/**"],
                message: MESSAGES.SAME_LEVEL,
              },
            ],
          },
        ],
        "fsd-principles/import-only-from-public-api": [
          "error",
          ["shared", "entities", "features", "widgets", "pages", "processes"],
        ],
      },
    },
  ],
};
