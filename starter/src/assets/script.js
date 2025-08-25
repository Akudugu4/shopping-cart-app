//Array of products available for purchase
const products = [
  {
    name: "Cherry",
    price: 2.99,
    quantity: 0,
    productId: 1,
    image: "./images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 1.99,
    quantity: 0,
    productId: 2,
    image: "./images/orange.jpg"
  },
  {
    name: "Strawberry",
    price: 3.99,
    quantity: 0,
    productId: 3,
    image: "./images/strawberry.jpg"
  }
]

// Cart is initially empty
let cart = [];

// Helper function to get product by ID
function getProductById(productId) {
  return products.find(item => item.productId === productId);
}

// Add Product to Cart
function addProductToCart(productId) {
  const product = getProductById(productId);
  if (product) {
    product.quantity++;
    if (!cart.includes(product)) {
      cart.push(product);
    }
  }
}

// Increase Quantity of a product in the cart
function increaseQuantity(productId) {
  const product = cart.find(item => item.productId === productId);
  if (product) {
    product.quantity++;
  }
}

// Decrease Quantity of a product in the cart
function decreaseQuantity(productId) {
  const product = cart.find(item => item.productId === productId);
  if (product) {
    product.quantity--;
    if (product.quantity === 0) {
      cart = cart.filter(item => item.productId !== productId);
    }
  }
}

// Remove Product from Cart
function removeProductFromCart(productId) {
  const product = cart.find(item => item.productId === productId);
  if (product) {
    product.quantity = 0;
    cart = cart.filter(item => item.productId !== productId);
  }
}

// Global variables
let totalPaid = 0;
let remainingBalance = 0;

// Calculates and returns the total cost of all products in the cart
function cartTotal() {
  return cart.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);
}

// Process payment and return change or remaining balance
function pay(amount) {
  totalPaid += amount;
  const total = cartTotal();
  remainingBalance = totalPaid - total;
  let change = 0;

  if (remainingBalance >= 0) {
    change = remainingBalance;
    totalPaid = 0;
    remainingBalance = 0;
    emptyCart();
    return change;
  } else {
    return remainingBalance;
  }
}






/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
