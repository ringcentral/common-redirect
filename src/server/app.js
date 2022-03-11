
import Express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { resolve } from 'path'
import copy from 'json-deep-copy'

const cwd = process.cwd()
const pack = require(resolve(cwd, 'package.json'))
const {
  SEGMENT_KEY,
  IS_TEST,
  APP_NAME
} = process.env

const data = {
  version: pack.version,
  title: pack.name,
  cdn: process.env.SERVER,
  segmentKey: SEGMENT_KEY,
  isTest: IS_TEST,
  appName: APP_NAME
}
data._global = copy(data)

const app = new Express()

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', resolve(__dirname, './views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', data)
})

export default app
