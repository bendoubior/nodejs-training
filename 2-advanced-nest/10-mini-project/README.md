# Day 10 – Mini NestJS Project

## Subjects
- Full NestJS structure
- Module separation
- Validation
- Testing

---

## Coding Task

Build a project with two NestJS services that work together:

- Orders Service — exposes HTTP endpoints to create and read orders (the public API)
- Kitchen Service — consumes order messages from RabbitMQ, "makes" the pizzas, and updates order status in MongoDB

Flow summary:

1. A client creates an order by calling the Orders Service (POST /orders).
2. Orders Service stores the order in MongoDB with status `pending` and publishes an order message to a RabbitMQ queue (`orders`).
3. Kitchen Service consumes messages from the `orders` queue. For each pizza in the order it simulates making the pizza (5 seconds per pizza). When finished it updates the order in MongoDB setting status `ready` (and optionally timestamps / cookedBy).
4. When a client GETs orders (or a single order) from the Orders Service, it returns the order including the `status` which reflects whether the kitchen finished the order.

Order structure (example):

{
  "id": "string|uuid",
  "customerName": "string",
  "address": "string",
  "status": "pending" | "ready" | "failed",
  "pizzas": [
    {
      "name": "Margherita",
      "size": "small|medium|large",
      "toppings": ["olives", "mushrooms"],
      "quantity": 2
    }
  ],
  "totalAmount": 29.5,
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}

### Requirements

Orders Service (HTTP API):

1. Create `OrdersModule`, `OrdersController`, `OrdersService` and DTOs.
2. POST /orders — create a new order. Validate payload (see DTOs below). Request should return the created order (including generated id and status `pending`).
3. GET /orders — list orders (with status field visible).
4. GET /orders/:id — get a single order including the status.
5. On create: persist the order to MongoDB with status `pending` and publish a message to RabbitMQ `orders` queue. Publishing must be done from a service (not controller).

Kitchen Service (consumer):

1. Create `KitchenModule` and a consumer service that connects to RabbitMQ and listens to the `orders` queue.
2. On receiving an order message, mark processing started, then simulate making pizzas by waiting 5 seconds per pizza (sum of all pizza quantities). Use an async delay (do NOT block the event loop synchronously).
3. After processing, update the order document in MongoDB: set status `ready` and update timestamps. Handle and record errors by setting status `failed`.

Shared infra and contracts:

1. Message format published by Orders Service:

{
  "orderId": "string",
  "customerName": "string",
  "pizzas": [ { "name": "", "size": "", "toppings": [], "quantity": number } ],
  "totalAmount": number,
  "createdAt": "ISODate"
}

2. Queue name: `orders` (durable queue).
3. Database: MongoDB. Both services should be able to read/write the `orders` collection. Orders Service writes the initial document; Kitchen Service updates the same document.

Validation rules (DTOs):

- `customerName`: required, non-empty string
- `address`: required, non-empty string
- `pizzas`: required, non-empty array
- each pizza: `name` required, `size` one of small/medium/large, `quantity` integer > 0
- `totalAmount`: > 0

Tech & env:

- NestJS (TypeScript)
- MongoDB (local or docker)
- RabbitMQ (local or docker)

Environment variables (per service):

- MONGODB_URI (mongodb connection string)
- RABBITMQ_URL (amqp://...)
- PORT (http port for Orders Service)

* Start RabbitMQ and MongoDB with Docker Compose or individual containers.

Notes for implementation

- Keep controllers thin: controllers should only parse requests, call services, and return results. All business logic (validation beyond DTOs, persistence, publishing) must live in services/providers.
- Use DTOs + class-validator for validation.
- Use a robust RabbitMQ client (built-in microservices package using the AMQP transport / nestjs-rabbitmq).
- Simulate pizza making with an async delay: e.g. await sleep(5_000 * totalPizzaCount).
- Ensure proper error handling in the consumer — if a message processing fails, acknowledge or move to dead-letter depending on your approach (for the exercise, mark order status `failed`).

### Tests

- Add unit tests for OrdersService (happy path + validation / error case).
- Add unit tests for Kitchen consumer (mock RabbitMQ and MongoDB; test that after processing the status is updated to `ready`).
- Optional: add a lightweight E2E test that runs the Orders Service, publishes an order, and verifies (polling) that the order becomes `ready` within expected time.

### Must Follow

- No business logic in controllers (services only)
- DTO validation required (class-validator)
- Clean folder/module separation (one module per responsibility)
- Use async non-blocking delays in the kitchen (do NOT block the event loop with sync sleep)

### Extra Challenges (optional)

- Add authentication to Orders Service.
- Add metrics / logs for per-order processing time and publish them.
- Add idempotency keys to the consumer to avoid double-processing.

---

Good luck — this mini-project will teach you about inter-service communication, background processing, and combining HTTP + message-driven APIs.