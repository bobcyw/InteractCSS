module.exports = function(grunt){
  grunt.initConfig(
    {
      less:{
        src:{
          options:{
            paths: ["src"],
            compress: true,
            sourceMap: true,
            banner: "/*2016 InteractCSS*/"
            
          },
          files:{
            "dist_compile/hover.css": "src/hover.less"
          }
        }
      },
      watch:{
        less:{
          files: ["src/*.less"],
          filters: 'isFile',
          tasks: ["less:src", "concat:less"]
        }
      },
      concat:{
        options:{
          sourceMap: true
        },
        less:{
          src:[
            'dist_compile/*.css'
          ],
          dest: "dist/interact_css.css"
        }
      }
    }
  );

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
