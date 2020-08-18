'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jscs: {
            all: {
                src: [
                    '*.js',
                ],
                options: {
                    config: './grunt/.jscsrc',
                },
            },
        },
        jshint: {
            all: {
                src: [
                    '*.js',
                ],
                options: {
                    jshintrc: './grunt/.jshintrc',
                },
            },
        },
        watch: {
            js: {
                files: [
                    '*.js',
                ],
                tasks: ['newer:jscs','newer:jshint']
            }
        }
    });
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['newer:jshint', 'newer:jscs','watch']);
};
