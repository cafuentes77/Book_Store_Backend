//import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

/*const compat = new FlatCompat({
    baseDirectory: process.cwd(),
    resolvePluginsRelativeTo: process.cwd()
});*/

export default [
    js.configs.recommended,
    {
        ignores: ["node_modules", "eslint.config.js"],
        languagesOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: {
                process: "readonly",
                __dirname: "readonly",
                console: "readonly",
            },
        },

        rules: {
            indent: ["error", 4],
            "no-unused-vars": "error",
            semi: ["warn", "always"],
            quotes: ["error", "single"],
            "no-console": "off",
        }
    },
];