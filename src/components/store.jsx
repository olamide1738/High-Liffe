import React from 'react';
import Footer from './store/footer';
import Navbar from './store/navbar';

function Store(){
    return <div>
        <Navbar/>

     
        <div>
            <div className=''>
               


                <div className="grid  book-grid text-center "> 
                    <div className="point g-col-12">
                        <a className='link' href="#">Home></a>
                        <a className='link' href="#">Store> </a>
                        <a className='link' href="#">Finding your destiny in the dirt</a>
                    </div>
                <div className="g-col-4"><img className=" responsive_img book" src='../images/book.png'></img></div>
                    <div className=' description g-col-8'>
                        <h1>Dig it: Finding your destiny in the dirt</h1>
                        <h3>3000</h3>
                        <p>Dig it:finding Your Destiny in the Dirt - DVD SERIES: Do you think about that one aspect of life tht hasnt turned out as you planned and say.is it time to keep pushing or just cut my losses?in this series.Pastor Steven Futrick shared with the Church how disappointed can change your directtion or strengthen you for the task ahead.if you've ever been frustrated by the pace of change or the intense effort and concentration it tasks to break through spiritually.you'll be energized by these teachings. it's all part of His plan, so prepare your heart and mind to Dig it!</p>
                        <div>
                            <label for="tentacles">Quantity</label>

                            <input type="number" id="quantity" name="tentacles"
                                min="1" max="100" />
                            <button type="button" class="btn cart-btn btn-success">ADD TO CART</button>
                        </div>
                    </div>
                </div>
               
       

          
    </div>
        
    </div>
        <h1 class="like">You will also like:</h1>
        <div className="grid text-center store-container">
            <div className="container g-col-3">
                <img src="../images/stop.png" className='responsive_img' />
                <h5>Don't stop: A spiritual guide to never ever quitting</h5>
                <h6>7000</h6>
            </div>
            <div className='container g-col-3'>
                <img src="../images/mighty.png" className=' responsive_img' />
                <h5>Mighty to save all who can</h5>
                <h6>1000</h6>
            </div>
            <div className='container g-col-3'>
                <img src="../images/faith.png" className=' responsive_img' />
                <h5>Faith is Trust(Tees) </h5>
                <h6>10000</h6>
            </div>
            <div className='container g-col-3'>
                <img src="../images/take.png" className=' responsive_img' />
                <h5>take back what's mine</h5>
                <h6>9000</h6>
            </div>
        </div>
    <div className="sub-store">


  

        </div>
        <Footer />
    </div>
   

}

export default Store;