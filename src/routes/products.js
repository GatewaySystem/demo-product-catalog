const { Router } = require('express')
const store = require('../services/store')
const { metrics } = require('../services/metrics')

const router = Router()

// List products (optional ?category= filter)
router.get('/api/v1/products', (req, res) => {
  const start = Date.now()
  const products = store.list(req.query.category)
  metrics.requestCount++
  metrics.lastRequestDuration = Date.now() - start
  res.json({ products, count: products.length })
})

// Get single product
router.get('/api/v1/products/:id', (req, res) => {
  const start = Date.now()
  const product = store.get(req.params.id)
  metrics.requestCount++
  metrics.lastRequestDuration = Date.now() - start
  if (!product) {
    return res.status(404).json({ error: 'Product not found' })
  }
  metrics.productViews[product.id] = (metrics.productViews[product.id] || 0) + 1
  res.json(product)
})

// Create product
router.post('/api/v1/products', (req, res) => {
  const { name, price, category, inventory_count, sku } = req.body
  if (!name || price == null) {
    return res.status(400).json({ error: 'name and price are required' })
  }
  const product = store.create({ name, price, category, inventory_count, sku })
  res.status(201).json(product)
})

// Update product
router.put('/api/v1/products/:id', (req, res) => {
  const updated = store.update(req.params.id, req.body)
  if (!updated) {
    return res.status(404).json({ error: 'Product not found' })
  }
  res.json(updated)
})

// Delete product
router.delete('/api/v1/products/:id', (req, res) => {
  const deleted = store.delete(req.params.id)
  if (!deleted) {
    return res.status(404).json({ error: 'Product not found' })
  }
  res.status(204).send()
})

// List categories
router.get('/api/v1/categories', (_req, res) => {
  res.json({ categories: store.categories() })
})

module.exports = router
