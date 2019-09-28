function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
};

try {

    importTest('timer', './timer');
    importTest('levels', './levels');
    importTest('formats', './formats');

} catch(err) {
    console.error(err);
}