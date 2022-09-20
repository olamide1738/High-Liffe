import  React from 'react';
import Navbar from './store/navbar';
import Footer from './store/footer';

function Highlife() {
    return <div >
        <Navbar/>
     
        <div className='contain'>
            <div className='person'><img className="person-img" src="./images/person.png"></img></div>
            <div className='concert'><img className="concert" src="./images/concert.png"></img></div>
            <div className="man"> <img className=" man" src="./images/man.png"></img></div>
           
        </div>
        <div className="contain3 grid ">
            <div class="women g-col-12"><img className="responsive_img women1" src="./images/women.png" /></div>
            <div class="women g-col-12"><img className="responsive_img women1" src="./images/events.png" /></div>

        </div>

        <button type="button" class="btn btn-category  high-life-btn btn-outline-dark">Categories</button>
        <div className="main-container">
        <div className="contain2">
            
            <div className='building'><img className='building-img' src="./images/building.png"></img></div>
            <div className='bike'><img className=' bike-img ' src="./images/bike.png"></img></div>
            <div className='kitchen'><img className='kitchen' src="./images/kitchen.png"></img></div>
            <div className="depresssion"><img className='depression' src="./images/depression.png"></img></div>
            <div className="stairs"><img className='stairs' src="./images/stairs.png"></img></div>


            </div>
            <div className="grid small-grid contain">
                <div className="g-col-8 love2"><button type="button" class="btn high-life-btn btn-success">Highlife TV Archivies</button></div>
                <div className='g-col-4 love2' ><img className="love2" src="./images/love.png"></img></div>
                <div className="g-col-8 yellow2"></div>
                <div className='g-col-4 yellow2'><img className="yellow2" src="./images/yellow.png"></img></div>

            </div>
        </div>
        
        <Footer/>
    </div>
}

export default  Highlife;