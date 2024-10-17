document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const timeSlot = document.getElementById("time-slot").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    // Validate input
    if (service && date && timeSlot && name && phone && address) {
        // Simulate submission (you can replace this with an API call)
        console.log("Booking Data:", {
            service,
            date,
            timeSlot,
            name,
            phone,
            address,
        });

        // Show confirmation message
        document.getElementById("booking-form").classList.add("hidden");
        document.getElementById("confirmation-message").classList.remove("hidden");
    } else {
        alert("Please fill out all fields.");
    }
});

document.getElementById("new-booking").addEventListener("click", function () {
    // Reset form and show it again
    document.getElementById("booking-form").reset();
    document.getElementById("booking-form").classList.remove("hidden");
    document.getElementById("confirmation-message").classList.add("hidden");
});
