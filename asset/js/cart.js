function addToCart(id) {
    if (localStorage.getItem('cart') != "" && localStorage.getItem('cart') != null) {
        var arr = [];
        arr = JSON.parse(localStorage.getItem('cart'));
        let check = true;
        for (let obj of arr) {
            if (obj.id == id) {
                for (let pro of data) {
                    if (obj.count == pro.stock) {
                        alert(`Out of stoke. No more item to sell`);
                        break;
                    } else {
                        obj.count = obj.count + 1;
                        localStorage.setItem('cart', JSON.stringify(arr));
                        showCartCount();
                    }
                }
                check = false;
            }
        }
        if (check == true) {
            var cart = {
                id: id,
                count: 1
            }
            arr.push(cart);
            localStorage.setItem("cart", JSON.stringify(arr));
            showCartCount();
        }


    } else {
        var cart = {
            id: id,
            count: 1
        };
        var arr = [];
        arr.push(cart);
        localStorage.setItem('cart', JSON.stringify(arr));
        showCartCount();
    }


}


function showCartCount(){
let count=0;
let arr=JSON.parse(localStorage.getItem('cart'));
for(let obj of arr){
count+=obj.count;
}
    document.getElementById('cartCount').innerHTML=count;
}
window.onload=()=>{
    showCartCount();
}


function loadCartData(){
let cartData=JSON.parse(localStorage.getItem('cart'));


}