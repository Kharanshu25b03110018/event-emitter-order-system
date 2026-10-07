# EventEmitter Order System

This project demonstrates how Node.js EventEmitter can be used to decouple an order creation system from different services.

When an order is created, an `orderCreated` event is emitted.

Different listeners handle the event:

- Send email
- Update inventory
- Generate invoice
- Send notification

This allows the order creation logic to remain independent of these services.

## Run the project

```bash
node app.js