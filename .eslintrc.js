module.exports = {
    "parserOptions": {
        "sourceType": "module",
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "semi": ["error", "always"],
        "block-scoped-var":"error",
        "no-else-return":"error",
        "no-global-assign":"error",
        "no-loop-func":"error"
    }
};
