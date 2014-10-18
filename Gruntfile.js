module.exports = function (grunt) {

    'use strict';

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jslint');
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
                    'static/templates/compiled.js': ['static/templates/handlebars/**/*.hbs']
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

        jslint: {

            client: {
                src: ['static/js/**/*.js'],
                directives: {
                    browser: true,
                    nomen: true,
                    globals: {
                        'define': true,
                        'module': true,
                        'require': true
                    }
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
                files: ['static/templates/handlebars/**/*.hbs'],
                tasks: ['handlebars']
            },

            stylus: {
                files: ['static/css/**/*.scss'],
                tasks: ['stylus']
            }

        }

    });

    grunt.registerTask('default', [ 'handlebars', 'jslint', 'sass' ]);
    grunt.registerTask('test', [ 'jasmine' ]);

};
