//page rought
function pageroutes(page) {
    if(JSON.parse(localStorage.getItem("cart"))){
    document.querySelector("#cartcount").innerHTML = JSON.parse(localStorage.getItem("cart")).length;
    }
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
                    // counter();
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
                    // counter();
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
                    counter();
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
                    // counter();
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
                    // counter();
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
                    // counter();
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
                    // counter();
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
                    cartload();
                    cardtotal();
                    pageactive(6);
                    // counter();
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
                    pageactive(6);
                    cardprint("detail");
                    // pageactive(8);
                    // counter();
                }
            })
            break;
        case "pant":
            $.ajax({
                url: "asset/slicepage/pants.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(5);
                    // counter();
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
                    pageactive(5);
                    // counter();
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
                    pageactive(5);
                    // counter();
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
                    pageactive(5);
                    // counter();
                    droopdownactive(3);
                    cardprint("shoes");
                }
            })
            break;
        case "search":
        $.ajax({
                    url:"asset/slicepage/search.html",
                    success:function(load){
                    document.querySelector("#page").innerHTML=load;
                    document.querySelector(".nav-link").classList
                    mysearch();
                    pageactive(6);
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

function counter() {
var count=1;
if(localStorage.getItem("count")){
var counti=parseInt( localStorage.getItem("count"))+1;
document.getElementById("counter").innerHTML=counti;
localStorage.setItem("count",counti)    
}else{
    localStorage.setItem("count",parseInt( count));
    document.getElementById("counter").innerHTML=count;
}
}
// counter();
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
// function search_bar() {
//     var x = document.getElementById("search_icon")
//     if (x.style.display === "none") {
//         x.style.display = 'block';
//     } else {
//         x.style.display = "none"
//     }
// }
//cart page main
// add to card 
    var cartdata;
if(!localStorage.getItem("cart")){
    cartdata=[]
}else{
    cartdata=JSON.parse(localStorage.getItem("cart"))
}
function cart(id,name,img,price,text){
    cartdata.push({
        name:name,
        img:"asset/img/"+img,
        price:price,
        id:id,
        text:text
    });
    localStorage.setItem("cart",JSON.stringify(cartdata))
    document.querySelector("#cartcount").innerHTML = JSON.parse(localStorage.getItem("cart")).length;
}
function cartd(){
    cartdata.push({
        name:document.getElementById("pro_na").innerHTML,
        img:document.getElementById("i_m_g_1").src,
        price:document.getElementById("f_price").innerHTML,
        text:document.getElementById("text").innerHTML
    });
    localStorage.setItem("cart",JSON.stringify(cartdata))
    document.querySelector("#cartcount").innerHTML = JSON.parse(localStorage.getItem("cart")).length;
}
function cartload(){
    if(localStorage.getItem("cart")){
    var carttable=JSON.parse(localStorage.getItem("cart"))
    for(var i=0;i <carttable.length;i++ ){
        var imgmain=`asset/img/${carttable[i].img}`;
        document.querySelector("#cartloop").innerHTML +=`
            <div class="row d-flex flex-row  pb-2">
                <div class="col-md-6 col-sm-12 d-flex flex-row">
                    <div class="col-md-2 col-sm-12 ">
                        <img src="${carttable[i].img}" class="card_img" alt="">
                    </div>
                    <div>
                        <h6 class="ps-3">${carttable[i].name}</h6>
                        <p class=" ps-3 mt-2 text-danger">${carttable[i].text} </p>
                    </div>
                </div>
                <div class="col-md-2 col-sm-12 text-center mt-4">
                    <h6 class="  d-flex flex-row  text-center ps-3 ms-2"><a class="border-0 btn btn-outline-danger"
                            onclick="calculateQty(1,${i})">-</a><input type="text" id="qty${i}" value="1"
                            class="border-0 w-25  text-center " readonly> <a class="border-0 btn btn-outline-danger"
                            onclick="calculateQty(2,${i})">+</a></h6>
                </div>
                <div class="col-md-2 col-sm-12 text-center mt-4">
                    <input type="text" id="price${i}" value="${carttable[i].price}" class="border-0 w-50  text-center" readonly>
                </div>
                <div class="col-md-2 col-sm-12 text-center mt-4">
                    <input type="text" id="totalprice${i}" value="${carttable[i].price}" class="border-0 w-50  text-center" readonly>
                </div>

            </div>
        `
    } 

}
}

//checkout 
function checkout(){
    localStorage.removeItem("cart");
    cartdata=[];
    pageroutes("cart");
    document.getElementById("cartcount").innerHTML=0;;
}


// cards loop
function cardprint(cardckeck) {
    for (var i = 0; i < data.length; i++) {

        // for (var i = 0; i < data.length; i++) {
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
               <p class="mt-2"> Price : <del class="text-danger"> ${data[i].orignalprice} Rs </del></p>
               <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
               <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
               <p class="mt-2">Stock : ${data[i].stock} </p>
       
           </div>
           <div class="d-flex justify-content-between">
           <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${data[i].id})" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="cart('${data[i].id}','${data[i].heading}','${data[i].img}','${data[i].finalprice}','${data[i].cardtext}')" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
       </div>
       </div>
       </div>
           `

        }
        // }
        // for (var i = 0; i < data.length; i++) {
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
                 <p class="mt-2">Price : <del class="text-danger">${data[i].orignalprice} Rs </del></p>
                 <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                 <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                 <p class="mt-2">Stock : ${data[i].stock} </p>
         </div>
                 <div class="d-flex justify-content-between">
                 <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${data[i].id})" >DETAILS<i
                 class="fa-solid fa-arrow-right-long ms-1"></i></a>
        <button class="btn btn-outline-danger border-0 mt-2 text-start" onclick="cart('${data[i].id}','${data[i].heading}','${data[i].img}','${data[i].finalprice}','${data[i].cardtext}')" >ADD TO CART<i
        class="fa-solid fa-arrow-right-long ms-1"></i></button>
        </div>
             </div>
             </div>
             `
            }
        }
        // }
        // for (var i = 0; i < data.length; i++) {
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
                    <p class="mt-2">Price : <del class="text-danger"> ${data[i].orignalprice} Rs </del></p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${data[i].id})" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="cart('${data[i].id}','${data[i].heading}','${data[i].img}','${data[i].finalprice}','${data[i].cardtext}')">ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
        // }
        // for (var i = 0; i < data.length; i++) {
        if (cardckeck == "shoes") {
            if (i < 6) {
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
                    <p class="mt-2">Price : <del class="text-danger">${data[i].orignalprice} Rs </del></p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${data[i].id})" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="cart('${data[i].id}','${data[i].heading}','${data[i].img}','${data[i].finalprice}','${data[i].cardtext}')" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
        // }
        // for (var i = 0; i < data.length; i++) {
        if (cardckeck == "shoes") {
            if (i > 23 && i < 30) {
                document.getElementById("card_shoes_women").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i - 17})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i - 17})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i - 17})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i - 17})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : <del class="text-danger">${data[i].orignalprice} Rs</del></p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${data[i].id})" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="cart('${data[i].id}','${data[i].heading}','${data[i].img}','${data[i].finalprice}','${data[i].cardtext}')" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
        // }
        // for (var i = 0; i < data.length; i++) {
        if (cardckeck == "shirts") {
            if (i > 17 && i < 24) {
                document.getElementById("shirt_card12").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i - 17})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i - 17})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i - 17})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i - 17})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : <del class="text-danger">${data[i].orignalprice} Rs</del></p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${data[i].id})" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="cart('${data[i].id}','${data[i].heading}','${data[i].img}','${data[i].finalprice}','${data[i].cardtext}')" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
        // }
        // for (var i = 0; i < data.length; i++) {
        if (cardckeck == "shirts") {
            if (i > 35 && i < 42) {
                document.getElementById("wshirt_card12").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i - 29})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i - 29})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i - 29})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i - 29})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : <del class="text-danger">${data[i].orignalprice} Rs</del></p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${data[i].id})" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="cart('${data[i].id}','${data[i].heading}','${data[i].img}','${data[i].finalprice}','${data[i].cardtext}')" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
        // }
        // for (var i = 0; i < data.length; i++) {
        if (cardckeck == "t-shirts") {
            if (i > 5 && i < 12) {
                document.getElementById("card_tshirt").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i - 5})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i - 5})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i - 5})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i - 5})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : <del class="text-danger">${data[i].orignalprice} Rs</del></p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${data[i].id})" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="cart('${data[i].id}','${data[i].heading}','${data[i].img}','${data[i].finalprice}','${data[i].cardtext}')" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
        // }
        // for (var i = 0; i < data.length; i++) {
        if (cardckeck == "t-shirts") {
            if (i > 29 && i < 36) {
                document.getElementById("card_tshirt_women").innerHTML += `
            <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
            <div class="card1 w-100 overflow-hidden rounded">
       
            <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                <img src="asset/img/${data[i].img}" onclick="item(this,${i - 23})" class="active">
                <img src="asset/img/${data[i].img2}" onclick="item(this,${i - 23})" class="">
                <img src="asset/img/${data[i].img3}" onclick="item(this,${i - 23})" class="">
                <img src="asset/img/${data[i].img4}" onclick="item(this,${i - 23})" class="">
                </div>
                </div>
                <div class="card-data">
                    <div class="heading">
                    <h4>${data[i].heading}</h4>
                </div>
                <div class="card-text">
                    <p>${data[i].cardtext}</p>
                    <p class="mt-2">Price : <del class="text-danger">${data[i].orignalprice} Rs</del></p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${data[i].stock} </p>
            </div>
                    
           <div class="d-flex justify-content-between">
           <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${data[i].id})" >DETAILS<i
           class="fa-solid fa-arrow-right-long ms-1"></i></a>
           <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="cart('${data[i].id}','${data[i].heading}','${data[i].img}','${data[i].finalprice}','${data[i].cardtext}')" >ADD TO CART<i
           class="fa-solid fa-arrow-right-long ms-1"></i></button>
           </div>
                </div>
                </div>
                `
            }
        }
        // }

        if (cardckeck == "women") {
            // for (var i = 0; i < data.length; i++) {
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
        <p class="mt-2">Price : <del class="text-danger">${data[i].orignalprice} Rs</del></p>
        <p class="mt-2">Discount : <span class="text-danger"> ${data[i].discount}</span> Rs</p>
        <p class="mt-2">Buy Now : ${data[i].finalprice} Rs</p>
        <p class="mt-2">Stock : ${data[i].stock} </p>
    
     </div>
     <div class="d-flex justify-content-between">
     <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${data[i].id})" >DETAILS<i
     class="fa-solid fa-arrow-right-long ms-1"></i></a>
     <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="cart('${data[i].id}','${data[i].heading}','${data[i].img}','${data[i].finalprice}','${data[i].cardtext}')" >ADD TO CART<i
     class="fa-solid fa-arrow-right-long ms-1"></i></button>
     </div>
     </div>
     </div>
     </div>
     `
            }
        }
        // }
    }
   if(cardckeck == "detail"){         
var id=localStorage.getItem("caartid")
for (var i=0 ;i<data.length;i++) {
    if (data[i].id == id) {
        document.getElementById("mani_head").innerHTML = data[i].heading;
        document.getElementById("pro_na").innerHTML = data[i].heading;
        document.getElementById("text").innerHTML = data[i].cardtext;
        document.getElementById("i_m_g_1").src = "asset/img/" + data[i].img;
        document.getElementById("i_m_g_2").src = "asset/img/" + data[i].img2;
        document.getElementById("i_m_g_3").src = "asset/img/" + data[i].img3;
        document.getElementById("i_m_g_4").src = "asset/img/" + data[i].img4;
        document.getElementById("i_m_g_5").src = "asset/img/" + data[i].img;
        document.getElementById("o_price").innerHTML = data[i].orignalprice;
        document.getElementById("d_count").innerHTML = data[i].discount;
        document.getElementById("f_price").innerHTML = data[i].finalprice;
        document.getElementById("d_stock").innerHTML = data[i].stock;

    }
}
}
}
//calculating value
function calculateQty(n,id) {
    var quantity = document.getElementById("qty"+id).value;
    var price = document.getElementById("price"+id).value;
    var totalquantity = null;
    if (n == 2) {
        if (quantity < 10) {
            document.getElementById("qty"+id).value = parseInt(quantity) + 1
            totalquantity = parseInt(document.getElementById("qty"+id).value) * parseInt(price);
            document.getElementById("totalprice"+id).value = parseInt(totalquantity);

        }
    }
    else if (n == 1) {
        if (quantity > 1) {
            document.getElementById("qty"+id).value = parseInt(quantity) - 1
            totalquantity = parseInt(document.getElementById("qty"+id).value) * parseInt(price);
            document.getElementById("totalprice"+id).value = parseInt(totalquantity);
        }
    }
    cardtotal();
}
function cardtotal(){
var total=0
var datalocal=JSON.parse(localStorage.getItem("cart"));
if(JSON.parse(localStorage.getItem("cart"))){
for (var i=0;i< datalocal.length;i++){
    total+=parseInt( document.getElementById("totalprice"+i).value) ;
    document.getElementById("totalid").innerHTML="PKR. "+total ;
}
}
}
//card page functions end

//img active
function item(img, n) {
    document.querySelectorAll(".main-image")[n - 1].src = img.src;
    var opt = n * 4;
    for (var i = opt - 4; i < opt; i++) {
        document.querySelectorAll(".options img")[i].classList.remove("active");
    }
    img.classList.add("active");
}
// main commit detail page functions

//detail page image change function

    function itemss(src) {

document.getElementById('i_m_g_1').src=src;
    }
//SUB COMMIT get id of card function
    function caartid(id){
        localStorage.setItem("caartid",parseInt(id))
        pageroutes('detail')
    }
// print card
    function mysearch(){
        var show=document.getElementById("cardmulti")
        show.innerHTML=``
        for (let obj of data){
          show.innerHTML+=`
          <div class="col-md-4 col-sm-12 border-0  mt-md-5  ">
           
           <div class="card1 w-100 overflow-hidden rounded">
           <div class="image-box position-relative w-100 product_name">
               <img src="asset/img/${obj.img}" class="main-image w-100 h-100 position-absolute active" >
               <div class="options position-absolute w-100 text-end">
                   <img src="asset/img/${obj.img}" onclick="item(this,${obj.n})" class="active">
                   <img src="asset/img/${obj.img2}" onclick="item(this,${obj.n})" class="">
                   <img src="asset/img/${obj.img3}" onclick="item(this,${obj.n})" class="">
                   <img src="asset/img/${obj.img4}" onclick="item(this,${obj.n})" class="">
               </div>
           </div>
           <div class="card-data">
               <div class="heading">
                   <h1>${obj.heading}</h1>
               </div>
               <div class="card-text">
                   <p>${obj.cardtext}</p>
                   <p class="mt-2">Price : ${obj.orignalprice} Rs</p>
                   <p class="mt-2">Discount : <span class="text-danger"> ${obj.discount}</span> Rs</p>
                   <p class="mt-2">Buy Now : ${obj.finalprice} Rs</p>
                   <p class="mt-2">Stock : ${obj.stock} </p>
           
               </div>
               <div class="d-flex justify-content-between">
               <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${obj.id})" >DETAILS<i
               class="fa-solid fa-arrow-right-long ms-1"></i></a>
               <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="cart('${obj.id}','${obj.heading}','${obj.img}','${obj.finalprice}','${obj.cardtext}')" >ADD TO CART<i
               class="fa-solid fa-arrow-right-long ms-1"></i></button>
               </div>
           </div>
           </div>
           </div>`
        }
    }

// search
    function searchon(val){
if(val==""){
    mysearch();
} else if(val!=""){
var show=document.getElementById("cardmulti")
show.innerHTML=``

// let text = "Mr. Blue has a blue house";
// let position = text.search(/Blu/);
for(var i=0;i<data.length;i++){
    var check=val.toUpperCase()
    if(data[i].heading.toUpperCase().match(check)!=null){
        show.innerHTML+=`<div class="col-md-4 col-sm-12 border-0  mt-md-5  ">
           
          <div class="card1 w-100 overflow-hidden rounded">
         <div class="image-box position-relative w-100 product_name">
                <img src="asset/img/${data[i].img}" class="main-image w-100 h-100 position-absolute active" >
                <div class="options position-absolute w-100 text-end">
                    <img src="asset/img/${data[i].img}" onclick="item(this,${i+1})" class="active">
                    <img src="asset/img/${data[i].img2}" onclick="item(this,${i+1})" class="">
                    <img src="asset/img/${data[i].img3}" onclick="item(this,${i+1})" class="">
                    <img src="asset/img/${data[i].img4}" onclick="item(this,${i+1})" class="">
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
                <a href="#" class="btn btn-outline-danger border-0 mt-2 bounce-top"  onclick="caartid(${data[i].id})" >DETAILS<i
                class="fa-solid fa-arrow-right-long ms-1"></i></a>
                <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="cart('${data[i].id}','${data[i].heading}','${data[i].img}','${data[i].finalprice}','${data[i].cardtext}')" >ADD TO CART<i
                class="fa-solid fa-arrow-right-long ms-1"></i></button>
                </div>
            </div>
            </div>
            </div>`
    }
    
    // console.log(check)
}
// console.log(position)
}
    }   

    function searchckeck(){
        var valuee=document.getElementById("show").value
        console.log(valuee)
        searchon(valuee)
    }