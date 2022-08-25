let loginForm = document.querySelector("form");
let login = false;
let userData = JSON.parse(localStorage.getItem("userData")) || [];

loginForm.addEventListener("submit",(event)=>{
    event.preventDefault();

    let data = {
        email: loginForm.loginEmail.value,
        password: loginForm.loginPassword.value,
    }
    if(checkLogin(data.email, data.password)==true){
        localStorage.setItem("signin",JSON.stringify(data));
        alert("Login Successfull");
        localStorage.setItem("login",JSON.stringify(true));
        // window.location.href = ""
    }
    else{
        alert("Wrong Email or Password");
        localStorage.setItem("login",JSON.stringify(false));
    }
})

let checkLogin = (email,password)=>{
    let filteredEmailPass = userData.filter((ele)=>{
        return ele.email == email && ele.Password == password;
    })
    if(filteredEmailPass.length>0){
        return true;
    }
    else{
        return false;
    }
}


// let form = document.querySelector("form");

// let userData = JSON.parse(localStorage.getItem("userData")) || [];
// let login = false;
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let data = {
//         email: form.loginEmail.value,
//         password: form.loginPassword.value
//     }
//     console.log(data.email,data.password);
//     let loginData = checkSignin(data.email,data.password)
//     if(loginData===true){
//         alert("Signin Successful");
//         localStorage.setItem("signinData",JSON.stringify(data));
//         localStorage.setItem("login",JSON.stringify(true));
//         window.location.href = "index.html";

//     }
//     else{
//         alert("Wrong email or password");
//         localStorage.setItem("login",JSON.stringify(false));
//     }
// })

// let checkSignin = (email,password)=>{
//     console.log(userData);
//     let checkEmailPass = userData.filter((ele)=>{
//         console.log(ele,ele.email,ele.Password);
//         return ele.email === email && ele.Password === password;
//     })
//     console.log(checkEmailPass);
//     if(checkEmailPass.length>0){
//         return true;

//     }
//     else{
//         return false;
//     }
// }