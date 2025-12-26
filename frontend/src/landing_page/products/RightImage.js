import React from 'react'

function RightImage({imageURL, productName, productDescripton, learnMore}) {
    return (
       <div className='container'>
          <div className='row' style={{margin: "120px"}}>
      
              <div className='col-6' style={{paddingRight: "150px",   paddingTop: "90px"}}>

                <p className='fs-3' style={{ fontWeight: "500"}}>{productName}</p>

                <p style={{lineHeight: "1.75"}}>{productDescripton}</p>

                <div style={{ marginTop: "20px", marginBottom: "20px"}}>

                  <a style={{paddingRight: "80px", textDecoration: "none", color: "#6C5CE7", letterSpacing: "1.75"}} href={learnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></a> 

                </div>

          
               </div>
            <div className='col-4' >
              <img src={imageURL} style={{width: "175%", marginRight: "50px"}}/>
            </div>
            <div className='col-2 mx-5'></div>
          </div>
        </div>
      );
}

export default RightImage;