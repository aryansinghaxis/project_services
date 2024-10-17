 // Array to hold the items added to the order
let orderItems = [
    { name: "Pizza", price: 12.99, quantity: 1 },
    { name: "Burger", price: 8.99, quantity: 2 },
    { name: "Pasta", price: 10.50, quantity: 1 }
];

// Tax rate and discount (if any)
const TAX_RATE = 0.05;
const DISCOUNT = 2.00;

// Function to render the order items
function renderOrder() {
    const orderTableBody = document.querySelector("#order-table tbody");
    orderTableBody.innerHTML = ''; // Clear previous content

    let subtotal = 0;
    orderItems.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        orderTableBody.appendChild(row);
        subtotal += item.price * item.quantity;
    });

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax - DISCOUNT;

    // Update the DOM with subtotal, tax, discount, and total
    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("discount").innerText = DISCOUNT.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}

// Function to simulate bill generation
function generateBill() {
    const paymentMethod = document.getElementById("payment-method").value;
    alert(`Bill Generated!\nPayment Method: ${paymentMethod}\nTotal Amount: $${document.getElementById("total").innerText}`);
}

// Initial render
renderOrder();
