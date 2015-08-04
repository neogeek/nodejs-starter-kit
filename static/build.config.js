({
    baseUrl: '.',
    appDir: 'js/',
    dir: 'js-build/',
    mainConfigFile: 'js/config.js',
    modules: [
        {
            name: 'config'
        }
    ],
    wrap: {
        startFile: 'bower_components/requirejs/require.js'
    }
});
