module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            css: {
                src: ['js/src/*.js'],
                dest: 'js/dist/main.js'
            },
            js: {
                src: ['css/src/*.css'],
                dest: 'css/dist/style_main.css'
            }
        },
        uglify: {
            build: {
                src: 'js/dist/main.js',
                dest: 'js/dist/main.min.js'
            }
        },
        //cssmin: {
        //    target: {
        //        files: [{
        //            expand: true,
        //            cwd: 'css/dist',
        //            src: ['*.css', '!*.min.css'],
        //            dest: 'css/dist',
        //            ext: '.min.css'
        //        }]
        //    }
        //},
        watch: {
            scripts: {
                files: ['js/src/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};
