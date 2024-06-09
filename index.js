let buttons = document.querySelectorAll(".numbers, .operators, .twice, .clear, .del, .percent");
let output = "";
let screen = document.querySelector(".screen");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            output = eval(output);
            screen.textContent = output;
        }
        else if(e.target.innerHTML==='AC'){
            output="";
            screen.textContent=output;
        }
        else if(e.target.innerHTML==='+/-'){
            if(output!="0"){
                output=parseInt(output)*(-1);
                screen.textContent=output;
            }
        }
        else if(e.target.innerHTML==='%'){
            if(output!="0"){
                output=parseInt(output)/100;
                screen.textContent=output;
            }
        }
        else if (e.target.innerHTML === '.') {
            let lastOperand = output.split(/[\+\-\*\/]/).pop(); 
            if (!lastOperand.includes('.')) { 
                output += e.target.innerHTML;
                screen.textContent = output;
            }
        }
        else if (e.target.classList.contains('operators')) {
            if (output === "" || /[\+\-\*\/]$/.test(output)) {
                alert("Invalid input: Cannot use operator here.");
                return;
            }
            output += e.target.innerHTML;
            screen.textContent = output;
        }
            
        else {
            if(output=="0"){
                output=e.target.innerHTML;
            }
            else{
                output += e.target.innerHTML;
            }
            screen.textContent = output;   
        }
    });
});
