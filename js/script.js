document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();

            if (fullName === "") {
                alert("Please enter your full name.");
                event.preventDefault();
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
                event.preventDefault();
                return;
            }

            if (phone.length < 10) {
                alert("Please enter a valid phone number (at least 10 digits).");
                event.preventDefault();
                return;
            }

            alert("Thank you! Your enquiry has been successfully validated and submitted.");
        });
    }
});