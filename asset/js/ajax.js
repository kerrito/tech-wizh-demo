function pageroutes(page) {
    switch (page) {
        case "home":
            $.ajax({
                url: "asset/slicepage/home.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList

                }

            })
            break;
        case "about":
            $.ajax({
                url: "asset/slicepage/about.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
        case "product":
            $.ajax({
                url: "asset/slicepage/product.htmlt",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
        case "feedback":
            $.ajax({
                url: "asset/slicepage/feedback.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
        case "contact":
            $.ajax({
                url: "asset/slicepage/contact.html",
                succes: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
        case "men":
            $.ajax({
                url: "asset/slicepage/men.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
        case "women":
            $.ajax({
                url: "asset/slicepage/women.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
        case "cart":
            $.ajax({
                url: "asset/slicepage/cart.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
        case "detail":
            $.ajax({
                url: "asset/slicepage/detail.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
        case "pant":
            $.ajax({
                url: "asset/slicepage/pants.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
        case "shirt":
            $.ajax({
                url: "asset/slicepage/shirts.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
        case "t-shirt":
            $.ajax({
                url: "asset/slicepage/t-shirt.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
        case "shoes":
            $.ajax({
                url: "asset/slicepage/shoes.html",
                success: function (load) {
                    document.querySelector("#page").innerHTML = load;
                    document.querySelector(".nav-link").classList
                }
            })
            break;
    }
}

pageroutes("home");