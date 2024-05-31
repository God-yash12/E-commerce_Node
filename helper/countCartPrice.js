


const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    for (let item of cart) {
        totalPrice += item.qty * item.price;
    }
    return totalPrice;
};

module.exports = {
    calculateTotalPrice
};
