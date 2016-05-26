module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

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
                    'static/templates/compiled.js': ['src/views/**/*.hbs']
                }

            }

        },

        sass: {

            dist: {

                files: {
                    'static/css/styles.css': 'static/css/styles.scss'
                }

            }

        },

        watch: {

            handlebars: {
                files: ['src/views/**/*.hbs'],
                tasks: ['handlebars']
            },

            sass: {
                files: ['static/css/**/*.scss'],
                tasks: ['sass']
            }

        }

    });

    grunt.registerTask('default', ['handlebars', 'sass']);

};
