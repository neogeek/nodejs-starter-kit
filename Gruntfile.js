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
                    processName: function (path) {
                        return path.match(/([\w]+)\.hbs/)[1];
                    }
                },

                files: {
                    'static/templates/compiled.js': ['src/views/**/*.hbs']
                }

            }

        },

        jshint: {

            server: {
                options: {
                    jshintrc: true
                },
                src: ['src/**/*.js']
            },

            client: {
                options: {
                    jshintrc: true,
                    ignores: ['static/js/**/*.min.js']
                },
                src: ['static/js/**/*.js']
            },

            tests: {
                options: {
                    jshintrc: true
                },
                src: ['test/**/*.js']
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

            jshint: {
                files: ['src/**/*.js', 'static/js/**/*.js', 'test/**/*.js'],
                tasks: ['jshint']
            },

            sass: {
                files: ['static/css/**/*.scss'],
                tasks: ['sass']
            }

        }

    });

    grunt.registerTask('default', ['handlebars', 'jshint', 'sass']);

};
