var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var gutil = require('gulp-util');

function runProtractorConfig() {
	gutil.env.browser ? process.env.BROWSER = gutil.env.browser : process.env.BROWSER = 'chrome';
	gutil.env.tags ? process.env.TAGS = gutil.env.tags : process.env.TAGS = '@all';
    return gulp.src("test/e2e/features/*.feature")
        .pipe(protractor({
            configFile: "test/e2e/protractor-conf.js"
        }))
		.on('end', function() {
            console.log("Finished");
        })
}

gulp.task('test', runProtractorConfig);
