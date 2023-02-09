const cart = [];

const addToCart = (item) => {
  cart.push(item);
  return cart;
};

const removeFromCart = (itemId) => {
  const index = cart.findIndex((item) => item.id === itemId);
  if (index === -1) {
    return {
      error: "Item not found in cart.",
    };
  }
  cart.splice(index, 1);
  return cart;
};

const getCart = () => {
  return cart;
};

const clearCart = () => {
  cart.length = 0;
  return cart;
};

module.exports = {
  addToCart,
  removeFromCart,
  getCart,
  clearCart,
};
