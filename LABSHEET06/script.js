// DOM Object 
const nameText = document.getElementById("nameText")
const dob = document.getElementById("dob")
const ageText = document.getElementById("ageText")
const number = document.getElementById("number")
const gender = document.getElementById("gender")
const genderText = document.getElementById("genderText")
const country = document.getElementById("country")
const countryText = document.getElementById("countryText")
const password = document.getElementById("password")
const confirmpassword = document.getElementById("confirmpassword")
const btn = document.getElementById("btn")
const passwordStatus = document.getElementById("passwordStatus")

// event : age feild is not empty & should contain > 4 charectors 
nameText.onblur = () => {
    if(nameText.value.length < 4){
        alert("Name field should be above 4 charectors");
    }
}

// event : display age 
dob.onblur = () => {
    // calculate the age 
    let dobDate = new Date(dob.value)
    let today = new Date()
    let ageToday = today.getFullYear() - dobDate.getFullYear()
    console.log(ageToday)

    if(ageToday > 18){
        ageText.style.color = 'blue';
        ageText.style.display = 'block';
        ageText.innerHTML = "You are above 18, you can registor";
    }else {
        ageText.style.color = 'red';
        ageText.style.display = 'block';
        ageText.innerText = "You are less than 18, you cannot registor";
    }
}

// validation : phone number 
number.onblur = () => {
    if(!(/^[0-9]{10}$/.test(number.value))){
        alert("Invalid Number");
    }
}

// GenderText : condition Text 
gender.onblur = () => {
    if(gender.value === 'other'){
        genderText.style.display = 'block';
    }
}

// CountryText : condition Text 
country.onblur = () => {
    if(country.value === "usa"){
        countryText.style.display = 'block';
    }
}

// password : validation 
confirmpassword.onblur = () => {
    if(!(confirmpassword.value === password.value)){
        alert("Password Not Matches");
    }
}


// password strength 
password.onblur = () => {
    if(/^[0-9]+$/.test(password.value)){
        passwordStatus.style.display = "block";
        passwordStatus.style.color = 'red';
        passwordStatus.innerText = "WEAK";
    }else if(/^[0-9a-zA-Z]+$/.test(password.value)){
        passwordStatus.style.display = "block";
        passwordStatus.style.color = 'yellow';
        passwordStatus.innerText = "MEDIUM";
    }else if(/^[0-9a-zA-Z._@]+$/.test(password.value)){
        passwordStatus.style.display = "block";
        passwordStatus.style.color = 'white';
        passwordStatus.innerText = "STRONG";
    }
}

// button click 
btn.onclick = () => {
    alert("Form Submitted");
}