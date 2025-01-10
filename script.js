document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you for your message, ${name}! We'll get back to you at ${email}.`);

        // Clear the form fields
        document.getElementById('contactForm').reset();
    });
});