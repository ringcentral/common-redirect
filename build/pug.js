
const copy = require('json-deep-copy').default
const {
  RINGCENTRAL_APP_SERVER_GH,
  SEGMENT_KEY_GH,
  APP_NAME
} = process.env

const { resolve } = require('path')
const cwd = process.cwd()
const pack = require(resolve(cwd, 'package.json'))

const data = {
  version: pack.version,
  description: pack.description,
  title: pack.name,
  server: RINGCENTRAL_APP_SERVER_GH,
  cdn: RINGCENTRAL_APP_SERVER_GH,
  segmentKey: SEGMENT_KEY_GH,
  appName: APP_NAME
}

function create (view) {
  const d = copy(data)
  d.view = view
  d._global = copy(d)
  return {
    loader: 'pug-html-loader',
    options: {
      data: d
    }
  }
}

exports.pugIndex = create('index')

