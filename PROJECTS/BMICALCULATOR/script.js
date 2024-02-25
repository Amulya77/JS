const button = document.querySelector('button');

button.addEventListener('click', function(e) {
  e.preventDefault();

  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiCategory;

    if (bmi < 18.6) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmiCategory = 'Normal weight';
    } else {
      bmiCategory = 'Overweight';
    }

    results.innerHTML = `Your BMI is <span>${bmi}</span>. You are ${bmiCategory}.`;
    
    // results.innerHTML = `Your BMI is <span>${bmi}</span>`;
  }
  

});
