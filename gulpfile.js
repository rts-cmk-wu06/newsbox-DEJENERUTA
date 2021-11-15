const gulp = require("gulp");
const watch = require("gulp-watch");
const sass = require("gulp-sass")(require("sass"));

gulp.task("styles", () => {
  return gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});
function watchTask() {
  watch([".js/*.js", "*.js", buildScript]);
}

gulp.task("default", gulp.series(["styles"]));
