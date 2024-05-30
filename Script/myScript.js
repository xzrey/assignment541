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
