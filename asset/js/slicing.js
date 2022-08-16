//ticker

document.getElementById("ticker").innerHTML = `<marquee class="mb-5"><span id="time"></span><span id="location"></span></marquee>`


document.getElementById("messege1").innerHTML =`

<div class="row messege3 p-3  bg-light">
    <div class="col-md-12 text-center w-100 h-100">
        <div class=" pb-2">
        <img src="asset/img/avatar.jpg" class=" pt-2 rounded-circle" width="100" alt="">
        <h3 class="text-center">Please Enter Your First Name</h3>
    </div>
    <div class="bg-dark py-2">
        <div class="d-flex flex-column justify-content-center aligin-items-center">
            <input type="text" class="mx-auto px-5 py-2 mb-2 rounded-3 border-2 border-danger" id="messege2" placeholder="Please Enter Your Name">
            <div class=" text-center">
            <button type="button" class=" bg-light btn btn-outline-danger bbtn1 text-dark" onclick="myclick()">Submit</button>
        </div>
    </div>
    </div>
</div>
</div>

`
//navbar
document.getElementById("nav").innerHTML = `
<div class="uzair">
<div class="head1 fixed-top"">
<div class="container">
    <header class="head mb-0 pb-0">
        <p class="d-sm-block d-none" ><i class="fa-solid fa-user pe-2"></i>${localStorage.getItem("promp").toLocaleUpperCase()}</p>
        <img src="asset/img/logo.png"   alt="TFS LOGO">
            <ul class="icon">
                
                <a href="search.html"><i class="fa-solid fa-magnifying-glass pe-2" ></i></a>
                   
                <a href="cart.html"><i class="fa-solid fa-cart-plus pe-2"></i> <span id="cartCount">0</span>  </a>
                 
                  
                    </li>
                    
                    <span class="  text-dark p-1 rounded " style="font-size:14px;">  Visitor Count <sup>${localStorage.getItem("count")}</sup>     </span>
                </ul>
        </header>

        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <p class="d-sm-none d-block text-dark"><i class="fa-solid fa-user me-2"></i>${localStorage.getItem("promp").toLocaleUpperCase()}</p>
      
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                                  <a class="nav-link ${page_name=="HOME"?"active":""}" href="index.html">HOME</a>
                              </li>
                              
                              <li class="nav-item"><a class="nav-link ${page_name=="PRODUCTS"?"active":""}" href="product.html">Products</a></li>
                             
                                <li class="nav-item">
                                    <a class="nav-link ${page_name=="FEEDBACK"?"active":""}" href="feedback.html">FEEDBACK</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ${page_name=="ABOUT"?"active":""}" href="about.html">ABOUT </a>
                                </li>
                        
                                <li class="nav-item">
                                  <a class="nav-link ${page_name=="CONTACT"?"active":""}" href="contact.html">CONTACT</a>
                              </li>
                              <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CATEGORIES
                              </a>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item ${page_name=="T-SHIRTS"?"active":""}" href="t-shirt.html">T-Shirts</a></li>
                                <li><a class="dropdown-item ${page_name=="SHIRTS"?"active":""}" href="shirts.html">Shirts</a></li>
                                <li><a class="dropdown-item ${page_name=="PANTS"?"active":""}" href="pants.html">Pants</a></li>
                                <li><a class="dropdown-item ${page_name=="SHOES"?"active":""}" href="shoes.html">Shoes</a></li>
                              </ul>
                              </li>
                          </ul>
      
                      </div>
                  </div>
              </nav>
      
      

      </div>
</div>
</div>


`
//active
// ${page_name=="Home"?"active":""}
// ${page_name=="About"?"active":""}
// ${page_name=="Gallery"?"active":""}
// ${page_name=="Contact"?"active":""}


//heading
document.getElementById("page_name").innerHTML = `<h1><b>${page_name}</b></h1>`





document.getElementById("footer2").innerHTML = ` <footer class=" head3 py-5">

<div class="container">
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
            <a href=" index.html" class="logo"><img src="asset/img/logo.png" height="70px" alt=""> </a>
            <p class="">Here you can find enjoyment with full of infromation as you are already awear of it.We
                provide tons of information about sea creature and there life.</p>
        </div>
        <div class="col-lg-4 col-md-5 col-sm-12 ms-auto text-md-end text-start">

            <div class="mt-1">
                <a class="pe-2 pe-md-2" href="index.html">Home</a><a class="pe-2 pe-md-2"
                    href="gallery.html">Gallery</a><a class="pe-2 pe-md-2 " href="about.html">About</a><a
                    href="contact.html">Contact</a>
            </div>
            <div class="icon my-2 ">
                <ul class="list-unstyled">
                    <li class="mt-3">
                        <i class="fa-solid fa-envelope-circle-check"></i>
                        <a href="mailto:fashionthrif@gmail.com">F.thrif@gmail.com</a>
                    </li>
                    <li class="icon mt-1"><i class="fa-solid fa-phone"></i><a href="tel:123456789">123 456
                            789</a>
                    </li>
                    <li class="icon  mt-1 "><i class="fa-solid fa-location-dot"></i>Aptech metro star gate karachi
                    </li>
                </ul>
            </div>

        </div>
    </div>
    <div class="row">
        <div class="col-lg-5 col-md-6 col-sm-12">
            <p>&copy; 2022 with Jenkinson, All rights reserved.</p>
        </div>
        <div class="col-lg-4 col-md-5 col-sm-12 ms-auto text-md-end text-start">
            <p><a class="me-3" href="sitemap.html"> Site Map</a> <a href="queries_links.html">Queries</a> </p>
        </div>
    </div>
</div>
</div>

</footer>`





document.getElementById("breed1").innerHTML=`
<div class="col-12 d-flex justify-content-center align-item-center mb-2">
                <nav class="" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">${page_name}</li>
                    </ol>
                </nav>
            </div>
        `