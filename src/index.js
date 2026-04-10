const express = require('express')
const cors = require('cors')
const { PORT, SERVICE_NAME } = require('./config')
const healthRouter = require('./routes/health')
const productsRouter = require('./routes/products')
const { collectMetrics } = require('./services/metrics')

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use(healthRouter)
app.use(productsRouter)

// Metrics endpoint — returns Gateway-compatible MetricDataPoint array
app.get('/metrics', (_req, res) => {
  res.json({ metrics: collectMetrics() })
})

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} running on port ${PORT}`)
})

module.exports = app
