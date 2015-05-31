module.exports = function (grunt) {

    'use strict';

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-sass');

    grunt.initConfig({

        handlebars: {

            compile: {

                options: {
                    amd: ['handlebars', 'handlebars.helpers'],
                    namespace: 'templates',
                    processName: function (path) {
                        return path.match(/([\w]+)\.hbs/)[1];
                    }
                },

                files: {
                    'static/templates/compiled.js': ['src/views/**/*.hbs']
                }

            }

        },

        jasmine: {
            test: {
                options: {
                    specs: 'tests/*.js'
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
                    jshintrc: true
                },
                src: ['static/js/**/*.js']
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
                files: ['src/**/*.js', 'static/js/**/*.js'],
                tasks: ['jshint']
            },

            sass: {
                files: ['static/css/**/*.scss'],
                tasks: ['sass']
            }

        }

    });

    grunt.registerTask('default', [ 'handlebars', 'jshint', 'sass' ]);
    grunt.registerTask('test', [ 'jasmine' ]);

};
