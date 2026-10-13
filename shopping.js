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
    {name: "Copper Ingot", rarityPercent: 0, location: "Caves, Trial Chambers, Abandoned Camps", price: 0},
    {name: "Lapis Lazuli", rarityPercent: 0, location: "Caves, Shipwrecks, Mineshafts, Villages, Villagers", price: 0},
    {name: "Redstone", rarityPercent: 0, location: "Caves, Mineshafts, Villagers, Dungeons, Strongholds, Woodland Mansions", price: 0},
    {name: "Gold Ingot", rarityPercent: 0, location: "Caves, Shipwrecks, Mineshafts, Buried Treasure, Strongholds, Woodland Mansions, Bastions, Ruined Portals, Dungeons, Desert Pyramids, Jungle Temples, Nether Fortress, End Cities, Villages, Ocean Monument, , Abandoned Camps, Villagers", price: 0},
    {name: "Iron Ingot", rarityPercent: 0, location: "Caves, Shipwrecks, Dungeons, Stronghold, Buried Treasure, Pillager Outposts, Woodland Mansions, Desert Pyramids, Jungle Temples, Nether Fortress, Bastions, Mineshafts, Trial Chambers, Ocean Ruins, Abandoned Camps, Villages", price: 0},
    {name: "Emerald", rarityPercent: 0, location: "Caves, Villages, Villagers, Shipwrecks, Ocean Ruins, Trial Chambers, Buried Treasure, Desert Pyramids, Igloos, Jungle Temples, Abandoned Camps, End Cities", price: 0},
    {name: "Diamond", rarityPercent: 0, location: "Caves, Buried Treasure, Trial Chambers, End Cities, Nether Fortress, Shipwrecks, Bastions, Jungle Temple, Desert Pyramid, Stronghold, Mineshafts, Abandoned Camps, Woodland Mansions, Ancient Cities", price: 0},
    {name: "Quartz", rarityPercent: 0, location: "Nether, Bastions, Villagers", price: 0},
    {name: "Netherite", rarityPercent: 0, location: "Nether, Bastions", price: 0},
    {name: "Resin Brick", rarityPercent: 0, location: "Pale Oak Forest, Woodland Mansions", price: 0},
    {name: "Amethyst Shard", rarityPercent: 0, location: "Amethyst Geodes, Ancient Cities, Trial Chambers", price: 0},
];
let cart = [];
let price = 0;