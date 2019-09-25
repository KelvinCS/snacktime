module.exports = (config) => {
  const testCssRule = rule => rule.test.toString().match(/css|less|s\(\[ac\]\)ss/);

  const styleRules = config.module.rules.filter(testCssRule);

  styleRules.forEach((rule) => {
    const cssRule = rule;
    const cssLoader = cssRule.use.find(use => use.loader === 'css-loader');

    // disable class obsfucation
    cssLoader.options.modules = false;
  });

  return config;
};
