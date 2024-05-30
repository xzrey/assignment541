
document.getElementById('menuBtn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.left === '-250px') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-250px';
    }
});


document.getElementById('exitBtn').addEventListener('click', function() {
    document.getElementById('menu').style.left = '-250px';
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.comment-form');
    var submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();


        var formData = new FormData(form);
        var name = formData.get('Name');
        var gender = formData.get('gender');
        var email = formData.get('email');
        var comment = formData.get('Comment');


        var submissionMessage = document.createElement('p');
        submissionMessage.textContent = 'Thank you, ' + name + ', for your comment!';
        form.appendChild(submissionMessage);


        setTimeout(function() {
            submissionMessage.remove();
        }, 3000);


        form.reset();
    });
});
