const calculateButton = document.querySelector("#calculate-button");
const yearlySalaryInput = document.querySelector("#yearly-salary");
const monthlyResultDiv = document.querySelector("#monthly-result");
const weeklyResultDiv = document.querySelector("#weekly-result");
const hourlyResultDiv = document.querySelector("#hourly-result");



// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//       console.log(entry)
//       if (entry.isIntersecting) {
//           entry.target.classList.add('show')
//       }
//   })
// })

// const hiddenElements = document.querySelectorAll('result')
// hiddenElements.forEach((el) => observer.observe(el))


calculateButton.addEventListener("click", function() {
  const yearlySalary = yearlySalaryInput.value;

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
