let res = document.getElementById("res");
function inputChar() {
    res.insertAdjacentHTML('beforeend',this.innerHTML);
}
document.getElementById("btn0").onclick = inputChar;
document.getElementById("btn1").onclick = inputChar;
document.getElementById("btnSum").onclick = inputChar;
document.getElementById("btnSub").onclick = inputChar;
document.getElementById("btnMul").onclick = inputChar;
document.getElementById("btnDiv").onclick = inputChar;
document.getElementById("btnClr").onclick = function() {
    res.innerHTML = "";
};
document.getElementById("btnEql").onclick = function() {
    let matched = res.innerHTML.match(/(\d+)([+\_\*\/])(\d+)/);
    let operand1 = parseInt(matched[1],2);
    let operator = matched[2];
    let operand2 = parseInt(matched[3],2);
    let result;
    switch( operator) {
        case '+': result = operand1 + operand2; break;
        case '-': result = operand1 - operand2; break;
        case '*': result = operand1 * operand2; break;
        case '/': result = operand1 / operand2; break;
    }
    res.innerHTML = result.toString(2);
    
    
}