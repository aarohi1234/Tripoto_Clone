let packageArr = [
        {
            image: "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1661498126_k9_3.jpg",
            pack: "PACKAGE",
            title: "Autumn in Kashmir - With Gurez Valley",
            place: "Jammu and Kashmir",
            day : "7D-6N",
            price: "₹ 24,999/person",
        },
        {
            image: "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657264673_leh2.jpg",
            pack: "PACKAGE",
            title: "7N/8D Srinagar-Kargil-Leh tour Package By India tour Vacations",
            place: "Sahara Kashmir Road",
            day: "8D-7N",
            price: "₹ 20,000/person",
        },
        {
            image: "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1633083320_k5.jpg",
            pack: "PACKAGE",
            title: "The Rhapsody Travel (Enchanting Kashmir)",
            place: "Srinagar",
            day: "5D-4N",
            price: "₹ 20,000 onwards",
        }    
]

packageArr.forEach((ele)=>{
    let package_box = document.getElementById("inner_box");

    let div = document.createElement("div");

    let image = document.createElement("img");
    let name = document.createElement("p");
    name.setAttribute("class","name")
    let title = document.createElement("h2");
    let place = document.createElement("span");
    place.setAttribute("class","place");
    let day = document.createElement("span");
    day.setAttribute("class","right_span")
    let price = document.createElement("p");
    let quoteBtn = document.createElement("button");
    quoteBtn.setAttribute("id","quoteBtn")

    image.src = ele.image;
    name.innerText = ele.pack;
    title.innerText = ele.title;
    place.innerText = ele.place;
    day.innerText = ele.day;
    price.innerText = ele.price;
    quoteBtn.innerText = "Get Quotes";

    div.append(image,name,title,place,day,price,quoteBtn);
    package_box.append(div)
})