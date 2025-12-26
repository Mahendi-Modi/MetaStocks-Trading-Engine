import React from 'react'

function Hero(){
    return (
        <div className='container text-center'>
          <div className='row' style={{marginTop: "80px"}}>
            <p className='fs-3' style={{fontWeight: "600"}}>MetaStocks Products</p>
            <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
            <p className='check pt-2' style={{fontSize: "18px"}}>Check out our <a style={{textDecoration: "none", color: "#6C5CE7"}} href='#'>investment offerings →</a></p>
          </div>
          
          <div className='text-muted' style={{paddingTop: "100px", paddingLeft: "60px", paddingRight: "60px", color: "#b8b8b8ff"}}><hr></hr></div>
        </div>
      );
}

export default Hero