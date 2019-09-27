function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
};

try {

    importTest('timer', './timer');

} catch(err) {
    console.error(err);
}