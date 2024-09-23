document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const totalPriceElement = document.getElementById("totalPrice");
    const deviceCount = document.getElementById("deviceCount");
    const userCount = document.getElementById("userCount");
    const dashboardCount = document.getElementById("dashboardCount");

    // Add event listeners to checkboxes and input fields
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", calculateTotalPrice);
    });

    deviceCount.addEventListener("change", calculateTotalPrice);
    userCount.addEventListener("change", calculateTotalPrice);
    dashboardCount.addEventListener("change", calculateTotalPrice);

    function calculateTotalPrice() {
        let total = 0;

        // Sum the values of selected checkboxes
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseFloat(checkbox.getAttribute('data-price'));
            }
        });

        // Add additional factors like number of devices/users/dashboard
        total += parseInt(deviceCount.value) * 2000; // Example value for devices
        total += parseInt(userCount.value) * 50; // Example value for users
        total += parseInt(dashboardCount.value) * 100; // Example value for dashboard

        // Display the total price
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }
});
