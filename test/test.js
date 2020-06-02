function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
};

try {

    importTest('timer', './timer');
    importTest('levels', './levels');
    importTest('formats', './formats');
    importTest('utils', './utils');

} catch(err) {
    console.error(err);
}