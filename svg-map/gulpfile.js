"use strict";


var gulp = require("gulp");
var runSequence = require("run-sequence");
var sass = require("gulp-sass");


gulp.task("scss-compile", function ()
{
    return gulp
    .src("./map.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./"));
});


gulp.task("build", function ()
{
    runSequence("scss-compile");
});


gulp.task("default", function ()
{
    gulp.run("build");

    gulp.watch(["./*.scss"], ["build"]);
});
