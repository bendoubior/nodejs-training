# Day 8 – DTO & Validation

## Subjects
- DTO pattern
- class-validator
- ValidationPipe

## Resources
- https://docs.nestjs.com/techniques/validation
- https://github.com/typestack/class-validator

---

## Coding Task

Create CreateProductDto:

- name: string (required)
- price: number (> 0)

### Requirements

1. Use class-validator decorators
2. Enable global ValidationPipe
3. Test invalid request:
   - Missing name
   - Negative price

4. Return 400 on validation error

### Bonus
Add UpdateProductDto