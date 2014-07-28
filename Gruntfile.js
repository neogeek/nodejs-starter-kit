module.exports = function (grunt) {

    'use strict';

    [
        'grunt-contrib-handlebars',
        'grunt-contrib-sass',
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

            sass: {
                files: ['static/css/**/*.scss'],
                tasks: ['sass']
            }

        }

    });

    grunt.registerTask('default', [ 'handlebars', 'sass' ]);

};
