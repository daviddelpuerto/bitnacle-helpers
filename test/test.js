function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
};

try {

    importTest('timer', './timer');
    importTest('levels', './levels');

} catch(err) {
    console.error(err);
}