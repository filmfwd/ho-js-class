// set constants
var PHONE_PRICE = 100;
var ACCESSORY_PRICE = 20;
var TAX_RATE = .09;
var SPENDING_THRESHOLD = 1200;

var item = [PHONE_PRICE, ACCESSORY_PRICE];

// calculate price + tax 
function pricePlusTax(item) {
var finalPrice = item + (item * TAX_RATE);
return finalPrice;
}

function cost() {
// how much do (n) phones and (y) accessories cost    
}

function buyItems() {
    while (bankAccount > SPENDING_THRESHOLD ) {
    var bankAccount = 5000;
    var moneyLeft = bankAccount - pricePlusTax();
// buy maximum cost


// how much $ is left    
    pricePlusTax(item[0]);
    return "$" + moneyLeft.toFixed(2);
    }
}
console.log (buyItems());