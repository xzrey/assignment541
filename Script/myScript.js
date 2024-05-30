// JavaScript to toggle the sliding menu
document.getElementById('menuBtn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.left === '-250px') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-250px';
    }
});

// Close menu when exit button is clicked
document.getElementById('exitBtn').addEventListener('click', function() {
    document.getElementById('menu').style.left = '-250px';
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.comment-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form data
        var formData = new FormData(form);
        var name = formData.get('Name');
        var gender = formData.get('gender');
        var email = formData.get('email');
        var comment = formData.get('Comment');

        // Display submission message
        var submissionMessage = document.createElement('p');
        submissionMessage.textContent = 'Thank you, ' + name + ', for your comment!';
        form.appendChild(submissionMessage);

        // Reset the form after 3 seconds
        setTimeout(function() {
            submissionMessage.remove(); // Remove the message element
        }, 3000);

        // Reset the form
        form.reset();
    });
});
