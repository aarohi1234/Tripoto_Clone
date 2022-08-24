
let form = document.querySelector("form");

let userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let data = {
        Name: form.name.value,
        email: form.email.value,
        Password: form.password.value,
        Phone_No: form.phone.value
    }
    if(checkEmail(data.email)==true){
        userData.push(data);
        alert("Registration Successfull")
        localStorage.setItem("userData",JSON.stringify(userData));
    }
    else{
    
        alert("Account Already Exists");
    }
})

let checkEmail = (email)=>{
    let filteredEmail = userData.filter((ele)=>{
        return email == ele.email;
    })
    if(filteredEmail.length>0){
        return false;
    }
    else{
        return true;
    }
}