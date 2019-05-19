const path = require('path')
const childProcess = require('child_process')

const modules = path.join(__dirname, '..', 'node_modules', '.bin')
const changeEnv = nextEnv => new Promise((resolve, reject) => {
  const crossEnv = path.join(modules, 'cross-env')
  childProcess.exec(`${crossEnv} NODE_ENV=${nextEnv}`, err => {
    if (err) {
      reject(err)
      return null
    }

    resolve(true)
  })
})

exports.development = async () => { await changeEnv('development') }
exports.production = async () => { await changeEnv('production') }
exports.test = async () => { await changeEnv('test') }
exports.lint = async () => { await changeEnv('lint') }
