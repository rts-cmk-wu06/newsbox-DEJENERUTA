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
	watch(["sass/**/*.scss", "js/**/*.js", "*.html"], gulp.series(["styles"]));
}
//gulp-babel
const babel = require("gulp-babel");

gulp.task("buildScript", () =>
	gulp
		.src("js/**/*.js")
		.pipe(
			babel({
				presets: ["@babel/preset-env"],
			})
		)
		.pipe(gulp.dest("dist"))
);

gulp.task("default", gulp.series(["styles"], ["buildScript"], watchTask));
