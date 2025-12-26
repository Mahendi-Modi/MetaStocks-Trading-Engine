import React from 'react'

function Hero() {
    return (
        <div className='container'>
          <div className='row p-5 mt-5'>
            <h2 className='fs-3 p-5 text-center'>We pioneered the discount broking model in India. <br></br>
            Now, we are breaking ground with our technology.</h2>
          </div>
          
         <hr style={{color: "	rgba(129, 129, 129, 1)"}}></hr>
        
          <div className='row p-5 center m-5 ' style={{lineHeight: "1.5", fontSize: "1.2em"}}>
              <div className='col-1'></div>
              <div className='col-5 text-muted' style={{marginRight: "20px", fontSize: "17px"}}>
                <p>We launched MetaStocks on 12th December 2025 with a single mission to eliminate every barrier developers, analysts, and traders face while building and running high-performance trading systems. The name MetaStocks reflects our vision: Meta for intelligence and evolution, and Stocks for the markets we aim to simplify.</p>
                <p>Today, MetaStocks’s ultra-fast, low-latency architecture and clean, modular design make it a powerful engine for real-time market analysis and automated trading.</p>
                <p> With a rapidly growing community of users and developers, MetaStocks processes thousands of live data points per second and executes strategies with precision. Our aim is simple to make advanced trading technology accessible, customizable and efficient for everyone.</p>
              </div>


              <div className='col-5 text-muted'  style={{ fontSize: "17px"}}>
                <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
              <p><a href='#' style={{textDecoration: "none", color: "#6C5CE7"}}> Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
              <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
              </div>

              <div className='col-1'> </div>
          </div>


     
        </div>
      
        
      );
}

export default Hero;