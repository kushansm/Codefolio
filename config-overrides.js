// config-overrides.js
module.exports = function override(config, env) {
    config.module.rules.forEach((rule) => {
        if (
            rule.enforce === "pre" &&
            rule.use?.some((u) => u.loader?.includes("source-map-loader"))
        ) {
            rule.exclude = [/node_modules\/@mediapipe\/tasks-vision/];
        }
    });
    return config;
};
