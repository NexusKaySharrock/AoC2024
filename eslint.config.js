import stylistic from '@stylistic/eslint-plugin';

export default [
    {
        rules: {
            '@stylistic/semi': ["error", "always"],
            "prefer-const": "error"
        },
        overrides: [
            {
                files: ["tests/**/*"],
                plugins: ["jest"],
                env: {
                    "jest/globals": true
                }
            }
        ],
        plugins: {
            '@stylistic': stylistic
        },
    }
];