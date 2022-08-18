function pageroutes(page) {
    username();
    counter();
    switch (page) {
        case "home":
            $.ajax({
                url: "asset/slicepage/home.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(0);
                }

            })
            break;
        case "product":
            $.ajax({
                url: "asset/slicepage/product.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(1);
                    cardprint("product");
                }
            })
            break;
        case "feedback":
            $.ajax({
                url: "asset/slicepage/feedback.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(2);
                }
            })
            break;
        case "about":
            $.ajax({
                url: "asset/slicepage/about.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(3);
                }
            })
            break;
        case "contact":
            $.ajax({
                url: "asset/slicepage/contact.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(4);
                }
            })
            break;
        case "men":
            $.ajax({
                url: "asset/slicepage/men.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(1);
                    cardprint("men");
                }
            })
            break;
        case "women":
            $.ajax({
                url: "asset/slicepage/women.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(1);
                    cardprint("women");
                }
            })
            break;
        case "cart":
            $.ajax({
                url: "asset/slicepage/cart.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    // pageactive(7);
                }
            })
            break;
        case "detail":
            $.ajax({
                url: "asset/slicepage/detail.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    // pageactive(8);
                }
            })
            break;
        case "pant":
            $.ajax({
                url: "asset/slicepage/pants.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(6);
                    droopdownactive(2);
                    cardprint("pants");
                }
            })
            break;
        case "shirt":
            $.ajax({
                url: "asset/slicepage/shirts.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(6);
                    droopdownactive(1);
                    cardprint("shirts");
                }
            })
            break;
        case "t-shirt":
            $.ajax({
                url: "asset/slicepage/t-shirt.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(6);
                    droopdownactive(0);
                    cardprint("t-shirts");
                }
            })
            break;
        case "shoes":
            $.ajax({
                url: "asset/slicepage/shoes.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(6);
                    droopdownactive(3);
                    cardprint("shoes");
                }
            })
    }

}



pageroutes("home");

//active
function pageactive(id) {
    for (var i = 0; i < document.querySelectorAll(".nav-link").length; i++) {
        document.querySelectorAll(".nav-link")[i].classList.remove("active")
        if (!id) {
            document.querySelectorAll(".nav-link")[0].classList.add("active")
        } else {
            document.querySelectorAll(".nav-link")[id].classList.add("active")
        }
    }
}
function droopdownactive(idd) {
    for (var i = 0; i < document.querySelectorAll(".dropdown-item").length; i++) {
        document.querySelectorAll(".dropdown-item")[i].classList.remove("active")
        if (!idd) {
            document.querySelectorAll(".dropdown-item")[0].classList.add("active")

        } else (
            document.querySelectorAll(".dropdown-item")[idd].classList.add("active")

        )
    }
}
//ticker

function adate() {
    var arsh = "";

    var da = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    var mon = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December");

    var now = new Date();

    arsh += da[now.getDay()] + ", " + now.getDate() + " " + mon[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    document.getElementById("time").innerHTML = arsh;
}

setInterval(adate, 1000);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    document.getElementById("location").innerHTML = "Geolocation is not supported by this Browser"
}

function showPosition(position) {
    document.getElementById("location").innerHTML = " Latitude : " + position.coords.latitude + " Longitude : " + position.coords.longitude;
}


//counter

var counti = 1;
function counter() {
    var count2 = localStorage.getItem("count");

    if (!count2) {
        localStorage.setItem("count", counti);
        document.getElementById("counter").innerHTML = localStorage.getItem("count");
    } else {
        localStorage.setItem("count", parseInt(count2) + 1);
        document.getElementById("counter").innerHTML = localStorage.getItem("count");
    }
}
counter();
//welcome messege

function myclick() {
    if (localStorage.getItem("promp")) {
        document.getElementById("messege1").style.display = "none";
    } else {
        document.getElementById("messege1").style.display = "block";
        localStorage.setItem("promp", document.getElementById("messege2").value);
        // document.getElementById("username102").innerHTML=localStorage.getItem("promp");
    }
}

myclick();

//username 
function username() {
    if (localStorage.getItem("promp")) {
        document.getElementById("username").innerHTML = localStorage.getItem("promp");
        document.getElementById("username1").innerHTML = localStorage.getItem("promp");
    }
}



//search bar toggle
function search_bar() {
    var x = document.getElementById("search_icon")
    if (x.style.display === "none") {
        x.style.display = 'block';
    } else {
        x.style.display = "none"
    }
}

// add to card 
function myaddtocard() {

}


// cards loop
function cardprint(cardckeck) {

    for (var i = 0; i < data.length; i++) {
        if (cardckeck == "product") {

            document.getElementById("cardmulti").innerHTML += `
        <div class="col-md-4 col-sm-12 border-0  mt-md-5  ${data[i].class}">
           
       <div class="card1 w-100 overflow-hidden rounded">
       <div class="image-box position-relative w-100 product_name">
           <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
           <div class="options position-absolute w-100 text-end">
               <img src="asset/img/${data[i].img}" onclick="item(this,${data[i].n})" class="active">
               <img src="asset/img/${data[i].img2}" onclick="item(this,${data[i].n})" class="">
               <img src="asset/img/${data[i].img3}" onclick="item(this,${data[i].n})" class="">
               <img src="asset/img/${data[i].img4}" onclick="item(this,${data[i].n})" class="">
           </div>
       </div>
       <div class="card-data">
           <div class="heading">
               <h1>${data[i].heading}</h1>
           </div>
           <div class="card-text">
               <p>${data[i].cardtext}</p>
               <p class="mt-2">Price : ${data[i].orignalprice} Rs</p>
               <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
               <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
               <p class="mt-2">Stock : ${data[i].stock} </p>
       
           </div>
           <div class="d-flex justify-content-between">
           <a href="detail.html?id=${data[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${data[i].id})" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
       </div>
       </div>
       </div>
           `

        }
    }
    for (var i = 0; i < data.length; i++) {
        if (cardckeck == "pants") {
            if (i > 11 && i < 18) {
                document.getElementById("pant_card12").innerHTML += `
     <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
        
     <div class="card1 w-100 overflow-hidden rounded">
     <div class="image-box position-relative w-100 product_name">
         <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
         <div class="options position-absolute w-100 text-end">
         <img src="asset/img/${data[i].img}" onclick="item(this,${i - 11})" class="active">
         <img src="asset/img/${data[i].img2}" onclick="item(this,${i - 11})" class="">
         <img src="asset/img/${data[i].img3}" onclick="item(this,${i - 11})" class="">
         <img src="asset/img/${data[i].img4}" onclick="item(this,${i - 11})" class="">
         </div>
         </div>
         <div class="card-data">
             <div class="heading">
             <h4>${data[i].heading}</h4>
             </div>
             <div class="card-text">
                 <p>${data[i].cardtext}</p>
                 <p class="mt-2">Price : ${data[i].orignalprice} Rs</p>
                 <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                 <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                 <p class="mt-2">Stock : ${data[i].stock} </p>
         </div>
                 <div class="d-flex justify-content-between">
        <a href="detail.html?id=${data[i].id}" class="btn btn-outline-danger border-0 mt-2" >DETAILS<i
        class="fa-solid fa-arrow-right-long ms-1"></i></a>
        <button class="btn btn-outline-danger border-0 mt-2text-start" onclick="addToCart(${data[i].id})" >ADD TO CART<i
        class="fa-solid fa-arrow-right-long ms-1"></i></button>
        </div>
             </div>
             </div>
             `
            }
        }
    }
    for (var i = 0; i < data.length; i++) {
        if (cardckeck == "pants") {
            if (i > 41) {
                document.getElementById("wpants_card12").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i - 35})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i - 35})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i - 35})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i - 35})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : ${data[i].orignalprice} Rs</p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="detail.html?id=${data[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${data[i].id})" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
    }
    for (var i = 0; i < data.length; i++) {
        if (cardckeck == "shoes") {
            if ( i < 6) {
                document.getElementById("card_shoes").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i + 1})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i + 1})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i + 1})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i + 1})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : ${data[i].orignalprice} Rs</p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="detail.html?id=${data[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${data[i].id})" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
    }
    for (var i = 0; i < data.length; i++) {
        if (cardckeck == "shoes") {
            if ( i > 23 && i< 30) {
                document.getElementById("card_shoes_women").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i-17})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i-17})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i-17})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i-17})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : ${data[i].orignalprice} Rs</p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="detail.html?id=${data[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${data[i].id})" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
    }
    for (var i = 0; i < data.length; i++) {
        if (cardckeck == "shirts") {
            if ( i > 17 && i< 24) {
                document.getElementById("shirt_card12").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i-17})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i-17})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i-17})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i-17})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : ${data[i].orignalprice} Rs</p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="detail.html?id=${data[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${data[i].id})" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
    }
    for (var i = 0; i < data.length; i++) {
        if (cardckeck == "shirts") {
            if ( i > 35 && i< 42) {
                document.getElementById("wshirt_card12").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i-29})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i-29})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i-29})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i-29})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : ${data[i].orignalprice} Rs</p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="detail.html?id=${data[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${data[i].id})" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
    }
    for (var i = 0; i < data.length; i++) {
        if (cardckeck == "t-shirts") {
            if ( i > 5 && i< 12) {
                document.getElementById("card_tshirt").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i-5})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i-5})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i-5})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i-5})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : ${data[i].orignalprice} Rs</p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="detail.html?id=${data[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${data[i].id})" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
    }
    for (var i = 0; i < data.length; i++) {
        if (cardckeck == "t-shirts") {
            if ( i > 29 && i< 36) {
                document.getElementById("card_tshirt_women").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i-23})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i-23})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i-23})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i-23})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : ${data[i].orignalprice} Rs</p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="detail.html?id=${data[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${data[i].id})" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
    }

    if (cardckeck == "women") {
        for (var i = 0; i < data.length; i++) {
            if (data[i].id >= 1025) {
                document.getElementById("women_card_multi").innerHTML += `
    <div class="col-md-4 col-sm-12 border-0  mt-md-5  ${data[i].class}">
    
    <div class="card1 w-100 overflow-hidden rounded">
    <div class="image-box position-relative w-100 product_name">
    <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
    <div class="options position-absolute w-100 text-end">
        <img src="asset/img/${data[i].img}" onclick="item(this,${i - 23})"  class="active">
        <img src="asset/img/${data[i].img2}" onclick="item(this,${i - 23})" class="">
        <img src="asset/img/${data[i].img3}" onclick="item(this,${i - 23})" class="">
        <img src="asset/img/${data[i].img4}" onclick="item(this,${i - 23})" class="">
    </div>
    </div>
    <div class="card-data">
    <div class="heading">
        <h1>${data[i].heading}</h1>
    </div>
    <div class="card-text">
        <p>${data[i].cardtext}</p>
        <p class="mt-2">Price : ${data[i].orignalprice} Rs</p>
        <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
        <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
        <p class="mt-2">Stock : ${data[i].stock} </p>
    
    </div>
    <div class="d-flex justify-content-between">
    <a href="detail.html?id=${data[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
    class="fa-solid fa-arrow-right-long ms-1"></i></a>
    <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${data[i].id})" >ADD TO CART<i
    class="fa-solid fa-arrow-right-long ms-1"></i></button>
    </div>
    </div>
    </div>
    </div>
    `
            }
        }
    }

}

function item(img, n) {
    document.querySelectorAll(".main-image")[n - 1].src = img.src;
    var opt = n * 4;
    for (var i = opt - 4; i < opt; i++) {
        document.querySelectorAll(".options img")[i].classList.remove("active");
    }
    img.classList.add("active");
}
