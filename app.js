const EventEmitter = require("events");

const orderEvents = new EventEmitter();

function sendEmail(order) {
    console.log(`Email sent for order ${order.id}`);
}

function updateInventory(order) {
    console.log(`Inventory updated for order ${order.id}`);
}

function generateInvoice(order) {
    console.log(`Invoice generated for order ${order.id}`);
}

function sendNotification(order) {
    console.log(`Notification sent for order ${order.id}`);
}

// Register listeners
orderEvents.on("orderCreated", sendEmail);
orderEvents.on("orderCreated", updateInventory);
orderEvents.on("orderCreated", generateInvoice);
orderEvents.on("orderCreated", sendNotification);

// Order creation
function createOrder(order) {
    console.log(`Order ${order.id} created`);

    orderEvents.emit("orderCreated", order);
}

const order = {
    id: 101,
    customer: "Kharanshu",
    product: "Keyboard"
};

createOrder(order);