module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            files: ['_site/_posts/*.*'],
            tasks: ['default'],
            options: {
                debounceDelay: 1000,
                spawn: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    grunt.registerTask('default', 'A sample task that logs stuff.', function(arg1, arg2) {
        if (arguments.length === 0) {
            grunt.log.writeln(this.name + ", no args");
        } else {
            grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
        }
    });

};