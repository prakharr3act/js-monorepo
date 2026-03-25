const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', calculateBMI);

function calculateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    let bmi = weight / ((height / 100) * (height / 100));

    resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
}