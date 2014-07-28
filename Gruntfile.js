module.exports = function (grunt) {

    'use strict';

    [
        'grunt-contrib-stylus',
        'grunt-contrib-handlebars',
        'grunt-contrib-watch',
        'grunt-notify'
    ].map(grunt.loadNpmTasks);

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

        stylus: {

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

    grunt.registerTask('default', [ 'handlebars', 'stylus' ]);

};
