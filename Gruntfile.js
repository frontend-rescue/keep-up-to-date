module.exports = function (grunt) {
    'use strict';

    var config = grunt.file.readJSON('config.json');

    config.contents = './contents/';

    function moveIndex() {
        var file = {'src': 'temp/index.html', 'dest': 'build/index.html'};

        return file;
    }


    // Project configuration.
    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),

        'wintersmith_compile': {
            'build': {
                'options': {
                    'config': './config.json',
                    'output': './temp/'
                }
            }
        },

        'cssmin': {
            'options': {
                'keepSpecialComments': 0
            },

            'css': {
                'src': ['src/css/normalize.css', 'src/css/base.css', 'src/css/how.css'],
                'dest': 'build/src/css/styles.min.css'
            },

            'uri': {
                'src': ['src/css/data-uri.css'],
                'dest': 'build/src/css/data-uri.css'
            }
        },

        'copy': {
            'assets': {
                'files': [
                    {'src': ['src/assets/no-image.png'], 'dest': 'build/'},
                    {'src': ['src/assets/favicon.ico'], 'dest': 'build/favicon.ico'}
                ]
            },

            'index': {
                'files': [moveIndex()]
            }
        },

        'clean': ['./temp']
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-wintersmith-compile');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Resgister task(s).
    grunt.registerTask('default', ['']);
    grunt.registerTask('build', ['wintersmith_compile', 'cssmin', 'copy', 'clean']);
};