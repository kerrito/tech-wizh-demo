var tshirts=[{
    id:1007,
    "img":"tees1.1.webp",
    "img2":"tees1.2.webp",
    "img3":"tees1.3.webp",
    "img4":"tees1.4.webp",
    "heading":"Fleetdown",
    "cardtext":"Blue Pe T Shirt: 9-10 - TFS School and Dancewear",
    "orignalprice":"2000",
    "discount":"10%",
    "finalprice":"1800",
    "stock":"22",
    "source":"detail.html?id=1007",
    "n":"1"

},{
    
    id:1008,
    "img":"tee1.1.webp",
    "img2":"tee1.2.webp",
    "img3":"tee1.3.webp",
    "img4":"tee1.1.webp",
    "heading":"Ableton Push",
    "cardtext":"Kappa Reim T Shirt",
    "orignalprice":"2200",
    "discount":"15%",
    "finalprice":"1870",
    "stock":"21",
    "source":"detail.html?id=1008",
    "n":"2"
},{
    id:1009,
    "img":"shirt1.1.webp",
    "img2":"shirt1.2.webp",
    "img3":"shirt1.3.webp",
    "img4":"shirt1.4.webp",
    "heading":"Trefoil",
    "cardtext":"Blue and White T-shirt",
    "orignalprice":"2000",
    "discount":"10%",
    "finalprice":"1800",
    "stock":"11",
    "source":"detail.html?id=1009",
    "n":"3"
   
},{
    id:1010,
    "img":"t-shirt1.1.webp",
    "img2":"t-shirt1.2.webp",
    "img3":"t-shirt1.1.webp",
    "img4":"t-shirt1.2.webp",
    "heading":"Calatac",
    "cardtext":"Catalog-LIGHT BLUE T-SHIRT",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"18",
    "source":"detail.html?id=1010",
    "n":"4"
},{
    
    id:10011,
    "img":"tees5.1.webp",
    "img2":"tees5.2.webp",
    "img3":"tees5.3.webp",
    "img4":"tees5.4.webp",
    "heading":"Conalog",
    "cardtext":"Catalog-LIGHT PURPLE T-SHIRT",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"9",
    "source":"detail.html?id=1011",
    "n":"5",
},{
    
    id:1012,
    "img":"tees6.1.webp",
    "img2":"tees6.2.webp",
    "img3":"tees6.3.webp",
    "img4":"tees6.4.webp",
    "heading":"Catlog",
    "cardtext":"Catalog-LIGHT BLACK T-SHIRT",
    "orignalprice":"2500",
    "discount":"10%",
    "finalprice":"2250",
    "stock":"3",
    "source":"detail.html?id=1012",
    "n":"6",
}]


var tshirts_women=[{
    id:1031,
    "img":"wtees1.1.webp",
    "img2":"wtees1.2.webp",
    "img3":"wtees1.3.webp",
    "img4":"wtees1.4.webp",
    "heading":"all New Star",
    "cardtext":"leftover branded shoes black party wear shoes",
    "orignalprice":"4999",
    "discount":"10%",
    "finalprice":"4499",
    "stock":"14",
    "source":"detail.html?id=1031",
    "n":"7"
},{
    id:1032,
    "img":"wtees2.1.webp",
    "img2":"wtees2.2.webp",
    "img3":"wtees2.3.webp",
    "img4":"wtees2.4.webp",
    "heading":"Atlantica",
    "cardtext":"leftover branded shoes black party wear shoes",
    "orignalprice":"4999",
    "discount":"10%",
    "finalprice":"4499",
    "stock":"33",
    "source":"detail.html?id=1032",
    "n":"8"
},{
    id:1033,
    "img":"wtees3.1.webp",
    "img2":"wtees3.2.webp",
    "img3":"wtees3.3.webp",
    "img4":"wtees3.4.webp",
    "heading":"Allam Ala",
    "cardtext":"leftover branded shoes black party wear shoes",
    "orignalprice":"4999",
    "discount":"10%",
    "finalprice":"4499",
    "stock":"34",
    "source":"detail.html?id=1033",
    "n":"9"
},{
    id:1034,
    "img":"wtees4.1.webp",
    "img2":"wtees4.2.webp",
    "img3":"wtees4.3.webp",
    "img4":"wtees4.4.webp",
    "heading":"New Stars",
    "cardtext":"leftover branded shoes black party wear shoes",
    "orignalprice":"4999",
    "discount":"10%",
    "finalprice":"4499",
    "stock":"3",
    "source":"detail.html?id=1034",
    "n":"10"
},{
    id:1035,
    "img":"wtees5.1.webp",
    "img2":"wtees5.2.webp",
    "img3":"wtees5.3.webp",
    "img4":"wtees5.4.webp",
    "heading":"New Adwam",
    "cardtext":"leftover branded shoes black party wear shoes",
    "orignalprice":"4999",
    "discount":"10%",
    "finalprice":"4499",
    "stock":"22",
    "source":"detail.html?id=1035",
    "n":"11"
},{
    id:1036,
    "img":"wtees6.1.webp",
    "img2":"wtees6.2.webp",
    "img3":"wtees6.3.webp",
    "img4":"wtees6.4.webp",
    "heading":"Allu's Style ",
    "cardtext":"leftover branded shoes black party wear shoes",
    "orignalprice":"4999",
    "discount":"10%",
    "finalprice":"4499",
    "stock":"23",
    "source":"detail.html?id=1036",
    "n":"12"
}]



                 
                            
         

     function item(img,n){
        document.querySelectorAll(".main-image")[n-1].src = img.src;
        var opt=n*4;
        for(var i=opt-4;i<opt;i++){
            document.querySelectorAll(".options img")[i].classList.remove("active");
        }
        img.classList.add("active");
    }
        