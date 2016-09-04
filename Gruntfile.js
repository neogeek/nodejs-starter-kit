module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.initConfig({

        handlebars: {

            compile: {

                options: {
                    amd: ['handlebars', 'handlebars.helpers'],
                    namespace: 'templates',
                    partialRegex: /.*/,
                    partialsPathRegex: /\/partials\//,
                    compilerOptions: {
                        preventIndent: true
                    },
                    processName: function (path) {
                        return path.match(/([\w\-]+)\.hbs/)[1];
                    }
                },

                files: {
                    'static/templates/compiled.min.js': ['src/views/**/*.hbs']
                }

            }

        }

    });

    grunt.registerTask('default', ['handlebars']);

};
