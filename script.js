const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const value3 = document.getElementById("value3");
const value4 = document.getElementById("value4");
const result = document.getElementById("resultado");
let x;
function calc() {
  if (
    value1.value !== "0" ||
    value2.value !== "0" ||
    value4.value !== "0"
  ) {
    let calculate = (value1.value*value4.value)/value2.value
    if(String(calculate).includes('.')){
      x = parseFloat(calculate).toFixed(2)
    }else{
      x = calculate
    }
    
    result.innerHTML = `<strong>O valor de X = ${x}</strong>` 
    
  }else{
    let x = 0
    result.innerHTML = `<strong>O valor de X = ${x}</strong>` 
  }
}
