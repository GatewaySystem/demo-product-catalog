const { Router } = require('express')
const { SERVICE_NAME, VERSION } = require('../config')

const router = Router()
const startedAt = Date.now()

router.get('/health', (_req, res) => {
  res.json({
    status: 'healthy',
    service: SERVICE_NAME,
    version: VERSION,
    uptime_seconds: Math.floor((Date.now() - startedAt) / 1000),
  })
})

module.exports = router
