const { log } = require('console');
const EventEmitter = require('events');

const emitter = new EventEmitter();

//* .on => Event Listener for responding to the event
emitter.on('order-pizza', (size, topping) => {
   console.log('Order recieved!');
   console.log(`size: ${size}, topping: ${topping}`);
});

//* Event's name & arguments
emitter.emit('order-pizza', 'large', 'meet');

