const PizzaShop = require('./pizza-shop');

const pizzaShop = new PizzaShop();

pizzaShop.on('order', (size, topping) => {
   console.log('Order Recieved Successfully');
   console.log('Size:', size);
   console.log('topping:', topping);
})

pizzaShop.order('large', 'chicken');
pizzaShop.displayOrderNumber();