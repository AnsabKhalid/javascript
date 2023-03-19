const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const upperElement = document.getElementById('uppercase');
const lowerElement = document.getElementById('lowercase');
const numberElement = document.getElementById('number');
const symbolElement = document.getElementById('symbol');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardElement.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultElement.innerText

    if (!password) {
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateElement.addEventListener('click', () => {
    const length = +lengthElement.value
    const hasLower = lowerElement.checked
    const hasUpper = upperElement.checked
    const hasNumber = numberElement.checked
    const hasSymbol = symbolElement.checked

    resultElement.innerText = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].
        filter(item => Object.values(item)[0])

    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword

    console.log(typesArr)
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*()_+=-,./?|<>";
    return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getRandomSymbol());