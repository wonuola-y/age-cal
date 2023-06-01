// variables first
const btn = document.getElementById("submit");

// labels
const labelDay = document.querySelector(".label-Day");
const labelMonth = document.querySelector(".label-Month");
const labelYear = document.querySelector(".label-Year");

// error messages
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

// input values
const daysContainer = document.querySelector(".days");
const monthsContainer = document.querySelector(".months");
const yearsContainer = document.querySelector(".years");

const resultsDay = document.querySelector(".results-days");
const resultsMonth = document.querySelector(".results-months");
const resultsYears = document.querySelector(".results-years");
// // submit button and arrow function
btn.addEventListener("click", mainFunction);

function displayError(message, errorElementClass) {
  const errorElement = document.querySelector(`.${errorElementClass}`);
  errorElement.textContent = message;
  let parent = errorElement.previousElementSibling;
  parent.style.border = "1px solid red";
  errorElement.style.visibility = "visible";
}

function mainFunction(e) {
  let i = true;
  e.preventDefault();
  console.log("hi");
  // days
  if (!daysContainer.value) {
    console.log(".ji");
    i = false;
    displayError("this field is required", "error-day");
    return;
  } else if (daysContainer.value > 31) {
    console.log("higher");
    displayError("must be a valid day", "error-day");

    return;
  } else {
    i = true;
    errorDay.style.visibility = "hidden";
    labelDay.style.color = "gray";
    daysContainer.style.border = "1px solid gray";
  }
  //   months
  if (!monthsContainer.value) {
    console.log(".ji");
    i = false;
    displayError("this field is required", "error-month");

    return;
  } else if (monthsContainer.value > 12) {
    i = false;
    console.log("higher");
    displayError("this field is required", "error-month");
    return;
  } else {
    i = true;
    errorMonth.style.visibility = "hidden";
    labelMonth.style.color = "gray";
    monthsContainer.style.border = "1px solid gray";
  }
  //years
  if (!yearsContainer.value) {
    console.log(".ji");
    i = false;
    displayError("this field is required", "error-year");

    return;
  } else if (
    yearsContainer.value > 2023 ||
    yearsContainer.value.toString().length > 4
  ) {
    i = false;
    console.log("higher");
    displayError("must be in the past", "error-year");

    return;
  } else {
    i = true;
    errorYear.style.visibility = "hidden";
    labelYear.style.color = "gray";
    yearsContainer.style.border = "1px solid gray";
  }
  if (
    monthsContainer.value === "4" ||
    monthsContainer.value === "6" ||
    monthsContainer.value === "9" ||
    monthsContainer.value === "11" ||
    monthsContainer.value === "04" ||
    monthsContainer.value === "06" ||
    monthsContainer.value === "09" ||
    monthsContainer.value === "11"
  ) {
    i = false;
    console.log("invale");
    if (daysContainer.value > 30) {
      i = false;
      console.log("invalid");
      displayError("must be a valid date", "error-day");

      throw new Error("Invalid date for this month!");
    }
  }
  function calculate() {
    if (i) {
      let inputDate = `${monthsContainer.value}/${daysContainer.value}/${yearsContainer.value}`;
      let inputDateObject = new Date(inputDate);
      let dateDiff = Date.now() - inputDateObject;
      let dateOutput = new Date(dateDiff);
      let dateYears = dateOutput.getUTCFullYear() - 1970;
      let dateMonth = dateOutput.getUTCMonth();
      let dateDay = dateOutput.getUTCDay() - 1;

      // results
      resultsDay.textContent = dateDay;
      resultsMonth.textContent = dateMonth;
      resultsYears.textContent = dateYears;
      return;
    // } else {
    //   alert("error");
    // }
    }
  }
  calculate();
}
