let orderAmounts = [1200, 450, 3000, 750, 1500, 250, 4200, 900];

// First order greater than 2000
let firstOrder = orderAmounts.find(order => order > 2000);

// All orders greater than 1000
let largeOrders = orderAmounts.filter(order => order > 1000);

// Total of all orders
let totalSales = orderAmounts.reduce
((total, order) => total + order,
0);
console.log("Original Array:", orderAmounts);
console.log("First order greater than 2000:", firstOrder);
console.log("Orders greater than 1000:", largeOrders);
console.log("Total Sales:", totalSales);
