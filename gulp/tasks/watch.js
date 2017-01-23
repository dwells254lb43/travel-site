var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch',function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	// watch, watches for saves in the following files then performs tasks.
	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');


	});
});


//The middle argument in task is a mandatory task that must be ran before the function, 
//this makes styles task create our temp filtered css doc before the page streams with the css
// updates.
gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});



// var gulp = require('gulp'),
// watch = require('gulp-watch'),
// browserSync = require('browser-sync').create();

// gulp.task('watch', function() {

//   browserSync.init({
//     notify: false,
//     server: {
//       baseDir: "app"
//     }
//   });

//   watch('./app/index.html', function() {
//     browserSync.reload();
//   });

//   watch('./app/assets/styles/**/*.css', function() {
//     gulp.start('cssInject');
//   });

// });

// gulp.task('cssInject', ['styles'], function() {
//   return gulp.src('./app/temp/styles/styles.css')
//     .pipe(browserSync.stream());
// });