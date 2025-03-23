// Initialize EmailJS
(function() {
    emailjs.init("CcXwTjQk39rDIO1-x"); // Fixed missing quote
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
    emailjs.send("service_wfbguvk", "template_q6p6jlw", {
        name: name,
        email: "ddouglass1313@gmail.com",
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
