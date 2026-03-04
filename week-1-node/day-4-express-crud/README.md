# Day 4 – Express CRUD API

## Subjects
- Express server
- Routing
- Middleware
- Status codes

## Resources
- https://expressjs.com/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

---

## Coding Task

Build a Products API.

Product structure:

{
  id: number,
  name: string,
  price: number
}

### Required Routes

GET /products
POST /products
DELETE /products/:id

### Requirements

1. Use in-memory array
2. Validate:
   - name is required
   - price must be positive
3. Return correct status codes:
   - 201 on create
   - 400 on validation error
   - 404 if product not found
4. Separate routes and logic into different files

### Bonus
Add PUT /products/:id