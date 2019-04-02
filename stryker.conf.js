module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress", "dashboard"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    thresholds: {
      break: 99
    }
  });
};
