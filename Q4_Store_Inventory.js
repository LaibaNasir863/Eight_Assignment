let inventory = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log("Initial Inventory:", inventory);
// Add a new product
inventory.set("mangoes", 150);
console.log("Inventory after adding mangoes:", inventory);
// Update quantity of an existing product
inventory.set("bananas", 350);
console.log("Inventory after updating bananas:", inventory);

// Retrieve quantity of a specific product
console.log("Quantity of apples:", inventory.get("apples"));

// Check whether a product exists
console.log("Does oranges exist..?:", inventory.has("oranges"));

// Remove one product
inventory.delete("oranges");

// Display current number of product entries
console.log("Current inventory size:", inventory.size);

// Display all product names
for (let product of inventory.keys()) {
    console.log("Product:", product);
}

// Display all quantities
for (let quantity of inventory.values()) {
    console.log("Quantity:", quantity);
}

// Print each product and quantity
inventory.forEach((quantity, product) => {
    console.log(product + ": " + quantity);
});

// Empty the inventory
inventory.clear();

// Display final size
console.log("Final inventory size:", inventory.size);