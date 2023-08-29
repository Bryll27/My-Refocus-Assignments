// bmi_calculator.js

function calculateBMI(weight, height) {
  // Calculate BMI formula: BMI = weight (kg) / (height (m) * height (m))
  const bmi = weight / (height * height);
  return bmi;
}

const weight = 70;      // Weight in kilograms
const height = 1.75;    // Height in meters

const bmiResult = calculateBMI(weight, height);
console.log()(`Your BMI is: ${bmiResult.toFixed(2)}`);


