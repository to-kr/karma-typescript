module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "src/react-tsx/**/*.tsx" }
        ],

        preprocessors: {
            "src/react-tsx/**/*.tsx": ["karma-typescript"]
        },

        karmaTypescriptConfig: {
            compilerOptions: {
                jsx: "react",
                module: "commonjs",
                sourceMap: true,
                target: "ES5"
            },
            include: ["**/*.tsx"],
            reports:
            {
                "html": "coverage",
                "text-summary": ""
            }
        },

        reporters: ["progress", "karma-typescript"],

        browsers: ["Chrome"]
    });
};
