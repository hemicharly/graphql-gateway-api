const gulp = require('gulp')
const env = require('./tasks/env')
const build = require('./tasks/build')

gulp.task('env-dev', env.development)
gulp.task('env-prod', env.production)
gulp.task('env-test', env.test)
gulp.task('env-lint', env.lint)

gulp.task('build-clean', build.clean)
gulp.task('build-make', build.make)
gulp.task('build-modules', build.modules)

const buildTask = gulp.series('build-clean', 'build-make', 'build-modules')
gulp.task('build', buildTask)
