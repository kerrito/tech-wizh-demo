
var pants=[{
    id:1013,
    "img":"jeans1.1.webp",
    "img2":"jeans1.2.webp",
    "img3":"jeans1.1.webp",
    "img4":"jeans1.2.webp",
    "heading":"Blue Pants",
    "cardtext":"New Theme Blue",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"6",
    "source":"detail.html?id=1013",
    "n":"1",



},{
    id:1014,    
    "img":"jeans2.1.webp",
    "img2":"jeans2.2.webp",
    "img3":"jeans2.3.webp",
    "img4":"jeans2.2.webp",
    "heading":"PLAN BLUE",
    "cardtext":"New Theme Blue",
    "orignalprice":"3000",
    "discount":"10%",
    "finalprice":"2700",
    "stock":"31",
    "source":"detail.html?id=1014",
    "n":"2"
},{
    
    id:1015,
    "img":"jeans3.1.webp",
    "img2":"jeans3.2.webp",
    "img3":"jeans3.3.webp",
    "img4":"jeans3.2.webp",
    "heading":"Blue Tag Jeans",
    "cardtext":"New Theme Blue",
    "orignalprice":"2200",
    "discount":"10%",
    "finalprice":"1980",
    "stock":"22",
    "source":"detail.html?id=1015",
    "n":"3"
},{
    
    id:1016,
    "img":"jeans4.1.webp",
    "img2":"jeans4.2.webp",
    "img3":"jeans4.3.webp",
    "img4":"jeans4.2.webp",
    "heading":"Plan Black",
    "cardtext":"New Theme Black",
    "orignalprice":"3000",
    "discount":"10%",
    "finalprice":"2700",
    "stock":"19",
    "source":"detail.html?id=1016",
    "n":"4"
},{
    
    id:1017,
    "img":"jeans5.1.webp",
    "img2":"jeans5.2.webp",
    "img3":"jeans5.1.webp",
    "img4":"jeans5.2.webp",
    "heading":"Sky Blue Tag",
    "cardtext":"New Theme Blue",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"5",
    "source":"detail.html?id=1017",
    "n":"5"
},{
    
    id:1018,
    "img":"jeans6.1.webp",
    "img2":"jeans6.2.webp",
    "img3":"jeans6.3.webp",
    "img4":"jeans6.2.webp",
    "heading":"Black Tag",
    "cardtext":"New Theme Black",
    "orignalprice":"5000",
    "discount":"10%",
    "finalprice":"4500",
    "stock":"23",
    "source":"detail.html?id=1018",
    "n":"6"
}]
var pants_women=[{
    id:1043,
    "img":"wjeans1.1.webp",
    "img2":"wjeans1.2.webp",
    "img3":"wjeans1.3.webp",
    "img4":"wjeans1.1.webp",
    "heading":"Blue Ladiana JEANS",
    "cardtext":"New Theme Blue",
    "orignalprice":"5500",
    "discount":"10%",
    "finalprice":"4950",
    "stock":"22",
    "source":"detail.html?id=1043",
    "n":"7"
},{
    
    id:1044,
    "img":"wjeans2.1.webp",
    "img2":"wjeans2.2.webp",
    "img3":"wjeans2.3.webp",
    "img4":"wjeans2.1.webp",
    "heading":"Dark Blue Pants",
    "cardtext":"New Theme Blue",
    "orignalprice":"2000",
    "discount":"10%",
    "finalprice":"1800",
    "stock":"23",
    "source":"detail.html?id=1044",
    "n":"8"
},{
    
    id:1045,
    "img":"wjeans3.1.webp",
    "img2":"wjeans3.2.webp",
    "img3":"wjeans3.3.webp",
    "img4":"wjeans3.4.webp",
    "heading":"Pink Pants",
    "cardtext":"New Theme Pink",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"12",
    "source":"detail.html?id=1045",
    "n":"9"
},{
    
    id:1046,
    "img":"wjeans4.1.png",
    "img2":"wjeans4.2.png",
    "img3":"wjeans4.3.png",
    "img4":"wjeans4.4.png",
    "heading":"Pajama Pants",
    "cardtext":"New Theme Musturd",
    "orignalprice":"3500",
    "discount":"10%",
    "finalprice":"3150",
    "stock":"2",
    "source":"detail.html?id=1046",
    "n":"10"
},{
    
    id:1047,
    "img":"wjeans5.1.webp",
    "img2":"wjeans5.2.webp",
    "img3":"wjeans5.3.webp",
    "img4":"wjeans5.4.webp",
    "heading":"Blue Noana Jeans",
    "cardtext":"New Theme Blue",
    "orignalprice":"5000",
    "discount":"10%",
    "finalprice":"4500",
    "stock":"10",
    "source":"detail.html?id=1047",
    "n":"11"
},{
    
    id:1048,
    "img":"wjeaans6.1.webp",
    "img2":"wjeans6.2.webp",
    "img3":"wjeaans6.1.webp",
    "img4":"wjeans6.2.webp",
    "heading":"Multi Pants",
    "cardtext":"New Theme Multi",
    "orignalprice":"6000",
    "discount":"10%",
    "finalprice":"5400",
    "stock":"12",
    "source":"detail.html?id=1048",
    "n":"12"

}]




for (var i = 0; i < pants.length; i++) {
//     document.getElementById("pant_card12").innerHTML += `
//  <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
    
//  <div class="card1 w-100 overflow-hidden rounded">
//  <div class="image-box position-relative w-100 product_name">
//      <img src="asset/img/${pants[i].img}" class="main-image w-100 h-100 position-absolute active" >
//      <div class="options position-absolute w-100 text-end">
//      <img src="asset/img/${pants[i].img}" onclick="item(this,${pants[i].n})" class="active">
//      <img src="asset/img/${pants[i].img2}" onclick="item(this,${pants[i].n})" class="">
//      <img src="asset/img/${pants[i].img3}" onclick="item(this,${pants[i].n})" class="">
//      <img src="asset/img/${pants[i].img4}" onclick="item(this,${pants[i].n})" class="">
//      </div>
//      </div>
//      <div class="card-data">
//          <div class="heading">
//          <h4>${pants[i].heading}</h4>
//          </div>
//          <div class="card-text">
//              <p>${pants[i].cardtext}</p>
//              <p class="mt-2">Price : ${pants[i].orignalprice} Rs</p>
//              <p class="mt-2">Discount : <span class="text-danger"> ${pants[i].discount}</span> Rs</p>
//              <p class="mt-2">Buy Now : ${pants[i].finalprice} Rs</p>
//              <p class="mt-2">Stock : ${pants[i].stock} </p>
//      </div>
//              <div class="d-flex justify-content-between">
//     <a href="detail.html?id=${pants[i].id}" class="btn btn-outline-danger border-0 mt-2" >DETAILS<i
//     class="fa-solid fa-arrow-right-long ms-1"></i></a>
//     <button class="btn btn-outline-danger border-0 mt-2text-start" onclick="addToCart(${pants[i].id})" >ADD TO CART<i
//     class="fa-solid fa-arrow-right-long ms-1"></i></button>
//     </div>
//          </div>
//          </div>
//          `
     }

     
     for (var i = 0; i < pants_women.length; i++) {
    //     document.getElementById("wpants_card12").innerHTML += `
    //  <div class="col-md-4 col-sm-12 border-0  mt-md-5 ">
    //  <div class="card1 w-100 overflow-hidden rounded">

    //  <div class="image-box position-relative w-100 product_name">
    //      <img src="asset/img/${pants_women[i].img}" class="main-image w-100 h-100 position-absolute active" >
    //      <div class="options position-absolute w-100 text-end">
    //      <img src="asset/img/${pants_women[i].img}" onclick="item(this,${pants_women[i].n})" class="active">
    //      <img src="asset/img/${pants_women[i].img2}" onclick="item(this,${pants_women[i].n})" class="">
    //      <img src="asset/img/${pants_women[i].img3}" onclick="item(this,${pants_women[i].n})" class="">
    //      <img src="asset/img/${pants_women[i].img4}" onclick="item(this,${pants_women[i].n})" class="">
    //      </div>
    //      </div>
    //      <div class="card-data">
    //          <div class="heading">
    //          <h4>${pants_women[i].heading}</h4>
    //      </div>
    //      <div class="card-text">
    //          <p>${pants_women[i].cardtext}</p>
    //          <p class="mt-2">Price : ${pants_women[i].orignalprice} Rs</p>
    //          <p class="mt-2">Discount : <span class="text-danger"> ${pants_women[i].discount}</span> Rs</p>
    //          <p class="mt-2">Buy Now : ${pants_women[i].finalprice} Rs</p>
    //          <p class="mt-2">Stock : ${pants_women[i].stock} </p>
    //  </div>
             
    // <div class="d-flex justify-content-between">
    // <a href="detail.html?id=${pants_women[i].id}" class="btn btn-outline-danger border-0 mt-2 bounce-top" >DETAILS<i
    // class="fa-solid fa-arrow-right-long ms-1"></i></a>
    // <button class="btn btn-outline-danger border-0 mt-2text-start bounce-top" onclick="addToCart(${pants_women[i].id})" >ADD TO CART<i
    // class="fa-solid fa-arrow-right-long ms-1"></i></button>
    // </div>
    //      </div>
    //      </div>
    //      `
     }
        
     
     function item(img,n){
        document.querySelectorAll(".main-image")[n-1].src = img.src;
        var opt=n*4;
        for(var i=opt-4;i<opt;i++){
            document.querySelectorAll(".options img")[i].classList.remove("active");
        }
        img.classList.add("active");
    }
        
    