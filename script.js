const userWeight = document.querySelector('.js-user-weight');
const userHeight = document.querySelector('.js-user-height');
const resultBtn = document.querySelector('.js-btn-result');
const removeBtn = document.querySelector('.js-btn-remove');
let userInfo = document.querySelector('.js-user-info');
let userString = document.querySelector('.js-user-string');

resultBtn.addEventListener('click', function () {
  const weightValue = parseFloat(userWeight.value.replace(',', '.'));
  const heightValue = parseFloat(userHeight.value.replace(',', '.'));
  if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
    userInfo.textContent = 'Некоректно';
    userString.textContent = '';
    return;
  }
  const bmiValue = weightValue / (heightValue * heightValue);
  userInfo.textContent = bmiValue.toFixed(2);
  if (bmiValue < 16) {
    userString.textContent = 'Значний дефіцит маси тіла';
  } else if (16 <= bmiValue && bmiValue <= 18.5) {
    userString.textContent = 'Дефіцит маси тіла';
  } else if (18.5 <= bmiValue && bmiValue <= 25) {
    userString.textContent = 'Норма';
  } else if (25 <= bmiValue && bmiValue <= 30) {
    userString.textContent = 'Зайва вага';
  } else if (30 <= bmiValue && bmiValue <= 35) {
    userString.textContent = 'Ожиріння першого ступеня';
  } else if (35 <= bmiValue && bmiValue <= 40) {
    userString.textContent = 'Ожиріння другого ступеня';
  } else if (bmiValue > 40) {
    userString.textContent = 'Ожиріння третього ступеня';
  }
});

removeBtn.addEventListener('click', function () {
  userWeight.value = '';
  userHeight.value = '';
  userInfo.textContent = '';
  userString.textContent = '';
});
