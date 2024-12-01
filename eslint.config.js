export default [
    {
        rules: {
            semi: "error",
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
        ]
    }
];