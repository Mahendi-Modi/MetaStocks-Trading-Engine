import React from 'react'

function Hero() {
    return (
       <div className='container'>
        <div className='row text-center pt-5 m-4'>
          <p className='fs-2' style={{fontWeight: "600"}}>Charges</p>
          <p className='fs-5 text-muted'>List of all charges and        taxes</p>
        </div>

<div className='row text-center pt-5 pb-5' style={{marginTop: "150px", marginLeft: "100px", marginRight: "100px"}}>
        <div className='col-4 p-3'>
          <img src='media\images\pricing0.svg' alt='zero' style={{width: "80%"}}></img>
          <p className='fs-3 pb-2' style={{fontWeight: "600"}}>Free equity delivery</p>
          <p style={{ lineHeight: "1.75"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>
        </div>

         <div className='col-4 p-3'>
          <img src='media\images\intradayTrades.svg' alt='intradayTrades' style={{width: "80%"}}></img>
          <p className='fs-3 pb-2' style={{fontWeight: "600"}}>Intraday and F&O trades</p>
          <p style={{ lineHeight: "1.75"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        <div className='col-4 p-3'>
          <img src='media\images\pricingMF.svg' alt='pricingMF' style={{width: "80%"}}></img>
          <p className='fs-3 pb-2' style={{fontWeight: "600"}}>Free direct MF</p>
          <p style={{ lineHeight: "1.75"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
       </div>
      );
}

export default Hero;