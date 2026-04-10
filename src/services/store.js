/**
 * In-memory product store seeded with sample data.
 */

const { v4: uuidv4 } = require('uuid')
const { SEED_PRODUCTS } = require('../models/product')

class ProductStore {
  constructor() {
    this.products = new Map()
    this._seed()
  }

  _seed() {
    for (const p of SEED_PRODUCTS) {
      this.products.set(p.id, { ...p, created_at: new Date().toISOString() })
    }
  }

  list(category) {
    const all = Array.from(this.products.values())
    if (category) {
      return all.filter((p) => p.category.toLowerCase() === category.toLowerCase())
    }
    return all
  }

  get(id) {
    return this.products.get(id) || null
  }

  create(data) {
    const product = {
      id: `prod_${uuidv4().slice(0, 8)}`,
      name: data.name,
      price: data.price,
      category: data.category || 'Uncategorized',
      inventory_count: data.inventory_count || 0,
      sku: data.sku || `SKU-${uuidv4().slice(0, 6).toUpperCase()}`,
      created_at: new Date().toISOString(),
    }
    this.products.set(product.id, product)
    return product
  }

  update(id, data) {
    const existing = this.products.get(id)
    if (!existing) return null
    const updated = { ...existing, ...data, id }
    this.products.set(id, updated)
    return updated
  }

  delete(id) {
    return this.products.delete(id)
  }

  categories() {
    const cats = new Set()
    for (const p of this.products.values()) {
      cats.add(p.category)
    }
    return Array.from(cats).sort()
  }
}

// Singleton
const store = new ProductStore()
module.exports = store
