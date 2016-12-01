/// <binding BeforeBuild='compile:ts' />
"use strict";

var gulp = require("gulp"),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    //watch = require('gulp-watch'),
    rimraf = require("rimraf"),
    merge = require('merge2'),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    tsProject = tsc.createProject('tsconfig.json');

var paths = {
    clientroot: "./app/",
    webroot: "./wwwroot/"
};

paths.tsOutputPath = paths.webroot + '/app';
paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.allTypeScript = paths.clientroot + '/**/*.ts';
paths.typings = './typings/';
paths.libraryTypeScriptDefinitions = './typings/**/*.ts';

paths.ngTemplateSrc = paths.clientroot + '/**/*.html';

gulp.task('compile:ts', function () {
    var sourceTsFiles = [paths.allTypeScript,                //path to typescript files
                         paths.libraryTypeScriptDefinitions]; //reference to library .d.ts files


    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));

    //tsResult.js
    //.pipe(gulp.dest('release/development'))
    //.pipe(uglify())
    //.pipe(gulp.dest('release/production'));

    var lessResult = gulp.src('./app/site.less')
                        .pipe(less());


    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
        tsResult.dts.pipe(gulp.dest(paths.tsOutputPath)),
        tsResult.js.pipe(sourcemaps.write('.')).pipe(gulp.dest(paths.tsOutputPath),
         gulp.src(paths.ngTemplateSrc).pipe(gulp.dest(paths.tsOutputPath)),
         lessResult.pipe(gulp.dest(paths.webroot + "css")))
    ]);
});

//gulp.task("clean:js", function (cb) {
//    rimraf(paths.concatJsDest, cb);
//});

//gulp.task("clean:css", function (cb) {
//    rimraf(paths.concatCssDest, cb);
//});

//gulp.task("clean", ["clean:js", "clean:css"]);

//gulp.task("min:js", function () {
//    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
//      .pipe(concat(paths.concatJsDest))
//      .pipe(uglify())
//      .pipe(gulp.dest("."));
//});

//gulp.task("min:css", function () {
//    return gulp.src([paths.css, "!" + paths.minCss])
//      .pipe(concat(paths.concatCssDest))
//      .pipe(cssmin())
//      .pipe(gulp.dest("."));
//});

//gulp.task("min", ["min:js", "min:css"]);