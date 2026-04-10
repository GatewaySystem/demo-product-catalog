const store = require('../src/services/store')

describe('ProductStore', () => {
  test('lists all seeded products', () => {
    const products = store.list()
    expect(products.length).toBe(20)
  })

  test('filters by category', () => {
    const electronics = store.list('Electronics')
    expect(electronics.length).toBe(4)
    electronics.forEach((p) => expect(p.category).toBe('Electronics'))
  })

  test('gets product by id', () => {
    const product = store.get('prod_001')
    expect(product).not.toBeNull()
    expect(product.name).toBe('Wireless Headphones')
  })

  test('returns null for unknown id', () => {
    expect(store.get('prod_999')).toBeNull()
  })

  test('creates a new product', () => {
    const product = store.create({ name: 'Test Product', price: 9.99, category: 'Test' })
    expect(product.id).toBeDefined()
    expect(product.name).toBe('Test Product')
    expect(store.get(product.id)).not.toBeNull()
  })

  test('updates a product', () => {
    const updated = store.update('prod_001', { price: 69.99 })
    expect(updated.price).toBe(69.99)
    expect(updated.name).toBe('Wireless Headphones')
  })

  test('lists categories', () => {
    const categories = store.categories()
    expect(categories).toContain('Electronics')
    expect(categories).toContain('Clothing')
    expect(categories).toContain('Books')
    expect(categories).toContain('Home')
    expect(categories).toContain('Sports')
  })
})
