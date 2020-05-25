const path = require('path')
const { readFileSync } = require('fs')
const glob = require('glob')
// const nodeResolve = require('rollup-plugin-node-resolve')
const typescript = require('rollup-plugin-typescript2')
// const commonjs = require('rollup-plugin-commonjs')
// const multiEntry = require('rollup-plugin-multi-entry')
// const sourcemaps = require('rollup-plugin-sourcemaps')
// const alias = require('rollup-plugin-alias')
// const replace = require('rollup-plugin-replace')
// const cleanup = require('rollup-plugin-cleanup')
// const handleBars = require('handlebars')

const rootPkgJsonData = require('./package.json')


module.exports = buildConfigs()

function buildConfigs() {
  let isDev = detectIsDev()

  return {
    ...buildBaseConfig(),
    plugins: buildPluginsConfig()
  }
}
// return [
//   // ...buildPkgConfigs(ownBrowserGlobals, isDev),
//   // ...buildLocaleConfigs(ownBrowserGlobals),
//   // buildTestConfig() // must be last b/c depends on built pkgs+locales
// ]
// }

function buildBaseConfig() {
  let isDev = detectIsDev()
  let moduleType = process.env.TYPE
  let output = []

  if (moduleType === 'cjs' || !moduleType) {
    output.push({
      file: 'lib/server.js',
      format: 'cjs',
      sourcemap: isDev
    })
  }
  if (moduleType === 'umd' || !moduleType) {
    output.push({
      file: 'lib/server.umd.js',
      format: 'umd',
      name: 'PostitServer',
      sourcemap: isDev
    })
  }
  if (moduleType === 'esm' || !moduleType) {
    output.push({
      file: 'lib/server.esm.js',
      format: 'esm',
      sourcemap: isDev
    })
  }

  return {
    input: 'src/server.ts',
    output
  }
}

function buildPluginsConfig() {
  return [
    typescript( /*{ plugin options }*/ )
  ]
}



function detectIsDev() {
  if (!/^(development|production)$/.test(process.env.BUILD)) {
    console.warn('BUILD environment not specified. Assuming \'development\'')
    return true
  } else {
    return process.env.BUILD === 'development'
  }
}