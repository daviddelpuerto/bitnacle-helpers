/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-console */
function importTest(name, path) {
  describe(name, () => {
    require(path);
  });
}

try {
  importTest('timer', './timer');
  importTest('levels', './levels');
  importTest('formats', './formats');
  importTest('utils', './utils');
} catch (err) {
  console.error(err);
}
