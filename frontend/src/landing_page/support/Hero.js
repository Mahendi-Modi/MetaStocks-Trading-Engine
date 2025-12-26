import React from 'react'

function Hero() {
    return (

          <div className='row p-4' style={{backgroundColor: "#6C5CE7", color: "white"}}>
            <div className='col-2'></div>
            <div className='col-4 mt-5 mb-3 pb-5'>
              <p className='fs-4 pb-5 '>Support Portal</p>
              <p className='fs-5'>Search for an answer or browser help topics to create a ticket</p>
              <input type='text' placeholder='Eg. how do i activate F&Q, why is my order getting rejected..' style={{backgroundColor: "white", color: "grey", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "40px",paddingRight: "40px", borderRadius: "8px"}}/>
            <div className='pt-3'>
                <a style={{color: "white", marginRight: "15px"}} href='#'>Track account opening</a>
                 <a style={{color: "white", marginRight: "15px"}} href='#'>Track segment activation</a>   
                 <a style={{color: "white", marginRight: "15px"}} href='#'>Intradav margins</a>   
                 <a style={{color: "white"}} href='#'>Kite user manual</a>
            </div>
            </div>


            {/* ****************** */}
             <div className='col-4 mt-5 mb-3 pb-5' style={{paddingLeft: "100px"}}>
              <p className='pb-5 '><a href='#' style={{color: "white", paddingLeft: "250px", fontSize: "18px"}}>Track Tickets</a></p>
              <p className='fs-5'>Featured</p>
             <ol>
              <li><a style={{color: "white"}} href='#'>Current Takeovers and delisting - January 2026</a></li>
                 <li style={{marginTop: "20px"}}><a style={{color: "white"}} href='#'>Latest Intraday leverages - MIS & CO</a></li>  
             </ol>
               
                
            </div>
            <div className='col-2'></div>
          </div>
      
      );
}

export default Hero;