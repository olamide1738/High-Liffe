import React from "react";
import Navbar from "./store/navbar";
import Footer from "./store/footer";


function Niara(){
    return<div><Navbar/>
         <div className='niara-con'>
        <div className='person'><img alt="high-life"className="person-img" src="./images/person.png"></img></div>
        <div className='concert'><img alt="high-life"className="concert" src="./images/concert.png"></img></div>
        <div className="man"> <img alt="high-life"className=" man" src="./images/man.png"></img></div>
    </div>
        <div className="contain-4 grid ">
            <div class="women g-col-12"><img alt="high-life"className="responsive_img women1" src="./images/women.png" /></div>
            <div class="women g-col-12"><img alt="high-life"className="responsive_img women1" src="./images/events.png" /></div>
            <div className='g-col-12 love2' ><img alt="high-life"className="love2" src="./images/love.png"></img></div>
            <div className='g-col-12 yellow2'><img alt="high-life"className="yellow2" src="./images/yellow.png"></img></div>

        </div>

    
        <button type="button" class="btn niara-btn btn-category btn-outline-dark">Niara</button>
        <div class="grid small-grid2 text-center">
            <div class="g-col-3"><img alt="high-life"className="pic" src="./images/sky.png"></img></div>
            <div class="g-col-3"><img alt="high-life"className="pic" src="./images/coffee.png"></img></div>
            <div class="g-col-3"><img alt="high-life"className="pic" src="./images/road.png"></img></div>
            <div class="g-col-3"><img alt="high-life"className="pic" src="./images/rail.png"></img></div>
        </div>

    <Footer/>
    </div>
}

export default Niara;