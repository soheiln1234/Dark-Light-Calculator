// Get the mode from local storage
window.onload = () => {
  const body = document.body;

  let mode = localStorage.getItem("mode");
  if (mode === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
};

// Changing mode of calculatore
const themeChange = (mode) => {
  const body = document.body;

  if (mode === "light") {
    body.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
    body.classList.add("dark-mode");
  }
};


//functionality section starts here
const keyNumbersHtmlCollection = document.querySelectorAll(".key");
const keyNumbersArray = Array.from(keyNumbersHtmlCollection);
const display = document.querySelector(".display__result-text");
const historyDisplay = document.querySelector(".display__history-text");

keyNumbersArray.forEach(element => {
  if(element.innerHTML === "="){
    element.addEventListener("click", () => {
      const correctDisplayValue = display.innerHTML.replaceAll("÷", "/").replaceAll("×", "*").replaceAll("−", "-").replaceAll("^", "**");
      const evalCorrectDisplayValue = eval(correctDisplayValue);
      const coleredOpreatorExpression = display.innerHTML.replaceAll("÷", `<span style = 'color:#DB6161'>÷</span>`).replaceAll("×",`<span style = 'color:#DB6161'>×</span>`).replaceAll("−",`<span style = 'color:#DB6161'>−</span>`).replaceAll("+",`<span style = 'color:#DB6161'>+</span>`).replaceAll("%",`<span style = 'color:#DB6161'>%</span>`).replaceAll("^",`<span style = 'color:#DB6161'>^</span>`);
      historyDisplay.innerHTML = coleredOpreatorExpression + " = " + evalCorrectDisplayValue;  
      display.innerHTML = evalCorrectDisplayValue;      
    })}
  else if(element.id === "undo"){
    element.addEventListener("click", () => {
      let displayLen = display.innerHTML.length;
      display.innerHTML = display.innerHTML.slice(0, displayLen - 1);
    })}
  else if(element.innerHTML !== "AC"){
    element.addEventListener("click", (event) => {
      let displayLen = display.innerHTML.length;      
      if(!(display.innerHTML[displayLen - 1] === "÷" || display.innerHTML[displayLen - 1] === "×" || display.innerHTML[displayLen - 1] === "−" || display.innerHTML[displayLen - 1] === "." || display.innerHTML[displayLen - 1] === "%" || display.innerHTML[displayLen - 1] === "+" || display.innerHTML[displayLen - 1] === "%" || display.innerHTML[displayLen - 1] === "^" )){
        display.innerHTML += event.target.innerHTML;
        console.log(display.innerHTML);
    }else {
      if(event.target.innerHTML!== "÷" && event.target.innerHTML!== "×" && event.target.innerHTML!== "−" &&event.target.innerHTML!== "." &&event.target.innerHTML!== "%" && event.target.innerHTML!== "+" && event.target.innerHTML !== "^"){
        display.innerHTML += event.target.innerHTML;
      }
    }
  })}
  else{
    element.addEventListener("click", () => {
      display.innerHTML = "";
    })
  };
});
//functionality section ends here
