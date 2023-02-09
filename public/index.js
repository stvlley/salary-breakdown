const calculateButton = document.querySelector("#calculate-button");
const yearlySalaryInput = document.querySelector("input");
const monthlyResultDiv = document.querySelector("#monthly-result");
const weeklyResultDiv = document.querySelector("#weekly-result");
const hourlyResultDiv = document.querySelector("#hourly-result");


yearlySalaryInput.onkeyup = function() {
  let removeChar = this.value.replace(/[^0-9\.]/g, '')
  let removeDot = removeChar.replace(/\./g, '')
  this.value = removeDot
  let formatedNumber = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  this.value = formatedNumber
}

calculateButton.addEventListener("click", function() {
  const yearlySalary = yearlySalaryInput.value.replace(/,/g, '');


  if (!yearlySalary) {
    alert("Please enter your yearly salary");
    return;
  }

  const monthlySalary = yearlySalary / 12;
  const weeklySalary = yearlySalary / 52;
  const hourlySalary = yearlySalary / 52 / 40;

  monthlyResultDiv.innerHTML = `Monthly: $${monthlySalary.toFixed(2)}`;
  weeklyResultDiv.innerHTML = `Weekly: $${weeklySalary.toFixed(2)}`;
  hourlyResultDiv.innerHTML = `Hourly: $${hourlySalary.toFixed(2)}`;

  monthlyResultDiv.classList.add('show');
  weeklyResultDiv.classList.add('show');
  hourlyResultDiv.classList.add('show');
});