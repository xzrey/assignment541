
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

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".comment-form");
    var submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();


        var name = form.querySelector('input[name="Name"]').value;
        var gender = form.querySelector('input[name="gender"]:checked').value;
        var email = form.querySelector('input[name="email"]').value;
        var comment = form.querySelector('textarea[name="Comment"]').value;

        console.log("Name: " + name);
        console.log("Gender: " + gender);
        console.log("Email: " + email);
        console.log("Comment: " + comment);


        form.reset();


        alert("Thank you for your comment!");
    });
});
