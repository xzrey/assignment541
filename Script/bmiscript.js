// JavaScript for BMI calculation
document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Display the result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Your BMI Result:</h2><p>' + bmi.toFixed(2) + '</p>';

    // Interpret BMI
    var interpretation = '';
    if (bmi < 18.5) {
        interpretation = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = 'Overweight';
    } else {
        interpretation = 'Obese';
    }
    resultDiv.innerHTML += '<p>' + interpretation + '</p>';
});
