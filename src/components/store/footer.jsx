import React from "react";

function Footer() {
    return  <div className="container foot">
            <div className="mails">
            <h2 className="mails">Be a Part of the High Life World</h2>
            <h5 className="mail">join Our Mailing List</h5>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <form class="d-flex forms" role="search">
                        <input class="form-control mail-input form me-2" type="search" placeholder="example@email.com" aria-label="Submit" />
            
                        <button type="submit" class="button btn btn-dark">Subscribe</button>
                    </form>
                </div>
            </nav>
        </div>

            <div className="container">
            <nav class=" navigation navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                     <img class="nav-img" src="./images/logo.jpeg"/><button class="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
   
                    </button>
                        <div class="navbar nav" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">High Life Church</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Give</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ">Privacy</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ">Terms</a>
                                </li>

                                <li class="nav-item">
                                 
                                </li>
                            <li class="nav-item">
                                <img class="social" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" />
                            </li>
                            <li class="nav-item">
                                <img class="social" src="https://thumbs.dreamstime.com/b/black-white-facebook-logo-vector-ai-file-easily-editable-have-white-background-high-resolution-facebook-logo-vector-138330206.jpg" />
                            </li>
                            <li class="nav-item">
                                <img class="social"
                                    src="https://cdn-icons-png.flaticon.com/512/81/81609.png" />
                            </li>

                            </ul>
                        </div>
                        </div>
               
          
           </nav>
        </div>
        </div>
}

export default Footer;