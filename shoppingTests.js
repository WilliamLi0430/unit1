const shoppingList = [
    {name: "Quartz", rarityPercent: 0, location: "Nether, Bastions, Villagers", stock: 3, quantity: 0, price: 3.00},
];
let cart = [];
let price = 0;
import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function toShop() {
    shoppingList.forEach((item, i) => {
        console.log(`${i + 1}. ${item.name}, $${item.price.toFixed(2)}, ${item.stock} in stock`);
    });

    let moreShop = true;

    while (moreShop === true) {
            const rl = readline.createInterface({input, output});
            try {
                console.log("Write an item to put it in your cart, type 'help' for a list of commands, or type 's' to stop shopping.");
                const shop = await rl.question("");
                const shopLower = shop.toLowerCase();
                const item = shoppingList.find(thing => thing.name.toLowerCase() === shop.toLowerCase());
                rl.close();
    
                //access cart with "c"
                if (shopLower === "c") {
                    let decimalPrice = price.toFixed(2);
    
                    // Find the item in your catalog that has been added to the cart
                    const cartItem = shoppingList.find(ct => ct.quantity > 0);

                    if (cartItem) {
                        // Fix: Use cartItem.name instead of the cart array
                        console.log(`You currently have ${cartItem.name} x${cartItem.quantity} in your cart.`);
                        } else {
                    console.log("Your cart is currently empty.");
                    }
                
                console.log(`The total price of your cart is $${decimalPrice}`);
                }
    
                //remove items from cart with "r"
                else if (shopLower === "r") {
                    console.log(cart);
                    const rl = readline.createInterface({input, output});
                    try {
                        const remove = await rl.question("Type the item name of the item you would like to remove. ");
                        const removeLower = remove.toLowerCase();
    
                        const itemx = cart.findIndex(thitem => thitem.toLowerCase() === removeLower);
                        if (itemx > -1) {
                            const item = cart[itemx];
                            price -= item.price;
                            item.quantity -= 1;
                            if (item.quantity === 0) {
                                cart.splice(itemx, 1);
                            }
                        }
                        else {
                            console.log("This item is not in your cart.");
                        }
                    } finally {
                        rl.close();
                    }
                }
    
                //stop shopping with "s"
                else if (shopLower === "s") {
                    const rl = readline.createInterface({input, output});
                    try {
                        const ending = await rl.question("Are you sure you want to stop shopping? Yes/No: ");
                        const end = ending.toLowerCase();
    
                        if (end === "yes") {
                            moreShop = false;
                        } else {
                            continue;
                        }
                    } finally {
                        rl.close();
                    }
                }

                //checks if the item does not exist
                else if (!item) {
                    console.log(`The item '${shop}' is not in our catalog.`);
                }
    
                //checks the stock of item
                else if (item.stock === 0) {
                    console.log(`We are sold out of ${item.name}.`);
                }
    
                //add an item to a cart when item name is written
                else if (item) {
                    console.log(`Added a ${item.name} to your cart.`);
                    cart.push(item.name);
                    item.quantity = (item.quantity || 0) + 1;
                    price += item.price;
                    console.log(price);
                    item.stock -= 1;
                    console.log(item.quantity);
                }
                
            
            } finally {
                rl.close();
            }
        }
    
        //receipt
        let discountPrice = price;
        let decimalPrice = +discountPrice.toFixed(2);
        console.log(`Your total is $${decimalPrice}`);
    }
    
    toShop();