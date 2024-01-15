let btns = document.querySelectorAll(".num-button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");
let total = document.querySelector("#total");
let deleteBtn = document.getElementById("delete");
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


// Handling the delete button click
deleteBtn.addEventListener("click", () => {
  let currentResult = resultBox.innerHTML;
  
  // Remove the last character from the resultBox
  resultBox.innerHTML = currentResult.slice(0, -1);
  
  // If the resultBox becomes empty, reset it to "0"
  if (resultBox.innerHTML === "") {
    resultBox.innerHTML = "0";
  }
});