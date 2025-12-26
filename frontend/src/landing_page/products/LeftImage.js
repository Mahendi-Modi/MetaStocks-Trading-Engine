import React from 'react'

function LeftImage({imageURL, productName, productDescripton, tryDemo, learnMore, googlePlay, appStore}){
    return (
        <div className='container'>
          <div className='row' style={{margin: "120px"}}>
            <div className='col-6'>
              <img src={imageURL}/>
            </div>
            {/* <div className='col-1'></div> */}
            <div className='col-6' style={{paddingLeft: "150px", paddingTop: "50px"}}>
              <p className='fs-3' style={{paddingLeft: "40px", fontWeight: "500"}}>{productName}</p>
              <p style={{lineHeight: "1.75", paddingLeft: "40px"}}>{productDescripton}</p>

             <div style={{paddingLeft: "40px", marginTop: "20px", marginBottom: "20px"}}>
              <a style={{paddingRight: "80px", textDecoration: "none", color: "#6C5CE7", letterSpacing: "1.75"}} href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right"></i></a> 

              <a style={{ textDecoration: "none", color: "#6C5CE7", letterSpacing: "1.75"}}  href={learnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
             </div>

             <div style={{paddingLeft: "40px"}}> 
              <a  href={googlePlay}>
                <img src='media/images/googlePlayBadge.svg' style={{width: "45%", marginRight: "20px"}}/>
              </a>
              <a href={appStore}>
                <img src='media/images/appStoreBadge.svg' style={{width: "40%"}}/>
              </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default LeftImage;