let numberEl = document.getElementById("number-el")
let peopleEl = document.getElementById("people-el")
let count = 0

function increase() {
    count += 1
    numberEl.textContent = count 
}

function decrease() {
    count --
    numberEl.textContent = count 
}

function save() {
    peopleEl.textContent += " " + count + " - " 
    numberEl.textContent = 0
    count = 0
}


function reset() {
    peopleEl.textContent = "Number of people per hour:"
    numberEl.textContent = 0
    count = 0
    
}