'use strict'
// todo НОРМА ___________
// ! 1. Запитай ім’я користувача та виведи у відповідь “Привіт, ім’я”;
let userName = document.querySelector('.user-name');
let helloUserName = userName.nextElementSibling;
helloUserName.hidden = true;

userName.onchange = () => {
  let userNameDate = userName.value.trim();

  if (userNameDate.length !== 0) {
    helloUserName.hidden = false;
    helloUserName.textContent = `Привіт, ${userName.value}`
  } else if (userNameDate.length === 0) {
    helloUserName.hidden = true;
  }
}

// ! 2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
let userYear = document.querySelector('.user-year');
let userYearOfBirth = userYear.nextElementSibling;
userYearOfBirth.hidden = true;
const currentНear = 2021;

userYear.onchange = () => {
  let userYearDate = userYear.value.trim();
  let numUserYearDate = +userYearDate;
  
  if (!isNaN(parseFloat(numUserYearDate)) && isFinite(numUserYearDate)) {
    if (userYearDate.length !== 4 && userYearDate.length > 0) {
      alert('Введи 4-х значне число')
    } else if (numUserYearDate >= currentНear) {
      alert('Введи рік менший поточного!');
    } else if (userYearDate.length === 0) {
      userYearOfBirth.hidden = true;
    } else if (numUserYearDate <= 0) {
      alert('Введи число більше нуля');
    } else {
      userYearOfBirth.hidden = false;
      userYearOfBirth.textContent = `Тобі ${currentНear - numUserYearDate} рік/років/роки`
    }
  } else {
    alert('Введи дані в форматі число');
  }
}

// ! 3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let lengthSidesOfTheSquare = document.querySelector('.perimeter-square');
let perimeterSquare = lengthSidesOfTheSquare.nextElementSibling;
perimeterSquare.hidden = true;

lengthSidesOfTheSquare.onchange = () => {
  let userLength = lengthSidesOfTheSquare.value.trim();
  let numUserLength = +userLength;
  
  if (!isNaN(parseFloat(numUserLength)) && isFinite(numUserLength)) {
    if (userLength.length === 0) {
      perimeterSquare.hidden = true;
    } else if (numUserLength <= 0) {
      alert('Введи число більше нуля')
    } else {
      perimeterSquare.hidden = false;
      perimeterSquare.textContent = `Периметр квадрата ${numUserLength * 4}`
    }
  } else {
    alert('Введи дані в форматі число');
  }
}

// todo Максимум _____________________

// ! Запитай у користувача радіус кола і виведи площу такої окружності.
let radiusOfTheCircle = document.querySelector('.radius-circle');
let areaEnter = radiusOfTheCircle.nextElementSibling;
areaEnter.hidden = true;

radiusOfTheCircle.onchange = () => {
  let userRadius = radiusOfTheCircle.value.trim();
  let numUserRadius = +userRadius;
  
  if (!isNaN(parseFloat(numUserRadius)) && isFinite(numUserRadius)) {
    if (userRadius.length === 0) {
      areaEnter.hidden = true;
    } else if (numUserRadius <= 0) {
      alert('Введи число більше нуля')
    } else {
      areaEnter.hidden = false;
      areaEnter.textContent = `Площа кола ${(Math.PI * numUserRadius ** 2).toFixed(2)}`
    }
  } else {
    alert('Введи дані в форматі число');
  }
}

// ! Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
let userDistance = document.querySelector('.distance');
let userTime = document.querySelector('.time');
let speed = userDistance.nextElementSibling;
speed.hidden = true;

userDistance.onchange = () => {
  let userDistanceDate = userDistance.value.trim();
  let userDistanceNum = +userDistanceDate;

  if (!isNaN(parseFloat(userDistanceNum)) && isFinite(userDistanceNum)) {
    if (userDistanceDate.length === 0) {
      userDistance.value = '';
    } else if (userDistanceNum <= 0) {
      alert('Введи число більше нуля')
      userDistance.value = '';
    }
  } else {
    alert('Введи дані в форматі число');
    userDistance.value = '';
  }
}

userTime.onchange = () => {
  let userTimeDate = userTime.value.trim();
  let userTimeNum = +userTimeDate;

  if (!isNaN(parseFloat(userTimeNum)) && isFinite(userTimeNum)) {
    if (userTimeDate.length === 0) {
      userTime.value = '';
    } else if (userTimeNum <= 0) {
      alert('Введи число більше нуля')
      userTime.value = '';
    }
  } else {
    alert('Введи дані в форматі число');
    userTime.value = '';
  }
}

let button = document.querySelector('.btn');

button.onclick = () => {
  if (userDistance.value.trim().length === 0 || userTime.value.trim().length === 0) {
    alert('Вкажи дані!')
    speed.hidden = true;
  } else {
    let speedDate = (+userDistance.value.trim() / +userTime.value.trim()).toFixed(2);
    speed.textContent = speedDate;
    speed.hidden = false;
  }
}

// ! Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
let converter = document.querySelector('.converter');
let euro = converter.nextElementSibling;
euro.hidden = true;
const coefficientEur = 0.88;

converter.onchange = () => {
  let converterDate = converter.value.trim();
  let converterNum = +converterDate;
  
  if (!isNaN(parseFloat(converterNum)) && isFinite(converterNum)) {
    if (converterDate.length === 0) {
      euro.hidden = true;
      converter.value = '';
    } else if (converterNum <= 0) {
      alert('Введи число більше нуля');
      converter.value = '';
    } else {
      euro.hidden = false;
      euro.textContent = `${(converterNum * coefficientEur).toFixed(2)} euro`
    }
  } else {
    alert('Введи дані в форматі число');
    converter.value = '';
  }
}
