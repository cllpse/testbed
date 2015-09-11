"use strict";


/* var gulp = require("gulp");
var runSequence = require("run-sequence");
var sass = require("gulp-sass");


gulp.task("scss-compile", function ()
{
    return gulp
    .src("./scss/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(svgCssInject())
    .pipe(minifyCss())
    .pipe(gulp.dest("./dist"));
});


gulp.task("build", function ()
{
    runSequence("scss-compile");
});


gulp.task("watch", function ()
{
    gulp.run("build");

    gulp.watch([], ["build"]);
}); */
