let form = document.getElementById("sign-up-form")

form.addEventListener("submit",function(e){
    e.preventDefault()

    let email = document.getElementById("email")

    let password = document.getElementById("password")

    let confirmPw = document.getElementById("confirm-password")

    let errorText = document.getElementById("error-txt")

    errorText.innerText = ""

    if(!(email.value.endsWith("@email.com") || email.value.endsWith("@gmail.com"))){
        errorText.innerText = "Email must ends with \"@email.com\" or \"@gmail.com\""
    }
    else if(password.value.length < 6){
        errorText.innerText = "Password must contain at least 6 characters"
    }
    else if(!validatePassword(password.value)){
        errorText.innerText = "Password must at least contains 1 digit, 1 capital letter, and 1 lowercase letter"
    }
    else if(confirmPw.value != password.value){
        errorText.innerText = "Confirm Password must match with the Password"
    }
    else{
        alert("Account Registered Successfully!!")
        window.location.href = "./index.html"
    }
})

function validatePassword(input){
    let containDigits = false
    let containCapital = false
    let containLowercase = false

    for(let i=0;i<input.length;i++){
        const c = input[i];
        if(c >= '0' && c <='9'){
            containDigits = true
        }
        if(c >= 'A' && c <= 'Z'){
            containCapital = true
        }
        if(c >= 'a' && c <= 'z'){
            containLowercase = true
        }
    }

    return containDigits && containCapital && containLowercase
}