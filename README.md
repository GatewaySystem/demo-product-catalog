# Demo Product Catalog

Product catalog microservice for the Gateway e-commerce demo. Built with Node.js and Express.

## Quick Start

```bash
npm install
npm start        # runs on port 8081
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /health | Health check |
| GET | /metrics | Metrics (Gateway-compatible) |
| GET | /api/v1/products | List products (?category= filter) |
| GET | /api/v1/products/:id | Get product by ID |
| POST | /api/v1/products | Create product |
| PUT | /api/v1/products/:id | Update product |
| DELETE | /api/v1/products/:id | Delete product |
| GET | /api/v1/categories | List categories |

## Seeded Data

20 products across 5 categories: Electronics, Clothing, Books, Home, Sports.

## Testing

```bash
npm test
```
