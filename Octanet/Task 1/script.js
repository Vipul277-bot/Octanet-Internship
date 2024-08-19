document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = event.target[0].value.trim();
    const email = event.target[1].value.trim();
    const message = event.target[2].value.trim();

    if (name && email && message) {
        alert('Message sent successfully!');
        // Here you can add code to send the form data to your server
    } else {
        alert('Please fill in all fields.');
    }
});