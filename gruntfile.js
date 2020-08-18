module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: {
                src: [
                    '*.js',
                ],
            },
        },
        watch: {
            js: {
                files: [
                    '*.js',
                ],
                tasks: ['newer:jshint']
            }
        }
    });
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['newer:jshint','watch']);

};
