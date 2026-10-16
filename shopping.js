const shoppingList = [
    //section one: trims
    {name: "Silence Trim", rarityPercent: 1.2, location: "Ancient City", price: 9.88},
    {name: "Ward Trim", rarityPercent: 5, location: "Ancient City", price: 9.50},
    {name: "Bolt Trim", rarityPercent: 6, location: "Trial Chamber", price: 9.40},
    {name: "Vex Trim", rarityPercent: 50, location: "Woodland Mansion", price: 5.00},
    {name: "Spire Trim", rarityPercent: 6.7, location: "End City", price: 9.33},
    {name: "Wild Trim", rarityPercent: 33.3, location: "Jungle Temple", price: 6.67},
    {name: "Dune Trim", rarityPercent: 14.3, location: "Desert Pyramid", price: 8.67},
    {name: "Tide Trim", rarityPercent: 20, location: "Ocean Monument", price: 8.00},
    {name: "Rib Trim", rarityPercent: 6.7, location: "Fortress", price: 9.33},
    {name: "Snout Trim", rarityPercent: 8.3, location: "Bastion", price: 9.17},
    {name: "Wayfinder Trim", rarityPercent: 8.3, location: "Trail Ruins", price: 9.17},
    {name: "Raiser Trim", rarityPercent: 8.3, location: "Trail Ruins", price: 9.17},
    {name: "Shaper Trim", rarityPercent: 8.3, location: "Trail Ruins", price: 9.17},
    {name: "Host Trim", rarityPercent: 8.3, location: "Trail Ruins", price: 9.17},
    {name: "Coast Trim", rarityPercent: 16.7, location: "Shipwrecks", price: 8.33},
    {name: "Sentry Trim", rarityPercent: 25, location: "Pillager Outpost", price: 7.50},
    {name: "Flow Trim", rarityPercent: 22.5, location: "Trial Chamber", price: 7.75},
    {name: "Eye Trim", rarityPercent: "100% or 10%", location: "Stronghold", price: 9.00}, //altar or library
    {name: "Netherite Upgrade Template", rarityPercent: "100% or 10%", location: "Bastion", price: 15.00}, //treasure or others
    //section 2: ores (for the trims)
    {name: "Copper Ingot", rarityPercent: 0, location: "Caves, Trial Chambers, Abandoned Camps", price: 3.00},
    {name: "Lapis Lazuli", rarityPercent: 0, location: "Caves, Shipwrecks, Mineshafts, Villages, Villagers", price: 5.00},
    {name: "Redstone", rarityPercent: 0, location: "Caves, Mineshafts, Villagers, Dungeons, Strongholds, Woodland Mansions", price: 4.50},
    {name: "Gold Ingot", rarityPercent: 0, location: "Caves, Shipwrecks, Mineshafts, Buried Treasures, Strongholds, Woodland Mansions, Bastions, Ruined Portals, Dungeons, Desert Pyramids, Jungle Temples, Nether Fortress, End Cities, Villages, Ocean Monuments, Abandoned Camps, Villagers", price: 7.50},
    {name: "Iron Ingot", rarityPercent: 0, location: "Caves, Shipwrecks, Dungeons, Stronghold, Buried Treasures, Pillager Outposts, Woodland Mansions, Desert Pyramids, Jungle Temples, Nether Fortress, Bastions, Mineshafts, Trial Chambers, Ocean Ruins, Abandoned Camps, Villages", price: 8.50},
    {name: "Emerald", rarityPercent: 0, location: "Caves, Villages, Villagers, Shipwrecks, Ocean Ruins, Trial Chambers, Buried Treasures, Desert Pyramids, Igloos, Jungle Temples, Abandoned Camps, End Cities", price: 6.00},
    {name: "Diamond", rarityPercent: 0, location: "Caves, Buried Treasures, Trial Chambers, End Cities, Nether Fortresses, Shipwrecks, Bastions, Jungle Temples, Desert Pyramids, Strongholds, Mineshafts, Abandoned Camps, Woodland Mansions, Ancient Cities", price: 10.00},
    {name: "Quartz", rarityPercent: 0, location: "Nether, Bastions, Villagers", price: 3.00},
    {name: "Netherite", rarityPercent: 0, location: "Nether, Bastions", price: 15.00},
    {name: "Resin Brick", rarityPercent: 0, location: "Pale Oak Forest, Woodland Mansions", price: 4.50},
    {name: "Amethyst Shard", rarityPercent: 0, location: "Amethyst Geodes, Ancient Cities, Trial Chambers", price: 6.00},
];
let cart = [];
let price = 0;

//code taken from google, current test
import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function toShop() {
    let moreShop = true;
    while (moreShop === true) {
        const rl = readline.createInterface({input, output});
        try {
            const shop = await rl.question("What would you like to buy? Write s to stop shopping. ");
            const item = shoppingList.find(thing => thing.name.toLowerCase() === shop.toLowerCase());

            if (shop === "s") {
                moreShop = false;
                break;
            }

            if (item) {
                console.log(`Added a ${item.name} to your cart.`);
                cart.push(item.name);
                price += item.price;
            } else {
                console.log(`The item ${shop} is not in our catalog.`);
            }
        
        } finally {
            rl.close();
        }
    }
    console.log(`Your total is $${price}`);
}

toShop();