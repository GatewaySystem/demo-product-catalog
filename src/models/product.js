/**
 * Product shape definition and seed data.
 */

const SEED_PRODUCTS = [
  // Electronics
  { id: 'prod_001', name: 'Wireless Headphones', price: 79.99, category: 'Electronics', inventory_count: 150, sku: 'ELEC-WH-001' },
  { id: 'prod_002', name: 'USB-C Hub', price: 49.99, category: 'Electronics', inventory_count: 200, sku: 'ELEC-HUB-002' },
  { id: 'prod_003', name: 'Mechanical Keyboard', price: 129.99, category: 'Electronics', inventory_count: 3, sku: 'ELEC-KB-003' },
  { id: 'prod_004', name: 'Portable Monitor', price: 249.99, category: 'Electronics', inventory_count: 45, sku: 'ELEC-MON-004' },

  // Clothing
  { id: 'prod_005', name: 'Running Shoes', price: 89.99, category: 'Clothing', inventory_count: 80, sku: 'CLO-RS-005' },
  { id: 'prod_006', name: 'Waterproof Jacket', price: 149.99, category: 'Clothing', inventory_count: 35, sku: 'CLO-WJ-006' },
  { id: 'prod_007', name: 'Merino Wool Socks', price: 24.99, category: 'Clothing', inventory_count: 2, sku: 'CLO-MS-007' },
  { id: 'prod_008', name: 'Hiking Boots', price: 179.99, category: 'Clothing', inventory_count: 60, sku: 'CLO-HB-008' },

  // Books
  { id: 'prod_009', name: 'System Design Interview', price: 39.99, category: 'Books', inventory_count: 500, sku: 'BOOK-SDI-009' },
  { id: 'prod_010', name: 'Clean Code', price: 34.99, category: 'Books', inventory_count: 320, sku: 'BOOK-CC-010' },
  { id: 'prod_011', name: 'DDIA', price: 44.99, category: 'Books', inventory_count: 4, sku: 'BOOK-DDIA-011' },
  { id: 'prod_012', name: 'The Pragmatic Programmer', price: 49.99, category: 'Books', inventory_count: 210, sku: 'BOOK-TPP-012' },

  // Home
  { id: 'prod_013', name: 'Standing Desk Mat', price: 59.99, category: 'Home', inventory_count: 90, sku: 'HOME-SDM-013' },
  { id: 'prod_014', name: 'LED Desk Lamp', price: 39.99, category: 'Home', inventory_count: 120, sku: 'HOME-DL-014' },
  { id: 'prod_015', name: 'Ergonomic Chair Cushion', price: 34.99, category: 'Home', inventory_count: 1, sku: 'HOME-ECC-015' },
  { id: 'prod_016', name: 'Cable Management Kit', price: 19.99, category: 'Home', inventory_count: 300, sku: 'HOME-CMK-016' },

  // Sports
  { id: 'prod_017', name: 'Yoga Mat', price: 29.99, category: 'Sports', inventory_count: 175, sku: 'SPO-YM-017' },
  { id: 'prod_018', name: 'Resistance Bands Set', price: 24.99, category: 'Sports', inventory_count: 250, sku: 'SPO-RB-018' },
  { id: 'prod_019', name: 'Water Bottle', price: 14.99, category: 'Sports', inventory_count: 0, sku: 'SPO-WB-019' },
  { id: 'prod_020', name: 'Jump Rope', price: 12.99, category: 'Sports', inventory_count: 400, sku: 'SPO-JR-020' },
]

module.exports = { SEED_PRODUCTS }
