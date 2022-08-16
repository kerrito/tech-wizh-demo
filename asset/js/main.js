function pageroutes(page) {
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
                    pageactive(5);
                    cardprint();
                }
            })
            break;
        case "women":
            $.ajax({
                url: "asset/slicepage/women.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(6);
                    cardprint();
                }
            })
            break;
        case "cart":
            $.ajax({
                url: "asset/slicepage/cart.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(7);
                }
            })
            break;
        case "detail":
            $.ajax({
                url: "asset/slicepage/detail.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(8);
                }
            })
            break;
        case "pant":
            $.ajax({
                url: "asset/slicepage/pants.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(9);
                    cardprint();
                }
            })
            break;
        case "shirt":
            $.ajax({
                url: "asset/slicepage/shirts.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(10);
                    cardprint();
                }
            })
            break;
        case "t-shirt":
            $.ajax({
                url: "asset/slicepage/t-shirt.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(11);
                    cardprint();
                }
            })
            break;
        case "shoes":
            $.ajax({
                url: "asset/slicepage/shoes.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    pageactive(12);
                    cardprint();
                }
            })
    
            break;
            case "detail":
                $.ajax({
                    url: "asset/slicepage/detail.html",
                    success: function (load) {
                        document.querySelector("#page").innerHTML = load;
                        document.querySelector(".nav-link").classList
                        pageactive(12);
                    }
                })
                break;        
    }
    
    }



pageroutes("home");

//active
function pageactive(id){
    for(var i=0;i< document.querySelectorAll(".nav-link");i++){
    document.querySelectorAll(".nav-link")[i].classList.remove("active")
    if(!id){
document.querySelectorAll(".nav-link")[0].classList.add("active")
    } else{
        document.querySelectorAll(".nav-link")[id].classList.add("active")
    }
}
}
//ticker

function adate(){
    var arsh="";

    var da = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

    var mon = new Array("January","February","March","April","May","June","July","August","September","Octuber","November","December");

    var now = new Date();

    arsh += da[now.getDay()] +", "+ now.getDate() +" "+mon[now.getMonth()] +" "+ now.getFullYear()+" "+ now.getHours() +":"+ now.getMinutes() +":"+ now.getSeconds();
    
    document.getElementById("time").innerHTML= arsh;
}

setInterval(adate,1000);

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
}else{
    document.getElementById("location").innerHTML="Geolocation is not supported by this Browser"
}

function showPosition(position){
    document.getElementById("location").innerHTML=" Latitude : "+position.coords.latitude +" Longitude : "+ position.coords.longitude ;
}


//counter

var counti=1;
function counter(){
    var count2=localStorage.getItem("count");

    if(!count2){
        localStorage.setItem("count", counti);
    }else{
        localStorage.setItem("count",parseInt(count2)+1);
    }
}
counter();
//welcome messege

function myclick(){
    if(localStorage.getItem("promp")){
        document.getElementById("messege1").style.display="none";
    }else{
        document.getElementById("messege1").style.display="block";
        localStorage.setItem("promp", document.getElementById("messege2").value);
        // document.getElementById("username102").innerHTML=localStorage.getItem("promp");
    }
}

myclick();



//search bar toggle
function search_bar(){
    var x=document.getElementById("search_icon")
    if(x.style.display==="none"){
    x.style.display='block';
}else{
    x.style.display="none"
}
} 

// add to card 
function myaddtocard(){

}


