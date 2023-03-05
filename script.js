let firstVal = ''
let secondVal = ''
let operator = ''
const clearBtn = document.getElementById('clear-btn')
const equalBtn = document.getElementById('equal-btn')
const dotBtn = document.getElementById('dot-btn')
const displayEL = document.querySelector('.display')

const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')


const calculate = () => {
    if(firstVal !== '' && secondVal !== ''){
        firstVal = Number(firstVal)
        secondVal = Number (secondVal)
        let result
        switch(operator){
            case '%':
            result = firstVal % secondVal
            break;
            case '/':
            if(secondVal == 0){
                displayEL.textContent = "No can do!"
                operator =''
                firstVal =''
                secondVal =''
                return
            }else{
                result = firstVal / secondVal
            }
            break;
            case '*':
            result = firstVal * secondVal
            break;
            case '-':
            result = firstVal - secondVal
            break;
            case '+':
            result = firstVal + secondVal
            break;
        }
        displayEL.textContent = result
        firstVal = `${result}`
        secondVal = ''
        operator = ''
    }
}

numbers.forEach((number) => number.addEventListener('click', (event) => {
    handleNum(event.target.textContent)
    operator == '' ? 
    displayEL.textContent = firstVal : 
    displayEL.textContent = `${firstVal} ${operator} ${secondVal}` 
    
}))

operators.forEach(op => op.addEventListener('click',(event) => {
    handleOp(event.target.textContent)
    
}))

dotBtn.addEventListener('click', () => {
    if(secondVal == '' && firstVal.includes('.')== false){
        firstVal += '.'
    } else if(secondVal !== '' && secondVal.includes('.') == false){
        secondVal += '.'
    }
    displayEL.textContent = `${firstVal} ${operator} ${secondVal}` 
})

clearBtn.addEventListener('click', () => {
    firstVal =''
    secondVal =''
    operator =''
    displayEL.textContent = firstVal
})

equalBtn.addEventListener('click', calculate)


const handleNum = (num) => {
    if(operator === '' && firstVal.length < 8){
        firstVal += num
    }else if(operator != '' && secondVal.length < 8){
        secondVal +=num
    }
}
const handleOp = (op) => {
    if(firstVal == '' || firstVal == '-' || firstVal == '+'){
        op == '-' || op == '+'? firstVal = op : firstVal = ''
        displayEL.textContent = firstVal
        return
    }
    if(operator != ''){
        calculate()
    }
    operator = op
    displayEL.textContent = `${firstVal} ${operator} ${secondVal}`
    
    
}