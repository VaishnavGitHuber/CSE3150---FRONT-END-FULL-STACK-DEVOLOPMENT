let dob = document.getElementById("dob");
let email = document.getElementById("email");
let url = document.getElementById("url");
let agerange = document.getElementById("agerange");

dob.onblur = () => {
    let datePerson = new Date(dob.value);
    let currentDate = new Date();
    let agePerson = currentDate.getFullYear() - datePerson.getFullYear();
    if (datePerson.getMonth() <= currentDate.getMonth()){
        agePerson += 1;
    }
    
    if (agePerson < 18){
        email.style.display = 'none';
        url.style.display = 'none';
        agerange.style.display = 'none';
    }else if (agePerson >= 18 && agePerson < 25){
        agerange.value = agePerson;
        email.style.display = 'block';
        url.style.display = 'none';
        agerange.style.display = 'block';
    }else if(agePerson >= 25){
        agerange.value = agePerson;
        email.style.display = 'block';
        url.style.display = 'block';
        agerange.style.display = 'block';
    }
}