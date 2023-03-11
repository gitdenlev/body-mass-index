const userWeight = document.querySelector('.js-user-weight');

const userHeight = document.querySelector('.js-user-height');

const resultBtn = document.querySelector('.js-btn-result');

const removeBtn = document.querySelector('.js-btn-remove');

let userInfo = document.querySelector('.js-user-info');

let userString = document.querySelector('.js-user-string');

resultBtn.addEventListener('click', function () {
    userInfo.textContent = userWeight.value / (userHeight.value * userHeight.value);
    if (userInfo.textContent < 16) {
        userString.textContent = "Значний дефіцит маси тіла";
    };

    if (16 <= userInfo.textContent && userInfo.textContent <= 18.5) {
        userString.textContent = "Дефіцит маси тіла";
    };
    if (18.5 <= userInfo.textContent && userInfo.textContent <= 25) {
        userString.textContent = "Норма";
    };
    if (25 <= userInfo.textContent && userInfo.textContent <= 30) {
        userString.textContent = "Зайва вага";
    };
    if (30 <= userInfo.textContent && userInfo.textContent <= 35) {
        userString.textContent = "Ожиріння першого ступеня";
    };
    if (35 <= userInfo.textContent && userInfo.textContent <= 40) {
        userString.textContent = "Ожиріння другого ступеня";
    };
    if (30 <= userInfo.textContent > 40) {
        userString.textContent = "Ожиріння третього ступеня";
    };
});

removeBtn.addEventListener('click', function () {
    userWeight.value = '';
    userHeight.value = '';
    userInfo.textContent = '';
    userString.textContent = '';
});















