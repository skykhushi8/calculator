const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function append(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function addHistory(expression,result){

let li = document.createElement("li");
li.textContent = expression + " = " + result;
historyList.prepend(li);

}

function calculate(){

try{

let expression = display.value;

let result = eval(expression);

display.value = result;

addHistory(expression,result);

}catch{

display.value = "Error";

}

}

function sqrt(){
let value = parseFloat(display.value);
let result = Math.sqrt(value);
addHistory("√"+value,result);
display.value = result;
}

function square(){
let value = parseFloat(display.value);
let result = value*value;
addHistory(value+"²",result);
display.value = result;
}

function sin(){
let value = parseFloat(display.value);
let result = Math.sin(value);
addHistory("sin("+value+")",result);
display.value = result;
}

function cos(){
let value = parseFloat(display.value);
let result = Math.cos(value);
addHistory("cos("+value+")",result);
display.value = result;
}

function tan(){
let value = parseFloat(display.value);
let result = Math.tan(value);
addHistory("tan("+value+")",result);
display.value = result;
}

function log(){
let value = parseFloat(display.value);
let result = Math.log10(value);
addHistory("log("+value+")",result);
display.value = result;
}

document.addEventListener("keydown",(e)=>{

let key = e.key;

if(!isNaN(key) || "+-*/.%".includes(key)){
append(key);
}

if(key === "Enter"){
calculate();
}

if(key === "Backspace"){
deleteLast();
}

if(key === "Escape"){
clearDisplay();
}

});