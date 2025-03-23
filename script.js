// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual public key
})();

// Get the form element
const form = document.getElementById('guestBookForm');
const entriesList = document.getElementById('entriesList');

// Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Add entry to the guestbook
    const entry = document.createElement('li');
    entry.innerHTML = `<strong>${name}</strong>: ${message}`;
    entriesList.appendChild(entry);

    // Send email notification
    emailjs.send("default_service", "template_id", {
        to_email: "ddouglass1313@gmail.com",
        from_name: name,
        message: message,
    }).then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );

    // Clear the form
    form.reset();
});