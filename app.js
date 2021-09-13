var btnTransalate = document.querySelector("#a");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
function clickEventHandler() {
outputDiv.innerText="asdsdd"+txtInput.value    
}

btnTransalate.addEventListener("click" , clickEventHandler);