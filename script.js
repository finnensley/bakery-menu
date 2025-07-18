// STEP 1: Create an array to store your dessert options
// Each item is an object that describes the dessert
// The object contains:
// - name: the dessert’s name (string)
// - price: the cost of the dessert (number)
// - inStock: whether it’s available (true/false)
const desserts = [
{
    name: "Lemon Tart",
    price: 3,
    inStock: true,
},

{
    name: "Apple Pie",
    price: 3,
    inStock: true,
},
{
    name: "Chocolate Cake",
    price: 4,
    inStock: false,
},
{
    name: "Carrot Cake",
    price: 4,
    inStock: true,
}];

// STEP 2: Select the elements where we'll add buttons and show messages
// Use getElementById to connect JS to the HTML elements with id="menu-buttons" and id="order-summary"
const menuBtn = document.getElementById("menu-buttons");
const orderSum = document.getElementById("order-summary");

// STEP 3: Loop through each dessert in the array using forEach
// This will let us do something (create a button) for every dessert
function showDesserts() {
    desserts.forEach(function(dessert) {
// STEP 4: Inside the loop, create a button using document.createElement("button")
// STEP 5: Set the button’s text to show the dessert name
// STEP 6: Add a click event to the button using addEventListener
// This means when the button is clicked, a function will run
// STEP 7: Inside the function, check if the dessert is in stock using if/else
// If inStock is true, show “You selected: [Dessert] ($[Price])”
// If inStock is false, show “Sorry, [Dessert] is sold out.”
// STEP 8: Add the button to the div with appendChild


        const button = document.createElement("button");
        button.textContent = dessert.name;
        button.addEventListener("click", function() {
            if (dessert.inStock) {
                orderSum.textContent = `You selected: ${dessert.name} $${dessert.price}`;
            } else {
                orderSum.textContent = `Sorry, ${dessert.name} is sold out!`;
            }
        });
        menuBtn.appendChild(button);
});
}
showDesserts();

//Questions answered:
//1. Syntax issue with forEach? think of it as array.forEach(function(item) { code to run for each item}
//So, this code runs for each dessert in the desserts array. Set up a button, created text content to be dessert name,
//  and created its click event. Inside click event for each item, check inStock value. 

//2. Using dessert.name and dessert.inStock dessert.price to grab the value from the key