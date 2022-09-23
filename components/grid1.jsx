import Navbar from "./store/navbar";
import React from "react"
import Footer from "./store/footer";

function Grid() {
    return<div>
        <Navbar/>
        <div className="container">
            <div class=" container grid text-center first-con">
                <div class="g-col-8 reed responsive_img"><img alt="red"className="responsive_img" src="./public/images/red.png"></img></div>
                <div class="g-col-4 life responsive"><div className="words"><h1 className="g-col-12 lifeBlood">Life Blood</h1></div><div className="other"><h5 className="g-col-3 about">About</h5><h5 className="g-col-3 contact">Contact</h5><h5 className="g-col-3 events">Events</h5></div></div>
                <div class="g-col-4 arm responsive_img arm"><img alt="high-life"className="responsive_img" src="./images/arm.png"></img></div>
                <div class="g-col-4 question responsive_img"><img alt="high-life"className="responsive_img" src="./images/question.png"></img></div>
                <div class="g-col-4 card responsive_img"><img alt="high-life"className="responsive_img" src="./images/card.png"></img></div>
            


            </div>
            <div className="container grid women-grid">
            <div class="women g-col-12"><img alt="high-life"className="responsive_img women" src="./images/women.png" /></div>
                <div class="women g-col-12"><img alt="high-life"className="responsive_img women" src="./images/events.png" /></div>

            </div>
            <div class="container1 grid text-center">
            <div class="g-col-6"><img alt="high-life"className="responsive_img thirty" src="./images/30.png"></img></div>
            <div class="g-col-6"><img alt="high-life"className="responsive_img heart" src="./images/heart.png" /></div>

            </div>

          
             
      
                    <div class="grid nested-grid" Style="--bs-columns: 9;">
                        <div class="g-col-3"><img alt="high-life"className="responsive_img" src="./images/food.png"></img></div>
                        <div class="g-col-3"><img alt="high-life"className="responsive_img" src="./images/pride.png"></img></div>
                        <div class="g-col-3"><img alt="high-life"className="responsive_img" src="./images/rain.png"></img></div>
                        <div class="g-col-3"><img alt="high-life"className="responsive_img" src="./images/africans.png"></img></div>
                        <div class="g-col-3"><img alt="high-life"className="responsive_img" src="./images/blood.png"></img></div>
                        <div class="g-col-3"><img alt="high-life"className="responsive_img" src="./images/calendar.png"></img></div>
                    </div>
                   <div className="grid gridd container">
                <div className="g-col-8 love2"><button type="button" class="btn highlife-btn btn-success">Highlife TV Archivies</button></div>
                <div className='g-col-4 love2' ><img alt="high-life"className="love2" src="./images/love.png"></img></div>
                <div className="g-col-8 yellow2"></div>
                <div className='g-col-4 yellow2'><img alt="high-life"className="yellow2" src="./images/yellow.png"></img></div>

            </div>
           


         
                    
                   
            
            
       
    
            </div>
    
    

           
            
     

      

 



<Footer/>
    </div>


 

}

export default Grid;