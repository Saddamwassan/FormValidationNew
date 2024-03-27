let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError");
let phoneError = document.querySelector(".phoneError");
let messageError = document.querySelector(".messageError");

function validateName(){
    let userinput = document.getElementById("userInputId").value;
    if(userinput == ""){
        nameError.innerHTML = "name is required";
        return false;
    }else if(!userinput.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "write Full Name";
        return false;

    }else{
        nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
    }
}
function validateEmail(){
    let userinput = document.getElementById("emailInputId").value;
    if(userinput == ""){
        emailError.innerHTML = "email is required";
        return false;
    }else if(!userinput.match(/^[A-Za-z]*\._\-[0-9]*[A-Za-z][@]*[A-Za-z][.]*[A-Za-z]{2,4}*$/)){
        emailError.innerHTML = "invalid email";
        return false;

    }else{
        emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
    }
}