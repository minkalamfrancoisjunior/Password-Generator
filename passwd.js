const password = document.getElementById("password")
const generateButton = document.getElementById("generateBtn")
const copyButton = document.getElementById("copyBtn")
const lengths = document.getElementById("length")
const uCase = document.getElementById("uppercase")
const lCase = document.getElementById("lowercase")
const numberss = document.getElementById("numbers")
const symbolss = document.getElementById("symbols")
const upperCase = "ABCDEFHGIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefhgijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+"


function generatePassword(){
    let characters = ""

    if(uCase.checked){
    characters += upperCase
    }
    if(lCase.checked){
        characters += lowerCase
    }
    if(numberss.checked){
        characters += numbers
    }
    if(symbolss.checked){
        characters += symbols
    }


    let result = ""
    if(characters.length === 0){
        alert("Select atleast one option")
        return
    }
    for(let i = 0; i < lengths.value; i++){
        const randomIndex = Math.floor(Math.random()*characters.length)
        result += characters[randomIndex]
    }

    password.value = result
}

generateButton.addEventListener("click",generatePassword)

copyButton.addEventListener("click", function(){
    password.select()
    navigator.clipboard.writeText(password.value)
    alert("Password copied !")
})