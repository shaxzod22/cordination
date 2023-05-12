let btn = document.querySelector('.btn')
let inputX = document.querySelector('.xInput')
let inputY = document.querySelector('.yInput')
let result = document.querySelector('.text')

btn.addEventListener('click' , function(event) {
    event.preventDefault()
    
    let xInputValue = inputX.value
    let yInputValue = inputY.value
    
    if(xInputValue > 0 && yInputValue > 0) {
        result.textContent = 'I chorak'
    } else if(xInputValue > 0 && yInputValue < 0) {
        result.textContent = 'IV chorak'
    } else if(xInputValue < 0 && yInputValue < 0) {
        result.textContent = 'III chorak'
    } else {
        result.textContent = 'II chorak'
    }
})