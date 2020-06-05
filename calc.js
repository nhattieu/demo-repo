let textFieldX = document.getElementById('textFieldX');
let textFieldY = document.getElementById('textFieldY');
let resultField = document.getElementById('resultField');

let formCalc = document.getElementById('formCalc');

formCalc.addEventListener('submit', (event) => {

    if(!textFieldX.value || !textFieldY.value) {
        alert('Please enter values in the fields');
    } 
    
    else {
        let numberX = parseFloat(textFieldX.value);
        let numberY = parseFloat(textFieldY.value);
        
        let result = numberX / numberY;
        let percent = result * 100;

        resultField.innerText = "Result: " + percent + "%";

        event.preventDefault();
    }
    

})
