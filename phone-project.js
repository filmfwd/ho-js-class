// set constants
var PHONE_PRICE = 100;
var ACCESSORY_PRICE = 20;
var TAX_RATE = .09;
var SPENDING_THRESHOLD = 1200;

// calculate price + tax 
function pricePlusTax(item) {
var finalPrice = item += (item * TAX_RATE);
return finalPrice;
}

// how much do (n) phones and (y) accessories cost  
function cost() {
  
}

function buyItems() {
    while (bankAccount > SPENDING_THRESHOLD ) {
    var bankAccount = 5000;
    (function spend() {
        bankAccount -= (pricePlusTax(PHONE_PRICE) + pricePlusTax(ACCESSORY_PRICE()}());
    } else {
        bankAccount -= (pricePlusTax(PHONE_PRICE));
    } else {
        bankAccount += (pricePlusTax(ACCESSORY_PRICE))
    }
    }



// how much $ is left    
    pricePlusTax(item[0]);
    return "$" + moneyLeft.toFixed(2);
    }
}
console.log (buyItems());