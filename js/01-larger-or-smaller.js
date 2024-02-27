let elem = document.querySelector("body")
let num1 = parseInt(prompt ("Enter a first number") );
let num2 = parseInt(prompt ("Enter a second number") )

if ( isNaN(num1) || isNaN(num2)) {elem.innerHTML = `<h1>Not valid enter</h1>`}

else {
    if (num1>=num2){elem.innerHTML = `<h1>${num1}</h1>`;}
    else {elem.innerHTML = `<h1>${num2}</h1>`;}
  }