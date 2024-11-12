// Write a JavaScript code for  array of item prices and an optional discount percentage. The function should return the total price after applying the discount (if provided).

let items_prices = [100,230,300,400];

let sum = 0;

function calculate_discount(discount){
    sum+=items_prices;
    let total_price = sum - (sum * discount/100);

}
calculate_discount(10)