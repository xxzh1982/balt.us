var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:development', function(cb) {
  gulpSequence('clean', ['fonts', 'iconFont', 'images', 'video', 'data'], ['sass', 'html'], ['webpack:development', 'watch'], cb);
});
