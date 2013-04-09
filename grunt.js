module.exports = function(grunt){
  grunt.initConfig({
  	lint: {
			files: ['hola.js']
		}
	});
	
	grunt.registerTask('default', 'lint');
	grunt.registerTask('travis', 'lint');
};
