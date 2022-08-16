var shoes=[{ 
    id:1001,
    "img":"sport1.1.webp",
    "img2":"sport1.2.webp",
    "img3":"sport1.3.webp",
    "img4":"sport1.4.webp",
    "heading":"Converse White",
    "cardtext":"White Sneakers",
    "orignalprice":"3000",
    "discount":"10%",
    "finalprice":"2700",
    "stock":"15",
    "source":"detail.html?id=1001",
    "n":"1"

},{
    id:1002,
    "img":"shoe1.1.webp",
    "img2":"shoe1.2.webp",
    "img3":"shoe1.3.webp",
    "img4":"shoe1.4.webp",
    "heading":"Adidas Albis",
    "cardtext":"Adidas Albis Gray Sports Shoes",
    "orignalprice":"2800",
    "discount":"15%",
    "finalprice":"2380",
    "stock":"12",
    "source":"detail.html?id=1002",
    "n":"2"
},{
    id:1003,
    "img":"sp1.1.webp",
    "img2":"sp1.2.webp",
    "img3":"sp1.3.webp",
    "img4":"sp1.4.webp",
    "heading":"New Balance",
    "cardtext":"New Balance 996 men's Running Sport",
    "orignalprice":"3000",
    "discount":"8%",
    "finalprice":"2760",
    "stock":"25",
    "source":"detail.html?id=1003",
    "n":"3"
   
},{
    id:1004,
    "img":"sho1.2.webp",
    "img2":"sho1.1.webp",
    "img3":"sho1.2.webp",
    "img4":"sho1.1.webp",
    "heading":"Catalog",
    "cardtext":"new style snaker with black and blue combination",
    "orignalprice":"2500",
    "discount":"15%",
    "finalprice":"2125",
    "stock":"35",
    "source":"detail.html?id=1004",
    "n":"4"
},{
    id:1005,
    "img":"mshoe6.1.webp",
    "img2":"mshoe6.1.webp",
    "img3":"mshoe6.1.webp",
    "img4":"mshoe6.1.webp",
    "heading":"Catalona",
    "cardtext":"new style snaker with black and blue combination",
    "orignalprice":"2500",
    "discount":"15%",
    "finalprice":"2125",
    "stock":"34",
    "source":"detail.html?id=1005",
    "n":"5"

},{
    id:1006,
    "img":"mshoe5.1.webp",
    "img2":"mshoe5.2.webp",
    "img3":"mshoe5.3.webp",
    "img4":"mshoe5.4.webp",
    "heading":"Catalac",
    "cardtext":"new style snaker with white and blue combination",
    "orignalprice":"2500",
    "discount":"15%",
    "finalprice":"2125",
    "stock":"44",
    "source":"detail.html?id=1006",
    "n":"6"
 
}]
var shoes_women=[{
    id:1025,
    "img":"women1 shoe 1.1.webp",
    "img2":"women1 shoe 1.2.webp",
    "img3":"women1 shoe1.3.webp",
    "img4":"women1 shoe 1.1.webp",
    "heading":"All Star",
    "cardtext":"ALL STAR SHOES left over",
    "orignalprice":"4999",
    "discount":"10%",
    "finalprice":"4499",
    "stock":"12",
    "source":"detail.html?id=1025",
    "n":"25"

},{
    id:1026,
    "img":"ezgif.com-gif-maker 1.1.webp",
    "img2":"ezgif.com-gif-maker 1.2.webp",
    "img3":"ezgif.com-gif-maker 1.3.webp",
    "img4":"ezgif.com-gif-maker 1.4.webp",
    "heading":"All Stars",
    "cardtext":"ALL STAR left overwomen shoe",
    "orignalprice":"4500",
    "discount":"10%",
    "finalprice":"4050",
    "stock":"2",
    "source":"detail.html?id=1026",
    "n":"26"
},{
    id:1027,
    "img":"women3 shoe1.2.webp",
    "img2":"women3 shoe1.1.webp",
    "img3":"women3 shoe1.3.webp",
    "img4":"women3 shoe1.4.webp",
    "heading":"Adoa",
    "cardtext":"leftover branded shoes",
    "orignalprice":"4500",
    "discount":"10%",
    "finalprice":"4050",
    "stock":"11",
    "source":"detail.html?id=1027",
    "n":"27"
},{
    id:1028,
    "img":"women shoe 1.1.webp",
    "img2":"women shoe 1.2.webp",
    "img3":"women shoe 1.3.webp",
    "img4":"women shoe 1.1.webp",
    "heading":"Aloc Alam",
    "cardtext":"leftover branded shoes lite yellow summer shoes",
    "orignalprice":"4999",
    "discount":"10%",
    "finalprice":"4499",
    "stock":"20",
    "source":"detail.html?id=1028",
    "n":"28"
},{
    id:1029,
    "img":"women2 shoe 1.1.webp",
    "img2":"women2 shoe 1.2.webp",
    "img3":"women2 shoe1.3.webp",
    "img4":"women2 shoe 1.4.webp",
    "heading":"all star starter",
    "cardtext":"leftover branded shoes black party wear shoes",
    "orignalprice":"4999",
    "discount":"10%",
    "finalprice":"4499",
    "stock":"7",
    "source":"detail.html?id=1029",
    "n":"29"
},{
    
    id:1030,
    "img":"wshoe6.1.webp",
    "img2":"wshoe6.2.webp",
    "img3":"wshoe6.3.webp",
    "img4":"wshoe6.4.webp",
    "heading":"all Humdars",
    "cardtext":"leftover branded shoes black party wear shoes",
    "orignalprice":"4999",
    "discount":"10%",
    "finalprice":"4499",
    "stock":"6",
    "source":"detail.html?id=1030",
    "n":"30"
}]

for (var i = 0; i < shoes.length; i++) {
    document.getElementById("card_shoes").innerHTML += `
    <div class="col-md-4 col-sm-12 border border-end  mt-md-5 ">
    
    <div class="card1 w-100 overflow-hidden rounded">
    <div class="image-box position-relative w-100 product_name">
        <img src="asset/img/${shoes[i].img}" class="main-image w-100 h-100 position-absolute active" >
        <div class="options position-absolute w-100 text-end">
            <img src="asset/img/${shoes[i].img}" onclick="item(this,${shoes[i].n})" class="active">
            <img src="asset/img/${shoes[i].img2}" onclick="item(this,${shoes[i].n})" class="">
            <img src="asset/img/${shoes[i].img3}" onclick="item(this,${shoes[i].n})" class="">
            <img src="asset/img/${shoes[i].img4}" onclick="item(this,${shoes[i].n})" class="">
            </div>
        </div>
        <div class="card-data">
            <div class="heading">
                <h1>${shoes[i].heading}</h1>
                </div>
                <div class="card-text">
                    <p>${shoes[i].cardtext}</p>
                    <p class="mt-2">Price : ${shoes[i].orignalprice} Rs</p>
                    <p class="mt-2">Discount : <span class="text-danger"> ${shoes[i].discount}</span> Rs</p>
                    <p class="mt-2">Buy Now : ${shoes[i].finalprice} Rs</p>
                    <p class="mt-2">Stock : ${shoes[i].stock} </p>
</div>
                    <div class="d-flex justify-content-between">
    <a href="detail.html?id=${shoes[i].id}" class="btn btn-outline-danger border-0 mt-2" >DETAILS<i
    class="fa-solid fa-arrow-right-long ms-1"></i></a>
    <button class="btn btn-outline-danger border-0 mt-2text-start" onclick="addToCart(${shoes[i].id})" >ADD TO CART<i
    class="fa-solid fa-arrow-right-long ms-1"></i></button>
    </div>
                </div>
                </div>
       
    `
}

for (var i = 0; i < shoes_women.length; i++) {
    document.getElementById("card_shoes_women").innerHTML += `
    <div class="col-md-4 col-sm-12 border border-end  mt-md-5 ">
    
    <div class="card1 w-100 overflow-hidden rounded">
    <div class="image-box position-relative w-100 product_name">
    <img src="asset/img/${shoes_women[i].img}" class="main-image w-100 h-100 position-absolute active" >
    <div class="options position-absolute w-100 text-end">
    <img src="asset/img/${shoes_women[i].img}" onclick="item(this,${shoes_women[i].n})" class="active">
    <img src="asset/img/${shoes_women[i].img2}" onclick="item(this,${shoes_women[i].n})" class="">
    <img src="asset/img/${shoes_women[i].img3}" onclick="item(this,${shoes_women[i].n})" class="">
    <img src="asset/img/${shoes_women[i].img4}" onclick="item(this,${shoes_women[i].n})" class="">
    </div>
    </div>
    <div class="card-data">
    <div class="heading">
    <h1>${shoes_women[i].heading}</h1>
    </div>
    <div class="card-text">
    <p>${shoes_women[i].cardtext}</p>
    <p class="mt-2">Price : ${shoes_women[i].orignalprice} Rs</p>
    <p class="mt-2">Discount : <span class="text-danger"> ${shoes_women[i].discount}</span> Rs</p>
    <p class="mt-2">Buy Now : ${shoes_women[i].finalprice} Rs</p>
    <p class="mt-2">Stock : ${shoes_women[i].stock} </p>
    </div>
    <div class="d-flex justify-content-between">
    <a href="detail.html?id=${shoes_women[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
    class="fa-solid fa-arrow-right-long ms-1"></i></a>
    <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${shoes_women[i].id})" >ADD TO CART<i
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