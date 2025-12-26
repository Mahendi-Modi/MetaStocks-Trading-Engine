import React from 'react'

function Bojkerage() {
    return (
        <div className='container'>
          <div className='row m-5 p-5'>
            <div className='col'>
              <p className='text-center' style={{color: "#6C5CE7", fontWeight: "500"}}>Brokerage calculator</p>
              <ul className='text-muted'>
                <li style={{lineHeight: "1.75", paddingBottom: "6px"}}>Call & Trade and RMS auto square-off attract additional charges of ₹50 + GST per order.</li>
                <li  style={{lineHeight: "1.75", paddingBottom: "6px"}}>Digital contract notes will be sent via email.</li>
                <li style={{lineHeight: "1.75", paddingBottom: "6px"}}>Physical copies of contract notes, if required, will be charged ₹20 per contract note. Courier charges will be applicable.</li>
                <li style={{lineHeight: "1.75", paddingBottom: "6px"}}>For NRI accounts (Non-PIS), brokerage is 0.5% or ₹100 per executed equity order, whichever is lower.</li>
<li style={{lineHeight: "1.75", paddingBottom: "6px"}}>For NRI accounts (PIS), brokerage is 0.5% or ₹200 per executed equity order, whichever is lower.</li>
<li style={{lineHeight: "1.75", paddingBottom: "6px"}}>If the account has a debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>

              </ul>
            </div>
            <div className='col'>
                 <p className='text-center' style={{color: "#6C5CE7", fontWeight: "500"}}>List of charges</p>
            </div>
          </div>
        </div>
      );
}

export default Bojkerage;