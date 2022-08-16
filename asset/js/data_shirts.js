
var shirts=[{
    
    
    id:1019,
    "img":"shirtt1.1.webp",
    "img2":"shirtt1.2.webp",
    "img3":"shirtt1.3.webp",
    "img4":"shirtt1.4.webp",
    "heading":"Adidas",
    "cardtext":"New Sky Blue Theme ",
    "orignalprice":"3000",
    "discount":"10%",
    "finalprice":"2700",
    "stock":"29",
    "source":"detail.html?id=1019",
    "n":"1",

},{
    
    id:1020,
    "img":"shirt2.1.webp",
    "img2":"shirt2.2.webp",
    "img3":"shirt2.3.webp",
    "img4":"shirt2.4.webp",
    "heading":"Eden",
    "cardtext":"New Black Theme",
    "orignalprice":"3500",
    "discount":"10%",
    "finalprice":"3150",
    "stock":"12",
    "source":"detail.html?id=1020",
    "n":"2"
},{
    
    id:1021,
    "img":"shirt3.1.webp",
    "img2":"shirt3.2.webp",
    "img3":"shirt3.3.webp",
    "img4":"shirt3.2.webp",
    "heading":"Adam's",
    "cardtext":"New Grey Theme",
    "orignalprice":"4000",
    "discount":"10%",
    "finalprice":"3600",
    "stock":"34",
    "source":"detail.html?id=1021",
    "n":"3"
},{
    
    id:1022,
    "img":"shirt4.1.webp",
    "img2":"shirt4.2.webp",
    "img3":"shirt4.3.webp",
    "img4":"shirt4.4.webp",
    "heading":"Bin Ladeem",
    "cardtext":"New Navy Blue Theme",
    "orignalprice":"50000",
    "discount":"10%",
    "finalprice":"4500",
    "stock":"8",
    "source":"detail.html?id=1022",
    "n":"4"
},{
    id:1023,
    "img":"shirt6.1.webp",
    "img2":"shirt6.2.webp",
    "img3":"shirt6.3.webp",
    "img4":"shirt6.4.webp",
    "heading":"Adidam",
    "cardtext":"New Dark Theme",
    "orignalprice":"6000",
    "discount":"10%",
    "finalprice":"5400",
    "stock":"6",
    "source":"detail.html?id=1023",
    "n":"5"

},{
    
    id:1024,
    "img":"shirt7.1.webp",
    "img2":"shirt7.2.PNG",
    "img3":"shirt7.3.PNG",
    "img4":"shirt7.4.PNG",
    "heading":"Adidiam",
    "cardtext":"New White Theme",
    "orignalprice":"7000",
    "discount":"10%",
    "finalprice":"6300",
    "stock":"5",
    "source":"detail.html?id=1024",
    "n":"6"
}]
var shirts_women=[{
    id:1037,
    "img":"wshirt1.1.webp",
    "img2":"wshirt1.2.webp",
    "img3":"wshirt1.3.PNG",
    "img4":"wshirt1.4.PNG",
    "heading":"Canaloniatic",
    "cardtext":"Catalog-LIGHT BLUE T-SHIRT",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"6",
    "source":"detail.html?id=1037",
    "n":"7"
},{
    
    id:1038,
    "img":"wshirt2.1.webp",
    "img2":"wshirt2.2.webp",
    "img3":"wshirt2.3.webp",
    "img4":"wshirt2.4.webp",
    "heading":"New Catlogina",
    "cardtext":"Catalog-LIGHT BLUE T-SHIRT",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"22",
    "source":"detail.html?id=1038",
    "n":"8"
},{
    
    id:1039,
    "img":"wshirt3.1.webp",
    "img2":"wshirt3.2.webp",
    "img3":"wshirt3.3.webp",
    "img4":"wshirt3.4.webp",
    "heading":"Canalotiv",
    "cardtext":"Catalog-LIGHT BLUE T-SHIRT",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"11",
    "source":"detail.html?id=1039",
    "n":"9"
},{

    id:1040,
    "img":"wshirt4.1.webp",
    "img2":"wshirt4.2.webp",
    "img3":"wshirt4.3.webp",
    "img4":"wshirt4.4.webp",
    "heading":"Catnalogina",
    "cardtext":"Catalog-LIGHT BLUE T-SHIRT",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"12",
    "source":"detail.html?id=1040",
    "n":"10"
},{
    
    id:1041,
    "img":"wshirt5.1.webp",
    "img2":"wshirt5.2.webp",
    "img3":"wshirt5.3.PNG",
    "img4":"wshirt5.4.webp",
    "heading":"Colinonia",
    "cardtext":"Catalog-LIGHT BLUE T-SHIRT",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"22",
    "source":"detail.html?id=1041",
    "n":"11"
},{
    
    id:1042,
    "img":"wshirt6.1.webp",
    "img2":"wshirt6.2.webp",
    "img3":"wshirt6.3.webp",
    "img4":"wshirt6.4.webp",
    "heading":"Humara's",
    "cardtext":"Catalog-LIGHT BLUE T-SHIRT",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"22",
    "source":"detail.html?id=1042",
    "n":"12"
}]


for (var i = 0; i < shirts.length; i++) {
    document.getElementById("shirt_card12").innerHTML += `
 <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
    
 <div class="card1 w-100 overflow-hidden rounded">
 <div class="image-box position-relative w-100 product_name">
     <img src="asset/img/${shirts[i].img}" class="main-image w-100 h-100 position-absolute active" >
     <div class="options position-absolute w-100 text-end">
     <img src="asset/img/${shirts[i].img}" onclick="item(this,${shirts[i].n})" class="active">
     <img src="asset/img/${shirts[i].img2}" onclick="item(this,${shirts[i].n})" class="">
     <img src="asset/img/${shirts[i].img3}" onclick="item(this,${shirts[i].n})" class="">
     <img src="asset/img/${shirts[i].img4}" onclick="item(this,${shirts[i].n})" class="">
     </div>
     </div>
     <div class="card-data">
         <div class="heading">
         <h1>${shirts[i].heading}</h1>
         </div>
         <div class="card-text">
             <p>${shirts[i].cardtext}</p>
             <p class="mt-2">Price : ${shirts[i].orignalprice} Rs</p>
             <p class="mt-2">Discount : <span class="text-danger"> ${shirts[i].discount}</span> Rs</p>
             <p class="mt-2">Buy Now : ${shirts[i].finalprice} Rs</p>
             <p class="mt-2">Stock : ${shirts[i].stock} </p>
     </div>
    <div class="d-flex justify-content-between">
    <a href="detail.html?id=${shirts[i].id}" class="btn btn-outline-danger border-0 mt-2" >DETAILS<i
    class="fa-solid fa-arrow-right-long ms-1"></i></a>
    <button class="btn btn-outline-danger border-0 mt-2 " onclick="addToCart(${shirts[i].id})" >ADD TO CART<i
    class="fa-solid fa-arrow-right-long "></i></button>
    </div>
         </div>
         </div>
         `
     }


     for (var i = 0; i < shirts_women.length; i++) {
        document.getElementById("wshirt_card12").innerHTML += `
     <div class="col-md-4 col-sm-12 border-0 mt-md-5 ">
        
     <div class="card1 w-100 overflow-hidden rounded">
     <div class="image-box position-relative w-100 product_name">
         <img src="asset/img/${shirts_women[i].img}" class="main-image w-100 h-100 position-absolute active" >
         <div class="options position-absolute w-100 text-end">
         <img src="asset/img/${shirts_women[i].img}" onclick="item(this,${shirts_women[i].n})" class="active">
         <img src="asset/img/${shirts_women[i].img2}" onclick="item(this,${shirts_women[i].n})" class="">
         <img src="asset/img/${shirts_women[i].img3}" onclick="item(this,${shirts_women[i].n})" class="">
         <img src="asset/img/${shirts_women[i].img4}" onclick="item(this,${shirts_women[i].n})" class="">
         </div>
         </div>
         <div class="card-data">
             <div class="heading">
             <h1>${shirts_women[i].heading}</h1>
             </div>
             <div class="card-text">
                 <p>${shirts_women[i].cardtext}</p>
                 <p class="mt-2">Price : ${shirts_women[i].orignalprice} Rs</p>
                 <p class="mt-2">Discount : <span class="text-danger"> ${shirts_women[i].discount}</span> Rs</p>
                 <p class="mt-2">Buy Now : ${shirts_women[i].finalprice} Rs</p>
                 <p class="mt-2">Stock : ${shirts_women[i].stock} </p>
         </div>
                 
    <div class="d-flex justify-content-between">
    <a href="detail.html?id=${shirts_women[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
    class="fa-solid fa-arrow-right-long ms-1"></i></a>
    <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${shirts_women[i].id})" >ADD TO CART<i
    class="fa-solid fa-arrow-right-long ms-1"></i></button>
    </div>
             </div>
             </div>
             `
         }


         function item(img,n){
            document.querySelectorAll(".main-image")[n-1].src = img.src;
            var opt=n*4;
            for(var i=opt-4;i<opt;i++){
                document.querySelectorAll(".options img")[i].classList.remove("active");
            }
            img.classList.add("active");
        }