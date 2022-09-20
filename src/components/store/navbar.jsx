import React from "react";

function Navbar(){
    return <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand logo-img" href="#"><img src="./images/logo.jpeg"></img></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="">High Life Church</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Life Blood</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link " href="/niara">Niara</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ">Music</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ">Carton Williams</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/store">Store</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/highlife">HighLife TV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-push">Events  </a>

                    </li>
            
                    <li class="nav-item">
                        <i class="fas fa-search nav-link"></i>
                    </li>
                   
                    <li class="nav-item nav-item1">
                        <img class="profile" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"></img>
                    </li>
                    <li class="nav-item nav-item1">
                        <img class="shopping" src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png"></img>
                    </li>
                    <li class="nav-item nav-item1">
                        <button type="button" class="btn btn-success">Sign up/Login</button>
                    </li>
                    
                </ul>
                
            </div>
        </div>
    </nav>

}

export default Navbar;