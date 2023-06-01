const btn = document.getElementById("submit");
const days = document.querySelector(".days")
const daysContainer = document.querySelector(".days");

const months = document.querySelector(".months")
const years = document.querySelector(".years").value;
const yearsContain = document.querySelector(".years");

// labels
const label = document.querySelectorAll('label')
const labelDay = document.querySelector(".label-Day");
const labelMonth = document.querySelector(".label-Month");
const labelYear = document.querySelector(".label-Year");

// output results
const ansDays = document.querySelector(".results-days");

const ansMonths = document.querySelector(".results-months");

const ansYears = document.querySelector(".results-years");

btn.addEventListener("click", mainFunction);


const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const monthsList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;

  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required.";
      validator = false;
    } 
    else if (months.value > 12) {
        months.style.borderColor = "red";
        months.parentElement.querySelector("small").innerText = "must be valid month.";
        validator = false;
    } else if (days.value > 31) {
        days.style.borderColor = "red";
        days.parentElement.querySelector("small").innerText =
          "must be valid day.";
        validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}
function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (days.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (months.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - days.value;
    const m = month - months.value;
    const y = year - yearInp.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}

// function mainFunction(e) {
//   e.preventDefault();
//   const input = document.querySelectorAll("input");
//   let i = true;

//   input.forEach((a) => {
//     const container = a.parentElement;
//     const errorMonth = document.querySelector(".error-month");
//     const errorYear = container.querySelector(".error-year");
//     const errorDay = document.querySelector(".error-day");

//     if (!a.value) {
//     i = false;
//     a.style.border = "1px solid red";
//     container.querySelector('small') .textContent = 'this field is required'
//     errorDay.style.visibility = "visible";
//     console.log(label);
//     } 

//     else if (months.value > 12) {
//     //   errorMonth.style.visibility = 'hidden'
//       months.style.border = "1px solid red";
//       months.parentElement.querySelector("small").textContent ="must be valid month.";
//       errorMonth.style.visibility = "visible";
//       i = false
//       labelMonth.style.color = "red";
//     } 
    
//     else if (days > 31) {
//       errorDay.style.visibility = "visible";
//       errorDay.textContent = "Must be a valid day";
//       labelDay.style.color = "red";
//       daysContainer.style.border = "1px solid red";
//     }
    
//     else {
//     errorMonth.style.visibility = 'hidden'
//       errorDay.style.visibility = "hidden";
//       labelDay.style.color = "gray";
//       daysContainer.style.border = "1px solid gray";
//       //   errorMonth.style.visibility = "hidden";
//       labelMonth.style.color = "gray";
//       months.style.border = "1px solid gray";
//     }
//   });
// }
