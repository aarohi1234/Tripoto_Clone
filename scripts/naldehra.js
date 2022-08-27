

$(".TrendingTrips").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$(".DiscoverNow").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

$(".TravelGuides").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
});

var form = document.getElementById("form");
form.addEventListener("submit", addproduct);
function addproduct(e) {
  e.preventDefault();
  var product = {
    name: form.name.value,
    email: form.email.value,
    contact: form.contact.value,
    city: form.city.value,
    des: form.des.value,
    dur: form.dur.value,
    quant: form.quant.value,
  };

  console.log(product);
  let arr;
  var products = JSON.parse(localStorage.getItem("products"));
  arr = localStorage.getItem("product");
  console.log(arr);
  if (arr == null) {
    arr = []; //first time visitor
  } else {
    //if it is in storage it will be in json so we convert to object

    arr = JSON.parse(arr); //array format conversion
  }

  arr.push(product);
  localStorage.setItem("product", JSON.stringify(arr));
  console.log(arr);
}

function showlocations() {
  location.assign("show.html");
}

var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();
