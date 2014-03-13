module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      images: {
        expand: true,
        cwd: 'src/',
        src: ['images/*'],
        dest: 'dist/'
      },
      bower: {
        flatten: true,
        expand: true,
        cwd: 'bower_components/',
        src: [
          'jquery/dist/jquery.min.js',
          'jquery/dist/jquery.min.map',
          'html5shiv/dist/html5shiv.js',
          'bootstrap/dist/js/bootstrap.min.js'
        ],
        dest: 'dist/scripts/',
      }
    },
    less: {
      build: {
        files: {
          'dist/style.css': ['src/less/style.less']
        }
      }
    },
    jade: {
      options: {
        pretty: true
      },
      build: {
        files: {
          'dist/index.html': 'src/jade/index.jade',
        },
      }
    },
    watch: {
      images: {
        files: ['src/images/*'],
        tasks: ['copy']
      },
      less: {
        files: ['src/less/*'],
        tasks: ['less']
      },
      jade: {
        files: ['src/jade/**/*'],
        tasks: ['jade']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'less', 'jade', 'watch']);
};
