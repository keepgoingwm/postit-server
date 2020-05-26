const path = require('path')
const { readFileSync } = require('fs')
const glob = require('glob')
const nodeResolve = require('rollup-plugin-node-resolve')
const typescript = require('rollup-plugin-typescript2')
const commonjs = require('rollup-plugin-commonjs')
const replace = require('rollup-plugin-replace')
// const multiEntry = require('rollup-plugin-multi-entry')
// const sourcemaps = require('rollup-plugin-sourcemaps')
// const alias = require('rollup-plugin-alias')
// const cleanup = require('rollup-plugin-cleanup')
// const handleBars = require('handlebars')

const rootPkgJsonData = require('./package.json')

let isDev = detectIsDev()
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
  let moduleType = process.env.TYPE
  let output = []

  if (moduleType === 'cjs' || !moduleType) {
    output.push({
      file: 'lib/postit-server.js',
      format: 'cjs',
      sourcemap: isDev
    })
  }
  if (moduleType === 'esm' || !moduleType) {
    output.push({
      file: 'lib/postit-server.esm.js',
      format: 'esm',
      sourcemap: isDev
    })
  }

  return {
    input: 'src/index.ts',
    output
  }
}

function buildPluginsConfig() {
  let typescriptConfig = {}

  return [
    typescript(typescriptConfig),
    nodeResolve({
      only: ['tslib'] // the only external module we want to bundle
    }),
    commonjs(), // for fast-deep-equal import
    replace({
      delimiters: ['<%= ', ' %>'],
      values: {
        version: rootPkgJsonData.version,
        releaseDate: new Date().toISOString().replace(/T.*/, '')
        // ^TODO: store this in package.json for easier old-release recreation
      }
    })
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