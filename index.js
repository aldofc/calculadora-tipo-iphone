const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const sings = document.querySelectorAll('.sing');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');


let firstValue = "";
let isFirstValue = false ;
let secondValue = "";
let isSecondValue = false;
let sing = "";
let resultValue = 0;


for(let i = 0; i < numbers.length ; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false) {
           getFirstValue(atr)
        }
        if(isSecondValue === false) {
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el) {
        result.innerHTML = "";
        firstValue += el;
        result.innerHTML = firstValue;
        firstValue = +firstValue;

}


function getSecondValue(el){
    if(firstValue != '' && sing != '') {
        secondValue += el;
        result.innerHTML = secondValue
        secondValue = +secondValue;
    }
}



function  getSing(){
    for(let i = 0 ; i < sings.length ; i++){
        sings[i].addEventListener('click' , (e) => {
            sing = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}

getSing();  



equals.addEventListener('click', () => {
    result.innerHTML = '';
    if(sing === '+') {
        resultValue = firstValue + secondValue;
    }else if(   sing === '-'){
        resultValue = firstValue - secondValue;
    }else if(sing === 'x') {
        resultValue = firstValue * secondValue;
    }else if( sing === '/'){
        resultValue = firstValue / secondValue; 
    }
    result.innerHTML = resultValue;
    firstValue = resultValue
    secondValue = '';
})

function checkResultLength(){
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5)
    }
}

negative.addEventListener('click' , () => {
    result.innerHTML = '' ;
    if(firstValue != '') {
        resultValue = -firstValue
        firstValue = resultValue
    }
    if(firstValue != '' && secondValue != '' && sing != ''){
        resultValue = -resultValue
    }

    result.innerHTML = resultValue;
    
})


percent.addEventListener('click' ,() => {
       result.innerHTML = "";
       if(firstValue != "") {
        resultValue = firstValue / 100 ;
        firstValue = resultValue
       }
       if(firstValue != "" && secondValue != "" && sing != ""){
           resultValue = resultValue / 100;
       }

       result.innerHTML = resultValue
})


clear.addEventListener("click" , () => {
     result.innerHTML = 0;

      firstValue = '';
      isFirstValue = false ;
      secondValue = '';
      isSecondValue = false;
      sing = '';
      resultValue = 0;
})

