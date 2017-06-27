'ues strict';
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  //任务配置
  grunt.initConfig({
    //config:config;
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
          all: ['js/*.js']
      },
      concat: {
          options: {
            stripBanners: true,
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
              '<%= grunt.template.today("yyyy-mm-dd") %> */',
          },
          public: {
            src: ['js/*.js'],
            dest: 'public/js/main.js',
          },
      },
      // concat_css: {
      //     options: {
      //       // Task-specific options go here. 
      //     },
      //     all: {
      //       src: ['css/*.css'],
      //       dest: 'public/css/workcode.css'
      //     },
      // },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'public/js/main.js',
          dest: 'public/js/main.min.js'
        }
      },
      cssmin: {
          options: {
              shorthandCompacting: false,
              roundingPrecision: -1
          },
          build: {
              files: {
                  'public/css/main.min.css': ['public/css/main.css']
              }
          }
      },
      watch: {
          configFiles:{
              files:['Gruntfile.js']
          },
          files: ['js/*.js','less/*.less'],  
          tasks: ['default'],
          options: {
              livereload: true
          }
      },
      less: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
          development: {
              files: {
                "public/css/main.css": "less/*.less"
              }
            }
      }

    });

  //注册任务
  grunt.registerTask('js',['jshint']);
  grunt.registerTask('default',['less','concat','cssmin','uglify']);
  
};