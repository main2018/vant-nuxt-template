const express = require('express')
const consola = require('consola')
const session = require('express-session')
const defaultConfig = require('../config')
const {
  Nuxt,
  Builder
} = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = defaultConfig.NODE_PORT || 3000

app.set('port', port)
const RedisStore = require('connect-redis')(session);
// Sessions 来创建 req.session
app.use(session({
  secret: 'plug',
  resave: false,
  saveUninitialized: false,
  store: process.env.NODE_ENV === 'production' ? new RedisStore(defaultConfig.REDIS) : undefined,
  cookie: {
    maxAge: process.env.NODE_ENV === 'production' ? 60000 : Number.MAX_VALUE
  }
}))

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(function (req, res, next) {
    if (!req.session.token && req.url === '/') {
      req.session.token = String(parseInt(Math.random() * 100000))
    }
    next();
  })


  // Give nuxt middleware to express
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
