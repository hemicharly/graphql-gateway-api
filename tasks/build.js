const path = require('path')
const fs = require('fs-extra')
const childProcess = require('child_process')

const ignoreBuild = ([
  'tasks',
  'coverage',
  'node_modules',
  'jest.config.js',
  'gulpfile.js',
  'PATTERN="**/*.dev.js"',
  'PATTERN="**/*.test.js"'
]).map(ignore => (
  ignore.indexOf('PATTERN=') === -1
    ? path.join(__dirname, '..', ignore)
    : ignore.split('PATTERN=').join('')
))

const build = path.join(__dirname, '..', 'build')
exports.clean = async () => {
  await fs.emptyDir(build)
}

const modules = path.join(__dirname, '..', 'node_modules', '.bin')
exports.make = () => new Promise((resolve, reject) => {
  const babel = path.join(modules, 'babel')
  let babelCommand = babel
  ignoreBuild.map(ignore => {
    babelCommand += ` --ignore ${ignore}`
  })

  babelCommand += ` -d ${build} ${path.join(__dirname, '..')} -s`
  childProcess.exec(babelCommand, err => {
    if (err) {
      reject(err)
      return null
    }

    resolve()
  })
})

exports.modules = async () => {
  // Copy .env file to build folder
  const envNode = path.join(build, '..', '.env')
  const envBuild = path.join(build, '.env')
  await fs.copy(envNode, envBuild)

  // Set permanent NODE_ENV to production
  fs.appendFileSync(envBuild, `\nNODE_ENV=production`)

  // Copy node_modules to build folder
  const modulesNode = path.join(modules, '..')
  const modulesBuild = path.join(build, 'node_modules')
  await fs.copy(modulesNode, modulesBuild)
}
