# Project 2
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode)
# BMI CALCULATOR
# Solution CODE
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(form.querySelector('#height').value);
  const weight = parseInt(form.querySelector('#weight').value);
  const results = form.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(3);
    results.innerHTML = `<span>${bmi}</span>`;
  }
  const bmi = weight / ((height * height) / 10000);
  const message = form.querySelector('#message');
  if (bmi < 18.6) {
    message.innerHTML =
      '<h2 style="color:black;font-size:30px;"><i>You are underweight</i></h2>';
  } else if (bmi > 18.6 && bmi < 24.9) {
    message.innerHTML =
      '<h2 style="color:black;font-size:30px;"><i>Your weight is quite normal</i></h2>';
  } else {
    message.innerHTML =
      '<h2 style="color:black;font-size:30px;"><i>You are overweight</i></h2>';
  }
});


```