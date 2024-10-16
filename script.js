function calculatePrice(discount) {
    return function(price) {
        return function(quantity) {
            return (price * quantity) * (1 - discount);
        };
    };
}
const withDiscount = calculatePrice(0.10); 
const forItem = withDiscount(100);         
const totalPrice = forItem(3);            
console.log(totalPrice);