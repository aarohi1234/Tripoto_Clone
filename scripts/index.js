import { footer } from "../components/footerComp.js";
// console.log(footer())

document.getElementById("FOOTER").innerHTML = footer();


import { navbar } from "../components/navbarComp.js";
console.log(navbar());

document.getElementById("NAVBAR").innerHTML = navbar();

navbar();

document.getElementById("remove").addEventListener("click", () => {
  document.getElementById("login").style.display = "block";
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("login").style.display = "none";
});

document.getElementById("checkbox").addEventListener("click", () => {
  var check = document.getElementById("checkbox");
  check.innerHTML = "";
  check.style.border = "none";
  var img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://seeklogo.com/images/G/google-material-design-check-logo-B26F6F7B81-seeklogo.com.png"
  );
  img.setAttribute("width", "100%");
  img.setAttribute("height", "100%");
  check.append(img);
});

document.getElementById("loginsignup").addEventListener("click", () => {
  document.getElementById("login").style.display = "none";
  document.getElementById("signin").style.display = "block";
});

document.getElementById("loginAgain").addEventListener("click", () => {
  document.getElementById("login").style.display = "block";
  document.getElementById("signin").style.display = "none";
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("signin").style.display = "none";
});

document.getElementById("button1").addEventListener("click", validate);
var arr1 = JSON.parse(localStorage.getItem("detail")) || [];
function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email1").value;
  var password = document.getElementById("password1").value;
  if (name == "" || email == "" || password == "") {
    alert("please fill all the fields");
  } else {
    var obj = {
      name: name,
      email: email,
      password: password,
    };
    arr1.push(obj);
    localStorage.setItem("detail", JSON.stringify(arr1));
  }
}
document.getElementById("button").addEventListener("click", validatleogin);
function validatleogin() {
  var flag = true;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var data = JSON.parse(localStorage.getItem("detail"));
  data.forEach((Element) => {
    if (Element.email == email && Element.password == password) {
      document.getElementById("remove").style.display = "none";
      var link = document.getElementById("link");
      document.getElementById("login").style.display = "none";
      var div = document.createElement("div");
      div.style.width = "40px";
      div.style.height = "40px";
      div.style.marginTop = "10px";
      div.style.borderRadius = "20px";
      var img = document.createElement("img");
      img.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ei-user.svg/1200px-Ei-user.svg.png";
      img.style.width = "100%";
      img.style.height = "100%";
      let profname = document.createElement("p");
      profname.innerText = Element.name;
      div.append(img, profname);
      link.append(div);
      var h5 = document.createElement("h4");
      h5.addEventListener("click", load);
      h5.innerText = "Log Out";
      h5.style.margin = "18px 1px";
      h5.style.color = "white";
      h5.style.cursor = "pointer";
      link.append(h5);
      flag = false;
    }
  });
  if (flag) {
    alert("Invald Username or Password");
  }
}
function load() {
  window.location.reload();
}

window.ondblclick = function () {
  myFunction_1();
};
function myFunction_1() {
  document.getElementById("login").style.display = "none";
  document.getElementById("signin").style.display = "none";
}
function myfunction(name) {
  localStorage.setItem("cityName", JSON.stringify(name));
  window.location.href = "city.html";
}
