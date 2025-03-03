// Task 1: Create Revenue Metric Card

// Selecting the dashboard element
const dashboardById = document.getElementById("dashboard");// creating id for dashboard
const dashboardByQuery = document.querySelector("#dashboard");// creating query for dashboard

const revenueCard = document.createElement("div");// creating div for revenue card

// Creating and adding the Revenue card
revenueCard.setAttribute("class", "metric-card"); // setting class for revenue card
revenueCard.setAttribute("id", "revenue-card"); // setting id for revenue card

revenueCard.innerHTML = `
  <h3>Revenue</h3>
  <p>$0</p>`; // setting innerHTML for revenue card

dashboardById.appendChild(revenueCard); // appending revenue card to dashboard by id

// Creating and adding the Profit card
const profitCard = document.createElement("div");
profitCard.setAttribute("class", "metric-card");
profitCard.setAttribute("id", "profit-card");
profitCard.innerHTML = `
  <h3>Profit</h3>
  <p>$80</p>`;
dashboardById.appendChild(profitCard);

// Creating and adding the Expenses card
const expensesCard = document.createElement("div");
expensesCard.setAttribute("class", "metric-card");
expensesCard.setAttribute("id", "expenses-card");
expensesCard.innerHTML = `
  <h3>Expenses</h3>
  <p>$20</p>`;
dashboardById.appendChild(expensesCard);


// Task 2: Update Metric Cards via Array Conversion

// Selecting all metric cards
const metricCards = document.querySelectorAll(".metric-card"); // selecting all metric cards

// Converting the NodeList to an Array
const metricCardsArray = Array.from(metricCards); // converting metric cards to array

// Updating the text and background color of each card
metricCardsArray.forEach(card => { // looping through metric cards array
    card.innerText += `-Updated`; // updating text for each card
    card.style.backgroundColor = "royalblue"; // setting background color for each card
});

// Task 3: Implemented Dynamic Inventory List

// Adding Inventory Items
function addInventoryItem(productName) {
    let inventoryList = document.getElementById("inventoryList"); // Fix ID selection

    // Selecting the inventory list
    let inventoryItem = document.createElement("li"); // creating list item for inventory
    inventoryItem.setAttribute("class", "inventory-item"); // setting class for inventory item
    inventoryItem.innerHTML = productName; // setting text content for inventory item

    // Adding the remove functionality
    inventoryItem.addEventListener("click", function() { // adding event listener to inventory item
        inventoryList.removeChild(inventoryItem); // setting text decoration for inventory item
        console.log(`${productName} removed from inventory`); // logging message for removed item
    });

    inventoryList.appendChild(inventoryItem); // appending inventory item to inventory list
}   

// Task 4: Demonstrated Event Bubbling in Customer Section

const customerSection = document.getElementById("customerSection"); // selecting customer section

customerSection.addEventListener("click", function(event) { // adding event listener to customer section
    console.log("this is the customer section"); // logging message for customer section
});

const customers = ["customer 1", "customer 2", "customer 3"]; // creating array of customers

// Looping through the customers array
customers.forEach(customer => { // looping through customers array
    const customerCard = document.createElement("div"); // creating div for customer
    customerCard.classList.add("customer-card"); // setting class for customer card
    customerCard.innerText = customer; // setting text content for customer card
    
// Adding event listener to the customer card
    customerCard.addEventListener("click", function(event) { // adding event listener to customer div
        console.log(`this is ${customer}`); // logging message for customer
        event.stopPropagation(); // stopping event propagation
    });

    customerSection.appendChild(customerCard); // appending customer div to customer section
});



 
    


    

    







