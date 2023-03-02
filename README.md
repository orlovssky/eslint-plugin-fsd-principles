# eslint-plugin-fsd-principles

Eslint configs and rules to ensure the principles of the [Feature-Sliced Design](https://feature-sliced.design/) methodology

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

```sh
yarn add eslint -D
```

Next, install `eslint-plugin-fsd-principles`:

```sh
npm install eslint-plugin-fsd-principles --save-dev
```

```sh
yarn add eslint-plugin-fsd-principles -D
```

Also, you need `[eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/)` as dependency:

```sh
npm install eslint-plugin-import --save-dev
```

```sh
yarn add eslint-plugin-import -D
```

## Usage

Add `fsd-principles` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "fsd-principles"
    ]
}
```

or simply add `plugin:fsd-principles/recommended` to the extends section of your `.eslintrc`

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "fsd-principles/import-only-from-public-api": [ "error", [ "directoryName" ] ]
    }
}
```


