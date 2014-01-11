module.exports = function (grunt) {
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			SASSintoCSS: {
    			files: ['sass/*.sass'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			}
        },
		sass: {
			dist: {
				options: {
        			style: 'nested'
      			},
      			files: {
        			'css/styles.css': 'sass/styles.sass'
      			}
    }
  }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass']);
};