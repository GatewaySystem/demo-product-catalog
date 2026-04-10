/**
 * Simple metrics collector — exposed via GET /metrics as JSON
 * conforming to Gateway's MetricDataPoint schema.
 */

const store = require('./store')

const metrics = {
  requestCount: 0,
  lastRequestDuration: 0,
  productViews: {},
}

function collectMetrics() {
  const now = new Date().toISOString()
  const points = []

  // http_requests_total
  points.push({
    name: 'http_requests_total',
    value: metrics.requestCount,
    timestamp: now,
    labels: { service: 'product-catalog', method: 'GET' },
    type: 'counter',
  })

  // http_request_duration_ms
  points.push({
    name: 'http_request_duration_ms',
    value: metrics.lastRequestDuration,
    timestamp: now,
    labels: { service: 'product-catalog' },
    type: 'histogram',
  })

  // product_inventory_level per product
  for (const product of store.list()) {
    points.push({
      name: 'product_inventory_level',
      value: product.inventory_count,
      timestamp: now,
      labels: { product_id: product.id, category: product.category },
      type: 'gauge',
    })
  }

  // product_views_total for viewed products
  for (const [productId, count] of Object.entries(metrics.productViews)) {
    const product = store.get(productId)
    points.push({
      name: 'product_views_total',
      value: count,
      timestamp: now,
      labels: { product_id: productId, category: product?.category || 'unknown' },
      type: 'counter',
    })
  }

  return points
}

module.exports = { metrics, collectMetrics }
