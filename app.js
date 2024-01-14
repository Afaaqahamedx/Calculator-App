// let btns = document.querySelectorAll(".num-button");
// let allBtns = document.querySelectorAll(".button");
// let resultBox = document.querySelector("#result-box");
// let clearBtn = document.querySelector("#clear");
// let total = document.querySelector("#total");
// let btnSpread = [...btns];
// let allBtnSpread = [...allBtns];
// // For Number Inputs.

// btnSpread.forEach((button, i) => {
//   button.addEventListener("click", () => {
//     // Inner Values for calculator
//     if (resultBox.innerHTML == "0") {
//       resultBox.innerHTML = "";
//     }
//     let value = btns[i].innerHTML;
//     resultBox.innerHTML += value;
//   });
// });

// // Function to evalute Strings
// function evaluate(fn) {
//   return new Function(`return` + fn)();
// }
// // To calculate All Input
// total.addEventListener("click", () => {
//   let allInputs = resultBox.innerHTML;
//   resultBox.innerHTML = evaluate(allInputs);
//   console.log(evaluate(allInputs));
// });
// // Clear all Inputs
// clearBtn.addEventListener("click", () => {
//   resultBox.innerHTML = "0";
// });


// Selecting elements from the DOM
let btns = document.querySelectorAll(".num-button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");
let total = document.querySelector("#total");

// Converting NodeList to Array for easier manipulation
let btnSpread = Array.from(btns);

// Handling number button clicks
btnSpread.forEach((button) => {
  button.addEventListener("click", () => {
    // If the current value is "0", replace it with the clicked number
    if (resultBox.innerHTML === "0") {
      resultBox.innerHTML = "";
    }
    
    // Append the clicked number to the resultBox
    let value = button.innerHTML;
    resultBox.innerHTML += value;
  });
});

// Function to evaluate mathematical expressions
function evaluate(fn) {
  // Use try-catch to handle potential syntax errors in the expression
  try {
    return new Function(`return ${fn}`)();
  } catch (error) {
    return "Error";
  }
}

// Handling the total button click
total.addEventListener("click", () => {
  let allInputs = resultBox.innerHTML;
  
  // Evaluate the expression and update the resultBox
  resultBox.innerHTML = evaluate(allInputs);
});

// Handling the clear button click
clearBtn.addEventListener("click", () => {
  // Reset the resultBox to "0"
  resultBox.innerHTML = "0";
});
