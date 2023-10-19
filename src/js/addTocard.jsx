

const getItemsFromLS = () => {
    const cartItems = localStorage.getItem('cart-items');
    if (cartItems) {
        return JSON.parse(cartItems);
    }
    return [];
}

const addItemOnLS = (id) => {
    const prevItems = getItemsFromLS();
    prevItems.push(id);
    localStorage.setItem('cart-items',JSON.stringify(prevItems));
}

export { getItemsFromLS, addItemOnLS }
